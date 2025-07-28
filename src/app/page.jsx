import VerticalSideBySideReelRight from "@/components/verticalScroller/VerticalSideBySideReelRight";
import { topshowLogoFullPng, topshowLogoSvg } from "@/constants/imageExports";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="main__container h-screen flex bg-gradient-to-br from-black via-zinc-900 to-black text-white p-20">
      {/* Left content */}
      <section className="left__container w-1/2">
        <span className="main-header__container flex items-center gap-2">
          <Image src={topshowLogoSvg} alt="" className="w-10" />
          <h1 className="text-5xl font-bold">Topshow</h1>
        </span>
      </section>
      {/* Right-side reels */}
      <section className="right__container">
        <VerticalSideBySideReelRight />
      </section>
    </main>
  );
}
