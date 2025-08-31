import VerticalSideBySideReelRight from "../components/verticalScroller/VerticalSideBySideReelRight";
import { topshowLogoFullSvgWhite } from "../constants/imageExports";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-6 py-10 sm:px-12 lg:px-20 overflow-hidden">
      {/* Left content */}
      <section className="z-10 w-full md:w-1/2 flex flex-col justify-center">
        <div className="main-header__container flex items-end gap-2">
          <Image
            src={topshowLogoFullSvgWhite}
            alt="Topshow logo"
            className=" lg:w-4/5 sm:w-56"
            priority
          />
        </div>

        <div className="main-header-items__container py-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            Stream Smarter.
            <br className="hidden sm:block" />
            Discover Better.
          </h1>
        </div>

        <Link
          href="/home"
          className="mt-4 inline-block rounded-md bg-white text-black font-semibold px-6 py-2 hover:bg-gray-200 transition"
        >
          Go to home
        </Link>
      </section>

      {/* Right-side vertical reels – only visible on sm+ */}
      <section className="hidden sm:block absolute right-0 top-0 h-full w-1/2 z-0">
        <VerticalSideBySideReelRight />
      </section>
    </main>
  );
}
