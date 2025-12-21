'use client'
import React from 'react'
import ContactForm from './contact-form'
import SectionHeader from './section-header'
import ArrowRight from '../../assets/images/arrow-right.png'
import contactDetails from '../../jsons/contact-details.json'

const MAPS_EMBED =
  'https://www.google.com/maps?q=Cl%C3%ADnica%20Liberdade%20e%20Restaura%C3%A7%C3%A3o%20de%20Recupera%C3%A7%C3%A3o,%20R.%20Ardu%C3%ADno%20Novela,%20103%20-%20Jardim%20Irene,%20Santo%20Andr%C3%A9%20-%20SP,%2009170-570&output=embed'

export default function ContactSection() {
  return (
    <section id="d2c_contact">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
          <SectionHeader
            subheading="Contato"
            heading="Fale com a equipe agora"
            className="w-full"
          />

          <p
            data-aos="fade-slide-up"
            data-aos-delay="400"
            className="xl:max-w-[85%]"
          >
            Atendimento 24h. Você fala com quem resolve e recebe orientação clara sobre os próximos passos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-4 md:gap-6">
          {/* Form */}
          <div
            className="d2c_card p-8 xl:p-14"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="space-y-2 mb-6">
              <h3 className="text-2xl font-semibold text-dark-green">
                Envie uma mensagem rápida
              </h3>
              <p className="text-base">
                Preencha e a gente abre o WhatsApp já com tudo pronto.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Info + Mapa */}
          <div
            className="d2c_card p-8 xl:p-14 space-y-8 md:space-y-10"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-dark-green">
                Canais de atendimento
              </h3>
              <p className="text-base">
                Prefere ligação ou WhatsApp? Escolha abaixo.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {contactDetails.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-dark-green">{item.title}</h4>
                  <div className="flex gap-2 items-baseline xl:items-center">
                    <img
                      src={ArrowRight.src}
                      alt="Seta"
                      width={20}
                      height={20}
                      className="max-w-fit"
                    />
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.includes('wa.me') ? '_blank' : undefined}
                        rel={item.link.includes('wa.me') ? 'noreferrer' : undefined}
                        className="text-xl"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-xl">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-light-green overflow-hidden relative">
              <iframe
                src={MAPS_EMBED}
                loading="lazy"
                className="w-full h-[260px]"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Clínica Liberdade e Restauração"
              />
            </div>

            <p className="text-sm text-darkgray">
              Chegando por WhatsApp, mande seu bairro/cidade. A equipe orienta o melhor caminho.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
