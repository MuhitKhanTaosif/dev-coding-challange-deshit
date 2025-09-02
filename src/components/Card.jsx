export default function Card() {
    return (
        <div className="w-120 h-80 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg relative overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            </div>

            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white/10 via-transparent to-transparent"></div>
            </div>

            {/* Card Header */}
            <div className="flex justify-between items-start mb-8">
                <div className="text-xl font-black text-white/95 tracking-wider drop-shadow-md">
                    Untitled
                </div>
                <div className="text-sm font-semibold text-white/80 uppercase tracking-wide">
                    debit
                </div>
            </div>

            {/* Cardholder Name and Expiry */}
            <div className="flex justify-between items-end mb-6">
                <div className="flex flex-col">
                    <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
                        Valid Thru
                    </div>
                    <div className="text-base font-semibold text-white/90 tracking-wide font-mono">
                        03/29
                    </div>
                    <div className="text-sm font-bold text-white/95 uppercase tracking-widest mt-1 drop-shadow-sm">
                        JOHN DOE
                    </div>
                </div>

                {/* Mastercard Logo */}
                <div className="flex items-center">
                    <div className="w-12 h-8 relative">
                        <div className="absolute left-0 top-1 w-6 h-6 bg-red-600 rounded-full"></div>
                        <div className="absolute right-0 top-1 w-6 h-6 bg-orange-500 rounded-full"></div>
                        <div className="absolute left-3 top-1 w-6 h-6 bg-gradient-to-r from-red-600 to-orange-500 rounded-full mix-blend-multiply"></div>
                    </div>
                </div>
            </div>

            {/* Card Number */}
            <div className="text-xl font-semibold text-white/95 tracking-widest font-mono drop-shadow-sm mb-3 ">
                8924 7361 5582 9047
            </div>
        </div>
    );
};