"use client";

export default function DetailsCard({ data }) {
    if (!data) return null;

    return (
        <div className="space-y-6 xl:space-y-8">
            <div
                className="space-y-2 md:space-y-3 text-center md:text-left"
                data-aos="fade-slide-up"
                data-aos-delay="400"
            >
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>

            {data.details?.map((item, index) => (
                <div
                    key={index}
                    className="text-center md:text-left"
                    data-aos="fade-slide-up"
                    data-aos-delay={item.delay}
                >
                    <h4>{item.subtitle}</h4>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}
