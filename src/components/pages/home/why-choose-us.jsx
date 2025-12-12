import React from 'react'
import AboutImage from '../../../assets/images/about_img.jpg'
import SectionHeader from '../../shared/section-header'
import ChooseCards from './choose-us-cards'
import detailOne from '../../../jsons/details-set-1.json'
import DetailsCard from '../../shared/details-card'

export default function WhyChooseUs() {
    return (
        <section id="d2c_choose_us">
            <div className="container">
                <SectionHeader
                    subheading="Why Choose Medureon"
                    heading="Exceptional Medical Expertise with Care You Can Trust"
                />

                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    <ChooseCards />

                    <div className="col-span-12 lg:col-span-6 xl:col-span-7 d2c_card space-y-4 flex flex-wrap flex-row md:flex-col justify-center md:justify-between">
                        <div
                            className="space-y-2 md:space-y-3 text-center md:text-left"
                            data-aos="fade-slide-up"
                            data-aos-delay="400"
                        >
                            <h3>Compassionate Doctor-Patient Care</h3>
                            <p>
                                Every interaction is guided by empathy, trust, and personalized
                                attention - because healing starts with human connection.
                            </p>
                        </div>
                        <div data-aos="fade-slide-up" data-aos-delay="600">
                            <img
                                src={AboutImage.src}
                                width={800}
                                height={400}
                                className="h-[250px] md:h-[347px] w-full object-cover rounded-xl"
                                alt="Group Image"
                            />
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-6 xl:col-span-5 d2c_card space-y-4 flex flex-wrap flex-row md:flex-col justify-center md:justify-between">
                        <DetailsCard data={detailOne} />
                    </div>
                </div>
            </div>
        </section>
    )
}
