'use client'
import Features from '../../../jsons/features.json'
import DetailsCard from '../../shared/details-card'
import detailThree from '../../../jsons/details-set-4.json'
import FeaturesImage4 from '../../../assets/images/features_image_4.jpg'
import FeaturesImage5 from '../../../assets/images/features_image_5.jpg'
import SectionHeader from '../../shared/section-header'

export default function FeaturesSection() {
    return (
        <section>
            <div className="container">
                <SectionHeader
                    subheading="Where Innovation Supports Every Treatment"
                    heading="Smart Features That Make Every Step Smoother and More Supportive"
                    className="lg:w-[80%] xl:w-[60%]"
                />

                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    {Features.map((item, index) => (
                        <div
                            key={index}
                            className={`col-span-12 md:col-span-6 lg:col-span-4 space-y-7 d2c_card p-3 ${index === 2 ? 'md:col-start-4' : ''
                                }`}
                            data-aos="fade-slide-up"
                            data-aos-delay={item.delay}
                        >
                            <div className="space-y-3 text-center md:text-left xl:px-4 pt-4">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                            <div>
                                <img
                                    src={item.img}
                                    width={600}
                                    height={400}
                                    className="w-full h-[200px] 2xl:h-[300px] object-cover rounded-xl"
                                    alt="Features Image"
                                />
                            </div>
                        </div>
                    ))}

                    {/* Final row with image + features */}
                    <div
                        className="col-span-12 d2c_card overflow-hidden"
                        data-aos="fade-slide-up"
                        data-aos-delay="600"
                    >
                        <div className="grid lg:grid-cols-2 gap-4 md:gap-20">
                            <div className="space-y-8 xl:space-y-12">
                                <DetailsCard data={detailThree} />
                            </div>

                            <div className="grid grid-cols-12 gap-4 md:gap-6 items-center">
                                <div
                                    className="col-span-12 md:col-span-6"
                                    data-aos="fade-right"
                                    data-aos-delay="800"
                                >
                                    <img
                                        src={FeaturesImage4.src}
                                        width={400}
                                        height={250}
                                        className="w-full h-[200px] object-cover rounded-xl"
                                        alt="Features Image"
                                    />
                                </div>
                                <div
                                    className="col-span-12 md:col-span-6 space-y-3 text-center md:text-left"
                                    data-aos="fade-left"
                                    data-aos-delay="800"
                                >
                                    <h4>Dedicated Pediatric Room</h4>
                                    <p className="text-base">
                                        Specially designed spaces for children, with calming colors
                                        and child-friendly equipment to ease every visit.
                                    </p>
                                </div>
                                <div
                                    className="col-span-12 md:col-span-6 space-y-3 text-center md:text-left"
                                    data-aos="fade-right"
                                    data-aos-delay="800"
                                >
                                    <h4>Doctor-Led Patient Navigation</h4>
                                    <p className="text-base">
                                        Our medical team walks you through each step of your care - you&apos;re
                                        never left wondering what&apos;s next.
                                    </p>
                                </div>
                                <div
                                    className="col-span-12 md:col-span-6"
                                    data-aos="fade-left"
                                    data-aos-delay="800"
                                >
                                    <img
                                        src={FeaturesImage5.src}
                                        width={600}
                                        height={400}
                                        className="w-full h-[200px] object-cover rounded-xl"
                                        alt="Features Image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
