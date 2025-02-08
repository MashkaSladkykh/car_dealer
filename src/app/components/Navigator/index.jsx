import Link from "next/link";
import Image from "next/image";

export const Navigator = ({
  link,
  text,
  img,
  alt,
  imgWidth,
  imgHeight,
  className,
}) => {
  return (
    <Link
      href={link}
      className={`flex px-4 py-2 text-blue-600 border-b-2 border-blue-600 hover:text-blue-700 hover:border-blue-700 transition duration-300 ${className}`}
    >
      {text}
      <Image
        className={`dark:invert ml-[8px] ${
          text === "Back" ? "rotate-180" : ""
        } `}
        src={img}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        priority
      />
    </Link>
  );
};
