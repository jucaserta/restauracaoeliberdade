import React from "react"

export default function ServiceCard({ title, image, description, delay }) {
    return (
        <div
            className="d2c_card d2c_services_card group transition-transform"
            data-aos="fade-slide-up"
            data-aos-delay={delay}
        >
            <div className="d2c_services_icon">
                <img src={image} alt={title} width={32} height={32} className="max-w-fit" />
            </div>
            <h4 className="d2c_services_title">{title}</h4>
            <p>{description}</p>
        </div>
    )
}
