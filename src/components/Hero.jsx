// Hero.jsx
import { CirclePlay } from "lucide-react";
import CardArc from "./CardArc";

export default function Hero() {
    return (
        <header className="bg-[#53389E] text-white flex flex-col justify-center">
            {/* Container */}
            <div className="mx-auto max-w-full  px-4 sm:px-16 lg:px-8 pt-25 sm:pt-20 lg:pt-24">
                {/* Headline + subcopy + CTAs */}
                <div className="mx-auto max-w-3xl text-start md:text-center lg:text-center">
                    <p className="font-semibold text-[#E9D7FE] text-sm">Super. Simple. Banking.</p>

                    <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-semibold leading-tight">
                        Banking technology
                        <br />
                        that has your back.
                    </h1>

                    <p className="mt-5 text-base sm:text-lg text-white/80">
                        Simple, transparent banking. No hidden fees and free overdrafts.
                    </p>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button className="bg-white text-[#7F56D9] font-semibold py-3 px-6 rounded-lg shadow-lg inline-flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-gray-100 transition">
                            <CirclePlay className="w-5 h-5" />
                            <span>Demo</span>
                        </button>
                        <button className="bg-[#7F56D9] text-white font-semibold py-3 px-6 rounded-lg shadow-lg border border-white/20 w-full sm:w-auto hover:bg-[#6f45c7] transition">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
            {/* Full-width Card Arc (full-bleed) */}
            <div className="mt-12 lg:mt-16">
                {/* Break out of the centered page container and span the viewport */}
                <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
                    {/* Hide any side overflow on tiny screens */}
                    <div className="overflow-x-hidden">
                        {/* Keep the arc’s baseline + fit on mobile, grow to 100% by md */}
                        <div
                            className="
          origin-center
          [transform:translateZ(0)]
          scale-100 md:scale-100
          md:translate-y-0
        "
                        >
                            <CardArc />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}