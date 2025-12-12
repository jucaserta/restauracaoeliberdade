'use client';

import React from 'react';

export default function SectionHeader({
    subheading,
    heading,
    description,
    subheadingDelay = 400,
    headingDelay = 600,
    descriptionDelay = 800,
    className = '',
}) {
    return (
        <div className={`d2c_section_header ${className}`}>
            {subheading && (
                <h5
                    className="d2c_lead_head"
                    data-aos="fade-slide-up"
                    data-aos-delay={subheadingDelay}
                >
                    {subheading}
                </h5>
            )}

            <h2
                className="d2c_title"
                data-aos="fade-slide-up"
                data-aos-delay={headingDelay}
            >
                {heading}
            </h2>

            {description && (
                <p
                    className="d2c_description mt-4"
                    data-aos="fade-up"
                    data-aos-delay={descriptionDelay}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
