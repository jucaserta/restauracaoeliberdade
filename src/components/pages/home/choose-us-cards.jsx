"use client";

import cards from "../../../jsons/choose-us-card.json";

export default function ChooseCards({ onlyInfo = false }) {
    return (
        <>
            {cards.map((item, index) => (
                <div
                    key={index}
                    className={`${item.gridClass} d2c_card group space-y-4 flex flex-wrap flex-row md:flex-col justify-center md:justify-between`}
                    data-aos="fade-slide-up"
                    data-aos-delay={item.delay}
                >
                    <div className="space-y-2 md:space-y-3 text-center md:text-left">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>

                    {!onlyInfo && (
                        <div>
                            <a
                                href={item.link}
                                className="d2c_btn mt-2 md:mt-4 group-hover:bg-primary"
                            >
                                {item.buttonText || "Explore Now"}
                            </a>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}
