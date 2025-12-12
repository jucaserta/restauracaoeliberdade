import React from "react";
import SectionHeader from "./section-header";
import Arrow from "../../assets/images/arrow.png";

export default function CtaSection() {
    return (
        <section className="relative">
            <div className="container z-10 overflow-hidden">
                <div className="rounded-2xl bg-cta-1 bg-cover bg-center border border-light-green p-10 md:p-12 xl:p-24 relative">
                    <div className="space-y-7 text-center lg:max-w-[80%] xl:max-w-3/4 2xl:max-w-[60%] mx-auto">
                        <SectionHeader
                            heading="Schedule a Free Demo and Discover the  Difference"
                            description="From frontline doctors to hospital administrators, Medureon has gained praise for its reliability, efficiency, and innovation."
                            className="w-full text-center"
                        />
                        <div data-aos="fade-up" data-aos-delay="800">
                            <a href="/contact" className="d2c_btn d2c_btn_primary">
                                Contact a Specialist
                            </a>
                        </div>
                    </div>

                    {/* Left Arrow */}
                    <div className="absolute top-3 left-3 md:top-12 md:left-8 lg:top-24 lg:left-28 d2c_arrow_left">
                        <img src={Arrow.src} alt="Arrow" width={40} height={42} />
                    </div>

                    {/* Right Arrow */}
                    <div className="absolute bottom-3 right-3 md:bottom-12 md:right-8 lg:bottom-24 lg:right-28 d2c_arrow_right">
                        <img src={Arrow.src} alt="Arrow" width={40} height={42} />
                    </div>
                </div>
            </div>

            <div className="bg-off-white h-1/2 w-full absolute top-1/2 bottom-1/2 -z-10 border-t border-t-light-green"></div>
        </section>
    );
}
