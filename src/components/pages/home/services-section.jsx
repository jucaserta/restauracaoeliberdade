import SectionHeader from '../../shared/section-header'
import ServiceCard from '../../shared/service-card'
import React from 'react'
import Services from '../../../jsons/services.json'


export default function ServicesSection() {
    return (
        <section>
            <div className="container">
                <SectionHeader
                    subheading="What We Offer"
                    heading="Trusted Medical Services for Your Family's Health"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
                    {Services.slice(0, 4).map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            delay={service.delay}
                        />
                    ))}
                </div>

                <div className="text-center mt-10 md:mt-12">
                    <a href="/services" className="d2c_btn d2c_btn_primary">
                        Explore Services
                    </a>
                </div>
            </div>
        </section>
    )
}
