export default function Footer() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-2 grid-cols-1">
          {/* Purple content section */}
          <div className="bg-[#53389E] flex flex-col justify-center min-h-[50vh] p-8 md:p-10 lg:p-12">
            <div className="mb-8 md:mb-10">
              <h2 className="font-extrabold text-3xl md:text-4xl text-white mb-4 leading-tight">
                Give us a shot
              </h2>
              <p className="font-light text-base md:text-lg text-white/90 leading-relaxed">
                Join over 4,000+ startups already growing with Untitled.
              </p>
            </div>

            <div className="flex flex-col  md:flex-row gap-6">
              {/* Button order reverses on small screens */}
              <button className="order-2 md:order-1 px-6 py-2  bg-white text-[#53389E] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Learn more
              </button>
              <button className="order-1 md:order-2 px-6 py-2  bg-[#7F56D9] text-white font-semibold rounded-lg hover:bg-white hover:text-[#53389E] transition-colors duration-200">
                Get started
              </button>
            </div>
          </div>

          {/* Image section */}
          <div className="h-64 md:h-auto">
            <img
              src="/image.jpg"
              alt="Team members collaborating around a desk with laptops"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
