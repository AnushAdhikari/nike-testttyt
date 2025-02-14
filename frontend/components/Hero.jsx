import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

const Hero = () => {
    return (
        <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        onClick={clickHandler}
                        className="absolute left-0 rounded-full md:right-[51px] bottom-[50%] w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black/[0.5] z-10 flex items-center justify-center cursor-pointer hover:bg-stone-900"
                    >
                        <BiArrowBack className="text-sm md:text-lg" />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className="absolute rounded-full right-0 bottom-[50%] w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black/[0.5] z-10 flex items-center justify-center cursor-pointer hover:bg-stone-900"
                    >
                        <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                    </div>
                )}
            >
                <div>
                    <img
                        src="/slide-1.png"
                        className="aspect-[16/10] md:aspect-auto object-cover"
                    />
                    <div className="rounded-r-lg px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[-5px] md:bottom-[-5px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:bg-black hover:text-white">
                        Shop now
                    </div>
                </div>

                <div>
                    <img
                        src="/slide-2.png"
                        className="aspect-[16/10] md:aspect-auto object-cover"
                    />
                    <div className="rounded-r-lg px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[-5px] md:bottom-[-5px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:bg-black hover:text-white">
                        Shop now
                    </div>
                </div>

                <div>
                    <img
                        src="/slide-3.png"
                        className="aspect-[16/10] md:aspect-auto object-cover"
                    />
                    <div className="rounded-r-lg px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[-5px] md:bottom-[-5px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:bg-black hover:text-white">
                        Shop now
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Hero;
