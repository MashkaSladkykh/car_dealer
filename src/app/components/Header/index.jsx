import Image from "next/image";
import { Navigator } from "../Navigator";

export const Header = ({ btn }) => {
  return (
    <header className="flex gap-[8px] p-[16px] items-center justify-between pr-[32px]">
      <div className="flex items-center">
        <a href="/">
          <Image
            className="dark:invert"
            src="/logo.svg"
            alt="Car Dealer logo"
            width={180}
            height={38}
            priority
          />
        </a>
        <h1 className="text-lg font-semibold pt-[13px]">
          Make your dreams come true
        </h1>
      </div>

      {btn && (
        <Navigator
          link="/"
          text="Back"
          img="/next.svg"
          alt="back"
          imgHeight={13}
          imgWidth={20}
        />
      )}
    </header>
  );
};
