'use client'
import React from 'react';
import ContactForm from '../../shared/contact-form';
import SectionHeader from '../../shared/section-header';
import contactDetails from '../../../jsons/contact-details.json';

const layoutClass = [
    "col-span-12 md:col-span-6 lg:w-[25%] 2xl:w-[22%] space-y-2 md:pr-6 2xl:pr-8 text-center lg:text-left",
    "col-span-12 md:col-span-6 lg:w-[30%] 2xl:w-[30%] space-y-2 md:px-6 2xl:px-8 text-center lg:text-left md:border-l lg:border-l-0 border-l-light-green",
    "col-span-12 lg:col-start-3 lg:col-span-8 lg:w-[45%] 2xl:w-[48%] space-y-2 text-center lg:text-left px-6 2xl:px-8"
];

export default function ContactWrapper() {
    return (
        <section>
            <div className="container">
                <SectionHeader
                    subheading="Ready to Talk"
                    heading="Get in Touch With Our Team"
                    className='text-center mx-auto pt-16 md:pt-20'
                />

                <div className="mt-14 2xl:max-w-[85%] mx-auto space-y-16">
                    <div className="d2c_card p-8 xl:p-14" data-aos="fade-up" data-aos-delay="1000">
                        <ContactForm />
                    </div>

                    <div className="grid grid-cols-12 md:gap-8 lg:gap-0 lg:flex space-y-5 md:space-y-0 lg:px-8 lg:divide-x divide-light-green">
                        {contactDetails.map((item, index) => (
                            <div
                                key={index}
                                className={layoutClass[index] || ""}
                                data-aos="fade-slide-up"
                                data-aos-delay={400 + index * 200}
                            >
                                <h4>{item.title}</h4>
                                {item.link ? (
                                    <a href={item.link} className="text-xl break-words">{item.value}</a>
                                ) : (
                                    <p className="text-xl">{item.value}</p>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-light-green overflow-hidden relative group transition-all duration-500" data-aos="fade-slide-up" data-aos-delay="400">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989264.406238872!2d-110.19273863416588!3d42.97398627065218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875ee23448e12e69%3A0x26b02279d27d382f!2sWyoming%2C%20USA!5e0!3m2!1sen!2sbd!4v1750506182076!5m2!1sen!2sbd"
                            loading="lazy"
                            className="w-full h-[387px]"
                        ></iframe>
                        <div className="bg-off-white/70 absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full transition-all duration-600 group-hover:w-0 group-hover:h-0"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
