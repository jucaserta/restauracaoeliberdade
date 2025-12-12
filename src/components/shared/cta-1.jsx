'use client'

import React from 'react'
import WhiteRightArrow from '../../assets/images/white-arrow-right.png'

export default function HealthCtaSection() {
    return (
        <section className="py-10 md:py-14">
            <div className="container">
                <div className="bg-cta-2 bg-cover bg-center py-10 px-5 md:py-14 md:px-10 lg:py-20 lg:px-16 rounded-[18px]">
                    <div className="lg:max-w-3/4 xl:max-w-[60%] 2xl:max-w-1/2 space-y-9 text-center lg:text-left">
                        <h2
                            className="d2c_title text-off-white"
                            data-aos="fade-slide-up"
                            data-aos-delay="400"
                        >
                            Ready to Take the Next Step in Your Health Journey?
                        </h2>

                        <p
                            className="text-off-white text-xl"
                            data-aos="fade-slide-up"
                            data-aos-delay="600"
                        >
                            Book a consultation, speak with our experts, or visit us directly — your care starts here.
                        </p>

                        <div
                            className="grid md:grid-cols-2 gap-4 bg-[#0E1901]/50 backdrop-blur-md p-6 lg:py-7 lg:px-9 rounded-xl border border-light-green/20"
                            data-aos="fade-slide-up"
                            data-aos-delay="800"
                        >
                            {[
                                'Quick Scheduling',
                                'Trusted Medical Experts',
                                'Track Your Progress',
                                'State-of-the-Art Facilities',
                            ].map((text, idx) => (
                                <div
                                    key={idx}
                                    className="flex gap-2 items-baseline text-left"
                                >
                                    <img
                                        src={WhiteRightArrow.src}
                                        alt="Right Arrow"
                                        width={20}
                                        height={20}
                                        className="max-w-fit"
                                    />
                                    <h4 className="text-off-white">{text}</h4>
                                </div>
                            ))}
                        </div>

                        <div data-aos="fade-slide-up" data-aos-delay="1000">
                            <a
                                href="#d2c_contact"
                                className="d2c_btn d2c_btn_primary hover:bg-off-white"
                            >
                                Contact a Specialist
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
