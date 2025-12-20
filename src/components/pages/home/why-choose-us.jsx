import React from 'react'
import AboutImage from '../../../assets/images/about_img.jpg'
import SectionHeader from '../../shared/section-header'
import ChooseCards from './choose-us-cards'
import detailOne from '../../../jsons/details-set-1.json'
import DetailsCard from '../../shared/details-card'

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

                    <div className="col-span-12 lg:col-span-6 xl:col-span-7 d2c_card space-y-4 flex flex-wrap flex-row md:flex-col justify-center md:justify-between">
                        <div
                            className="space-y-2 md:space-y-3 text-center md:text-left"
                            data-aos="fade-slide-up"
                            data-aos-delay="400"
                        >
                            <h3>Atendimento humano, discreto e focado em resultado</h3>
                            <p>
                                Você fala direto com nossa equipe. A gente entende o caso, orienta o melhor caminho e
                                explica como funciona a internação e o acompanhamento. Sem enrolação.
                            </p>

                            <div className="space-y-2 md:space-x-5 gap-4 mt-6 flex flex-col md:flex-row justify-center md:justify-start">
                                <div>
                                    <a
                                        href="tel:SEU_TELEFONE"
                                        className="d2c_btn d2c_btn_primary hover:text-white hover:border-light-green/20 w-full md:w-max"
                                    >
                                        Ligue agora
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://wa.me/SEU_WA"
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

                    <div className="col-span-12 lg:col-span-6 xl:col-span-5 d2c_card space-y-4 flex flex-wrap flex-row md:flex-col justify-center md:justify-between">
                        <DetailsCard data={detailOne} />
                    </div>
                </div>
            </div>
        </section>
    )
}
