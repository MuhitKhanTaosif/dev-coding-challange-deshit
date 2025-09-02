// CardArc.jsx
import React from "react";
import Card from "./Card";

export default function CardArc() {
    return (
        <div className=" w-full translate-x-1 flex  items-center justify-center overflow-hidden">
            <div className="relative w-full h-[450px] mx-auto ">
                {/* Left outer (most tilted) */}
                <div className="absolute left-1/2 -bottom-40 -translate-x-1/4 -ml-[500px] origin-center rotate-[15deg] z-0">
                    <Card className="shadow-2xl opacity-90" />
                </div>

                {/* Left inner */}
                <div className="absolute left-1/2 -bottom-10 -translate-x-1/3 -ml-[300px] origin-center rotate-[55deg] z-20">
                    <Card className="shadow-xl opacity-95" />
                </div>

                {/* Center (straight) */}
                <div className="absolute left-1/2 bottom-7 -translate-x-1/2 origin-center rotate-[90deg] z-30">
                    <Card className="shadow-2xl" />
                </div>

                {/* Right inner */}
                <div className="absolute left-1/2 -bottom-10 -translate-x-1/3 ml-[160px] origin-center rotate-[120deg] z-40">
                    <Card className="shadow-xl opacity-95" />
                </div>

                {/* Right outer (most tilted) */}
                <div className="absolute left-1/2 -bottom-50 -translate-x-1/ ml-[200px] origin-center rotate-[140deg] z-50">
                    <Card className="shadow-2xl opacity-90" />
                </div>
            </div>
        </div>
    );
}
