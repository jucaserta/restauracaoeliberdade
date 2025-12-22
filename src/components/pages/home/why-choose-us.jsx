import React from "react";
import AboutImage from "../../../assets/images/about_img.jpg";
import SectionHeader from "../../shared/section-header";
import ChooseCards from "./choose-us-cards";
import detailOne from "../../../jsons/details-set-1.json";
import MiniSlider from "../../shared/mini-slider";

const PHONE_TEL = "5511916950673";
const WHATSAPP = "https://wa.me/5511916950673?text=Oi!%20Preciso%20de%20atendimento%20agora.";

export default function WhyChooseUs() {
  return (
    <section id="d2c_choose_us">
      <div className="container">
        <SectionHeader
          subheading="Por que escolher a Restauração e Liberdade"
          heading="Acolhimento 24h, método claro e suporte real para a família"
        />

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <ChooseCards />

          <div className="col-span-12 lg:col-span-6 xl:col-span-7 d2c_card flex flex-col gap-6">
            <div className="space-y-3 text-center md:text-left" data-aos="fade-slide-up" data-aos-delay="400">
              <h3>Atendimento humano, discreto e focado em resultado</h3>
              <p>
                Você fala direto com nossa equipe. A gente entende o caso, orienta o melhor caminho e
                explica como funciona a internação e o acompanhamento. Sem enrolação.
              </p>

              <div className="space-y-2 md:space-x-5 gap-4 mt-6 flex flex-col md:flex-row justify-center md:justify-start">
                <div>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="d2c_btn d2c_btn_primary hover:text-white hover:border-light-green/20 w-full md:w-max"
                  >
                    Ligue agora
                  </a>
                </div>

                <div>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="d2c_btn d2c_btn_secondary text-off-white border-light-green/20 hover:text-dark-green w-full md:w-max"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div data-aos="fade-slide-up" data-aos-delay="600">
              <img
                src={AboutImage.src}
                width={800}
                height={400}
                className="h-[250px] md:h-[347px] w-full object-cover rounded-xl"
                alt="Equipe de atendimento"
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 xl:col-span-5 d2c_card flex flex-col gap-4">
            <div className="text-center md:text-left" data-aos="fade-slide-up" data-aos-delay="400">
              <h3 className="mb-2">{detailOne?.title || "Unidade 1"}</h3>
              <p className="text-base md:text-lg">
                {detailOne?.description || ""}
              </p>
            </div>

            <div className="w-full" data-aos="fade-slide-up" data-aos-delay="600">
              <MiniSlider
                images={detailOne?.slider?.images || []}
                autoPlay={true}
                interval={3500}
                transitionMs={450}
                pauseOnHover={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
