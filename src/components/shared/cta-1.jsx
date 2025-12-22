'use client'

import React from 'react'
import WhiteRightArrow from '../../assets/images/white-arrow-right.png'

const PHONE_TEL = '5511916950673'
const WHATSAPP = 'https://wa.me/5511916950673?text=Oi!%20Preciso%20de%20atendimento%20agora.'

export default function HealthCtaSection() {
  return (
    <section className="py-10 md:py-14" id="d2c_cta">
      <div className="container">
        <div className="bg-cta-2 bg-cover bg-center py-10 px-5 md:py-14 md:px-10 lg:py-20 lg:px-16 rounded-[18px]">
          <div className="lg:max-w-3/4 xl:max-w-[60%] 2xl:max-w-1/2 space-y-9 text-center lg:text-left">
            <h2
              className="d2c_title text-off-white"
              data-aos="fade-slide-up"
              data-aos-delay="400"
            >
              Precisa de ajuda agora?
            </h2>

            <p
              className="text-off-white text-xl"
              data-aos="fade-slide-up"
              data-aos-delay="600"
            >
              Atendimento 24h. Você fala com quem resolve e já sai com orientação clara dos próximos passos.
            </p>

            <div
              className="grid md:grid-cols-2 gap-4 bg-[#0E1901]/50 backdrop-blur-md p-6 lg:py-7 lg:px-9 rounded-xl border border-light-green/20"
              data-aos="fade-slide-up"
              data-aos-delay="800"
            >
              {[
                'Acolhimento imediato e discreto',
                'Orientação para a família',
                'Avaliação do caso sem enrolação',
                'Encaminhamento com agilidade',
              ].map((text, idx) => (
                <div key={idx} className="flex gap-2 items-baseline text-left">
                  <img
                    src={WhiteRightArrow.src}
                    alt="Seta"
                    width={20}
                    height={20}
                    className="max-w-fit"
                  />
                  <h4 className="text-off-white">{text}</h4>
                </div>
              ))}
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              data-aos="fade-slide-up"
              data-aos-delay="1000"
            >
              <a
                href={`tel:${PHONE_TEL}`}
                className="d2c_btn d2c_btn_primary hover:bg-off-white w-full sm:w-max text-center"
              >
                Ligue agora
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="d2c_btn d2c_btn_secondary text-off-white border-light-green/20 hover:text-dark-green w-full sm:w-max text-center"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
