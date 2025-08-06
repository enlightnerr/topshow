import VerticalSideBySideReelRight from "@/components/verticalScroller/VerticalSideBySideReelRight";
import {
  topshowLogoFullSvgWhite,
  topshowLogoSvg,
} from "@/constants/imageExports";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="main__container h-screen flex bg-gradient-to-br from-black via-zinc-900 to-black text-white p-20">
      {/* Left content */}
      <section className="left__container w-full md:w-1/2">
        <span className="main-header__container flex items-end gap-2">
          <Image src={topshowLogoFullSvgWhite} alt="" className="" />
        </span>
        <div className="main-header-items__container py-4">
          <h1 className="text-4xl font-bold">
            Stream Smarter. Discover Better.
          </h1>
        </div>
        <Link href="/home">Go to home</Link>
      </section>
      {/* Right-side reels */}
      <section className="right__container hidden sm:block">
        <VerticalSideBySideReelRight />
      </section>
    </main>
  );
}
