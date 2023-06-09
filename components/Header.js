import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBar from "./NavBar";

export default function Header() {
  const [isHidden, setIsHidden] = useState(true);
  const onClick = () => {
    setIsHidden((cur) => !cur);
  };
  return (
    <header
      className={`${
        isHidden ? "h-13" : "h-28"
      } px-12 max-md:pl-2 max-md:pr-5 py-2 flex max-md:flex-col items-center bg-blue-300`}
    >
      <div className="max-md:w-full flex justify-between items-center">
        <Image
          src="/logo.svg"
          alt="logo image"
          width={172}
          height={48}
          className="mr-6"
        />
        <Image
          src="/og-image.svg"
          alt="open graph image"
          width={192}
          height={64}
          className="hidden"
        />
        <div
          className="hidden max-md:inline-block cursor-pointer"
          onClick={onClick}
        >
          <GiHamburgerMenu
            style={{ color: "white", transform: "scale(1.8)" }}
          />
        </div>
      </div>
      <div
        className={`${
          isHidden ? "max-md:hidden" : "max-md:flex w-full px-14 grow "
        }`}
      >
        <NavBar />
      </div>
    </header>
  );
}
