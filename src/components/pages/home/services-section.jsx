import SectionHeader from '../../shared/section-header'
import ServiceCard from '../../shared/service-card'
import React from 'react'
import Services from '../../../jsons/services.json'

const PHONE_TEL = '5511916950673'
const WHATSAPP = 'https://wa.me/5511916950673?text=Oi!%20Preciso%20de%20atendimento%20agora.'

export default function ServicesSection() {
  return (
    <section id="d2c_services">
      <div className="container">
        <SectionHeader
          subheading="Como ajudamos"
          heading="Acolhimento 24h e orientação clara do primeiro contato até os próximos passos"
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

        <div className="text-center mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${PHONE_TEL}`}
            className="d2c_btn d2c_btn_primary hover:text-white hover:border-light-green/20 w-full sm:w-max"
          >
            Ligue agora
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="d2c_btn d2c_btn_secondary border-light-green/20 hover:text-dark-green w-full sm:w-max"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
