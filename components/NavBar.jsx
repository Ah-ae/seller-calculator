import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className="w-[20rem] flex justify-between items-center text-white text-xl">
      <Link legacyBehavior href="/">
        <a className={router.pathname === "/" ? "text-white" : "text-gray-200"}>
          마진
        </a>
      </Link>
      <Link legacyBehavior href="/selling-price">
        <a
          className={
            router.pathname === "/selling-price"
              ? "text-white"
              : "text-gray-200"
          }
        >
          판매가
        </a>
      </Link>
      <Link legacyBehavior href="/discount">
        <a
          className={
            router.pathname === "/discount" ? "text-white" : "text-gray-200"
          }
        >
          할인율
        </a>
      </Link>
      <Link legacyBehavior href="/event-price-reduction">
        <a
          className={
            router.pathname === "/event-price-reduction"
              ? "text-white"
              : "text-gray-200"
          }
        >
          행사가 환원
        </a>
      </Link>
    </nav>
  );
}
