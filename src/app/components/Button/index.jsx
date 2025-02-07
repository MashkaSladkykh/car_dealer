import Image from "next/image";

export const Button = ({ onClick, text, alt, img, imgWidth, imgHeight }) => {
  return (
    <button
      type="button"
      className="flex align-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      onClick={onClick}
    >
      {text}
      <Image
        className="dark:invert ml-[8px]"
        src={img}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        priority
      />
    </button>
  );
};
