'use client';

import React, { useState } from 'react';
import services from '../../../jsons/services.json';
import ServiceCard from '../../shared/service-card';

export default function ServicesPageSection() {
    const INITIAL_COUNT = 8;
    const LOAD_MORE_COUNT = 4;

    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    const handleLoadMore = () => {
        const nextCount = Math.min(visibleCount + LOAD_MORE_COUNT, services.length);
        setVisibleCount(nextCount);
    };

    return (
        <div>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mt-10">
                    {services.slice(0, visibleCount).map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            delay={service.delay}
                        />
                    ))}
                </div>

                {visibleCount < services.length && (
                    <div className="flex justify-center mt-12" data-aos="fade-up">
                        <button onClick={handleLoadMore} className="d2c_btn d2c_btn_primary">
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
