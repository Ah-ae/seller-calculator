import NavBar from "./NavBar";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [isHidden, setIsHidden] = useState(true);
  const onClick = () => {
    setIsHidden((cur) => !cur);
  };
  return (
    <header
      className={`${
        isHidden ? "h-13" : "h-28"
      } px-12 max-md:pl-2 max-md:pr-5 py-2 flex max-md:flex-col items-center bg-gray-600`}
    >
      <div className="max-md:w-full flex justify-between items-center">
        <Image
          src="/logo.svg"
          alt="logo image"
          width={172}
          height={48}
          className="mr-6"
        />
        <div className="hidden max-md:inline-block" onClick={onClick}>
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
