import React from "react";
import DetailsCard from "../../shared/details-card";
import SectionHeader from "../../shared/section-header";
import detailTwo from "../../../jsons/details-set-2.json";
import detailThree from "../../../jsons/details-set-3.json";
import ChooseCards from "../home/choose-us-cards";
import AboutImage1 from "../../../assets/images/about_img_1.jpg";
import AboutImage2 from "../../../assets/images/about_img_2.jpg";

export default function AboutWrapper() {
    return (
        <section>
            <div className="container">
                <SectionHeader
                    subheading="Why Choose Medureon"
                    heading="Redefining Medical Precision with Smarter Equipment"
                    className="text-center mx-auto pt-16 md:pt-20"
                />

                <div className="space-y-10 mt-8 md:mt-14 2xl:mt-20">
                    {/* First row */}
                    <div className="grid lg:grid-cols-2 gap-4 md:gap-8 d2c_card">
                        <div data-aos="fade-slide-up" data-aos-delay="400">
                            <img
                                src={AboutImage1.src}
                                width={800}
                                height={400}
                                className="rounded-xl"
                                alt="Doctor with patient"
                            />
                        </div>
                        <div className="space-y-10">
                            <DetailsCard data={detailTwo} />
                        </div>
                    </div>

                    {/* Second row */}
                    <div className="grid lg:grid-cols-2 gap-4 md:gap-8 d2c_card">
                        <div className="space-y-10">
                            <DetailsCard data={detailThree} />
                        </div>
                        <div data-aos="fade-slide-up" data-aos-delay="600">
                            <img
                                src={AboutImage2.src}
                                width={800}
                                height={400}
                                className="rounded-xl"
                                alt="Doctor with patient"
                            />
                        </div>
                    </div>

                    {/* Choose Cards */}
                    <div className="grid grid-cols-12 gap-4 md:gap-6">
                        <ChooseCards onlyInfo />
                    </div>
                </div>
            </div>
        </section>
    );
}
