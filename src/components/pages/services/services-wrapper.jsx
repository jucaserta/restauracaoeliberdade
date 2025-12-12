import React from 'react';
import ServicesPageSection from './services-page-section';
import SectionHeader from '../../shared/section-header';


export default function ServicesWrapper() {
    return (
        <>
            <div className="container text-center md:text-left pt-16 md:pt-20">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
                    <SectionHeader
                        subheading="What We Offer"
                        heading="Trusted Medical Services for Your Family's Health"
                        className="w-full pt-16 md:pt-20 items-baseline"
                    />
                    <p data-aos="fade-slide-up" data-aos-delay="400">
                        Bridges medical innovation with operational ease, offering
                        technology-driven tools that strengthen diagnostics, ensure
                        patient care.
                    </p>
                </div>
            </div>
            <ServicesPageSection client:only="react" />
        </>
    );
}
