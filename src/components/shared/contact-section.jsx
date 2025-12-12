'use client'
import React from 'react'
import ContactForm from './contact-form'
import SectionHeader from './section-header'
import ArrowRight from '../../assets/images/arrow-right.png'
import contactDetails from '../../jsons/contact-details.json'

export default function ContactSection() {
    return (
        <>
            <section id="d2c_contact">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
                        <SectionHeader
                            subheading="Ready to Talk"
                            heading="Get in Touch With Our Team"
                            className="w-full"
                        />
                        <p
                            data-aos="fade-slide-up"
                            data-aos-delay="400"
                            className="xl:max-w-[80%]"
                        >
                            We respond within one business day and guide you through every next step
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-4 md:gap-6">
                        {/* Contact Form */}
                        <div
                            className="d2c_card p-8 xl:p-14"
                            data-aos="fade-up"
                            data-aos-delay="1000"
                        >
                            <ContactForm />
                        </div>

                        {/* Contact Info + Map */}
                        <div
                            className="d2c_card p-8 xl:p-14 space-y-8 md:space-y-14"
                            data-aos="fade-up"
                            data-aos-delay="1200"
                        >
                            <div className="space-y-4 text-center md:text-left">
                                <h2 className="d2c_title">Let&apos;s Talk</h2>
                                <p className="text-xl">Asked anything, or just say Hi!</p>
                            </div>

                            <div className="space-y-4 md:space-y-6">
                                {contactDetails.map((item, index) => (
                                    <div key={index} className="space-y-2">
                                        <h4>{item.title}</h4>
                                        <div className="flex gap-2 items-baseline xl:items-center">
                                            <img
                                                src={ArrowRight.src}
                                                alt="Right Arrow"
                                                width={20}
                                                height={20}
                                                className="max-w-fit"
                                            />
                                            {item.link ? (
                                                <a href={item.link} className="text-xl">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-xl">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Google Map */}
                            <div className="rounded-2xl border border-light-green overflow-hidden relative group transition-all duration-500">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989264.406238872!2d-110.19273863416588!3d42.97398627065218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875ee23448e12e69%3A0x26b02279d27d382f!2sWyoming%2C%20USA!5e0!3m2!1sen!2sbd!4v1750506182076!5m2!1sen!2sbd"
                                    loading="lazy"
                                    className="w-full h-[230px]"
                                ></iframe>
                                <div className="bg-off-white/70 absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full transition-all duration-600 group-hover:w-0 group-hover:h-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
