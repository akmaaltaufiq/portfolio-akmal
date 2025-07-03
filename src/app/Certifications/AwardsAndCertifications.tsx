// AwardsAndCertifications.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AwardsAndCertificationsProps {
  entryNumber: string;
  title: string;
  award: string;
  description: string;
  imageSrc?: string; // Optional project image source
  projectLink?: string; // Optional link for the project image
  trophyType: "first" | "second" | "third" | "special" | "participant" | string;
  techStackIcons?: string[]; // Optional array of paths to tech stack icons
}

const trophyImagePaths: Record<string, string> = {
  first: "/trophies/gold_trophy.png",
  second: "/trophies/silver_trophy.png",
  third: "/trophies/bronze_trophy.png",
  special: "/trophies/special_trophy.png",
  participant: "/trophies/participant_trophy.png",
};

const AwardsAndCertifications: React.FC<AwardsAndCertificationsProps> = ({
  entryNumber,
  title,
  award,
  description,
  imageSrc,
  projectLink,
  trophyType,
  techStackIcons,
}) => {
  const trophyImagePath = trophyImagePaths[trophyType];

  return (
    <div className="flex flex-col md:flex-row items-start w-full border-b border-white/[.15] py-6 md:py-10 last:border-b-0">
      <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold mr-0 md:mr-8 mb-4 md:mb-0 flex-shrink-0 w-full md:w-auto text-center md:text-left">
        {entryNumber}
      </div>

      <div className="flex flex-col md:flex-row flex-1">
        <div className="w-full md:w-1/3 aspect-video flex items-center justify-center rounded-lg overflow-hidden mb-6 md:mb-0 md:mr-8 flex-shrink-0">
          {imageSrc ? (
            projectLink ? (
              <Link
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full h-full items-center justify-center"
              >
                <Image
                  src={imageSrc}
                  alt={`Project for ${title}`}
                  className="object-contain w-full rounded-sm"
                  width={200}
                  height={300}
                />
              </Link>
            ) : (
              <Image
                src={imageSrc}
                alt={`Project for ${title}`}
                className="object-contain w-full h-full rounded-sm"
                width={500}
                height={300}
              />
            )
          ) : (
            <span className="text-gray-500 text-sm sm:text-base">
              Project Image
            </span>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center text-white/80 text-sm mb-2">
            {trophyImagePath && (
              <Image
                src={trophyImagePath}
                alt={`${award} Trophy`}
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1 object-contain"
                width={20}
                height={20}
              />
            )}
            <span>{award}</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
            {title}
          </h3>

          {techStackIcons && techStackIcons.length > 0 && (
            <div className="flex items-center space-x-2 mb-4">
              {techStackIcons.map((iconPath, iconIndex) => (
                <Image
                  key={iconIndex}
                  src={iconPath}
                  alt="Tech Stack Icon"
                  className="w-5 h-5 object-contain"
                  width={20}
                  height={20}
                />
              ))}
            </div>
          )}

          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AwardsAndCertifications;
