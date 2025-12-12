import React from 'react'
import HeroImage1 from '../../../assets/images/hero_image_1.jpg'
import HeroImage2 from '../../../assets/images/hero_image_2.jpg'
export default function Hero() {
    return (
        <section className="bg-hero pt-32 md:pt-36 lg:pt-44 md:pb-20 lg:pb-32 xl:pb-20 2xl:pt-48" id="d2c_hero">
            <div className="container">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 items-center space-y-10 xl:space-y-0">
                    <div className="space-y-6 text-center xl:text-left">
                        <h5 className="d2c_lead_head bg-white inline-block" data-aos="fade-slide-up" data-aos-delay="400">
                            Trusted Care for Everyone
                        </h5>
                        <h1 className="d2c_hero_title" data-aos="fade-slide-up" data-aos-delay="600">
                            Trusted <span>Heath Care</span> for Every <span>Family</span> Member
                        </h1>
                        <p className="text-off-white xl:pr-10 text-lg md:text-xl" data-aos="fade-slide-up" data-aos-delay="800">
                            We believe quality healthcare should feel personal, accessible, and trustworthy. Whether it&apos;s a routine checkup, ongoing management of chronic conditions, or urgent care needs.
                        </p>
                        <div className="space-y-2 md:space-x-5 gap-4 mt-10 flex flex-col md:flex-row justify-center xl:justify-start" data-aos="fade-slide-up" data-aos-delay="1000">
                            <div>
                                <a href="#d2c_contact" className="d2c_btn d2c_btn_primary hover:text-white hover:border-light-green/20 w-full md:w-max">
                                    Contact a Specialist
                                </a>
                            </div>
                            <div>
                                <a href="#d2c_choose_us" className="d2c_btn d2c_btn_secondary text-off-white border-light-green/20 hover:text-dark-green w-full md:w-max">
                                    How we Works
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Hero right */}
                    <div className="grid grid-cols-12 gap-4 2xl:gap-6 xl:pl-5">
                        <div className="col-span-12 md:col-span-6 d2c_hero_card d2c_card flex items-center order-1" data-aos="fade-up" data-aos-delay="400">
                            <div className="space-y-3 text-center md:text-left">
                                <h4 className="text-light-green">Same-Day Appointments</h4>
                                <p className="text-light-green text-base">
                                    No more waiting days for care. We offer same-day scheduling for most services, ensuring you get attention you need when it matters most.
                                </p>
                                <a href="#" className="text-light-green text-sm">
                                    Read more
                                </a>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 order-2 relative" data-aos="fade-slide-up" data-aos-delay="700">
                            <div className="d2c_hero_image_card relative overflow-hidden">
                                <img 
                                    src={HeroImage1.src} 
                                    alt="Male Doctor" 
                                    width={600} 
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-[#0E1901]/30"></div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 order-4 md:order-3 relative" data-aos="fade-slide-up" data-aos-delay="1300">
                            <div className="d2c_hero_image_card relative overflow-hidden">
                                <img 
                                    src={HeroImage2.src}
                                    alt="Women Doctor" 
                                    width={600} 
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-[#0E1901]/30"></div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 d2c_hero_card d2c_card flex items-center order-3 md:order-4" data-aos="fade-slide-up" data-aos-delay="1000">
                            <div className="space-y-3 text-center md:text-left">
                                <h4 className="text-light-green">On-Site Lab & Diagnostics</h4>
                                <p className="text-light-green text-base">
                                    From blood tests to ECGs, we provide rapid, accurate diagnostic testing in-house.
                                </p>
                                <a href="#" className="text-light-green text-sm">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
