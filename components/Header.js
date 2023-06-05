import NavBar from "./NavBar";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-13 px-12 py-2 flex bg-gray-600">
      <Image
        src="/logo.svg"
        alt="logo image"
        width={172}
        height={48}
        className="mr-6"
      />
      <NavBar />
    </header>
  );
}
