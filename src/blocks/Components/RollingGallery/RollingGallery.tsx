/*
    Installed from https://reactbits.dev/ts/tailwind/
*/

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
} from "framer-motion";

const IMGS: string[] = [
  "/certifications/FrontEnd.png",
  "/certifications/web.png",
  "/certifications/data_analytics.jpg",
  "/certifications/promotion.jpg",
  "/certifications/employability.jpg",
  "/certifications/workshop.jpg",
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  const galleryImages = images.length > 0 ? images : IMGS;
  const faceCount = galleryImages.length;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth <= 640 : false
  );
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const cylinderWidth: number = isScreenSizeSm ? 1100 : 1800;
  const faceWidth: number = (cylinderWidth / faceCount) * 1.5;
  const radius: number = cylinderWidth / (2 * Math.PI);

  const dragFactor: number = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val: number) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
  }, [autoplay]);

  const handleUpdate = (latest: any) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_: any, info: PanInfo): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: any, info: PanInfo): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-[275px] md:h-[450px] w-full overflow-hidden">
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {galleryImages.map((url, i) => {
            const itemTransform = `rotateY(${
              (360 / faceCount) * i
            }deg) translateZ(${radius}px)`;
            return (
              <div
                key={i}
                className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden] p-5 md:p-5"
                style={{
                  width: `${faceWidth}px`,
                  transform: itemTransform,
                }}
              >
                <Image
                  width={300}
                  height={300}
                  unoptimized
                  priority
                  src={url}
                  alt="gallery"
                  className="pointer-events-none rounded-[15px] border-[3px] border-white object-cover transition-transform duration-300 ease-out group-hover:scale-105 w-[200px] h-[190px] md:h-[270px] md:w-[310px]"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
