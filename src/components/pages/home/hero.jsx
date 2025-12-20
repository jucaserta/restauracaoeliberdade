import React from 'react'
import HeroImage1 from '../../../assets/images/hero_image_1.jpg'
import HeroImage2 from '../../../assets/images/hero_image_2.jpg'

const PHONE_DISPLAY = '(11) 98684-3656'
const PHONE_TEL = '+5511986843656'
const WHATSAPP = 'https://wa.me/5511986843656?text=Oi!%20Preciso%20de%20atendimento%20agora.'

export default function Hero() {
    return (
        <section className="bg-hero pt-32 md:pt-36 lg:pt-44 md:pb-20 lg:pb-32 xl:pb-20 2xl:pt-48" id="d2c_hero">
            <div className="container">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 items-center space-y-10 xl:space-y-0">
                    <div className="space-y-6 text-center xl:text-left">
                        <h5 className="d2c_lead_head bg-white inline-block" data-aos="fade-slide-up" data-aos-delay="400">
                            Atendimento humano e discreto
                        </h5>

                        <h1 className="d2c_hero_title" data-aos="fade-slide-up" data-aos-delay="600">
                            Clínica de <span>Recuperação</span> para <span>Dependência Química</span> e Alcoolismo
                        </h1>

                        <p className="text-off-white xl:pr-10 text-lg md:text-xl" data-aos="fade-slide-up" data-aos-delay="800">
                            Acolhimento 24h, equipe multidisciplinar e plano de cuidado individual. Suporte para paciente e família desde o primeiro contato.
                        </p>

                        <div className="space-y-2 md:space-x-5 gap-4 mt-10 flex flex-col md:flex-row justify-center xl:justify-start" data-aos="fade-slide-up" data-aos-delay="1000">
                            <div>
                                <a
                                    href={WHATSAPP}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="d2c_btn d2c_btn_primary hover:text-white hover:border-light-green/20 w-full md:w-max"
                                >
                                    Falar no WhatsApp
                                </a>
                            </div>
                            <div>
                                <a
                                    href={`tel:${PHONE_TEL}`}
                                    className="d2c_btn d2c_btn_secondary text-off-white border-light-green/20 hover:text-dark-green w-full md:w-max"
                                >
                                    Ligar agora
                                </a>
                            </div>
                        </div>

                        <p className="text-off-white/80 text-sm mt-2">
                            {PHONE_DISPLAY}
                        </p>
                    </div>

                    {/* Hero right */}
                    <div className="grid grid-cols-12 gap-4 2xl:gap-6 xl:pl-5">
                        <div className="col-span-12 md:col-span-6 d2c_hero_card d2c_card flex items-center order-1" data-aos="fade-up" data-aos-delay="400">
                            <div className="space-y-3 text-center md:text-left">
                                <h4 className="text-light-green">Atendimento 24 horas</h4>
                                <p className="text-light-green text-base">
                                    Você fala com nossa equipe a qualquer hora. Orientação rápida para entender o caso e os próximos passos.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-start justify-center">
                                    <a
                                        href={WHATSAPP}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-light-green text-sm underline underline-offset-4"
                                    >
                                        WhatsApp
                                    </a>
                                    <a
                                        href={`tel:${PHONE_TEL}`}
                                        className="text-light-green text-sm underline underline-offset-4"
                                    >
                                        Ligar agora
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 order-2 relative" data-aos="fade-slide-up" data-aos-delay="700">
                            <div className="d2c_hero_image_card relative overflow-hidden">
                                <img
                                    src={HeroImage1.src}
                                    alt="Clínica de recuperação"
                                    width={600}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-[#0E1901]/30"></div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 order-4 md:order-3 relative" data-aos="fade-slide-up" data-aos-delay="1300">
                            <div className="d2c_hero_image_card relative overflow-hidden">
                                <img
                                    src={HeroImage2.src}
                                    alt="Equipe de atendimento"
                                    width={600}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-[#0E1901]/30"></div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 d2c_hero_card d2c_card flex items-center order-3 md:order-4" data-aos="fade-slide-up" data-aos-delay="1000">
                            <div className="space-y-3 text-center md:text-left">
                                <h4 className="text-light-green">Plano individual</h4>
                                <p className="text-light-green text-base">
                                    Cada paciente recebe um plano alinhado ao histórico, fase do cuidado e suporte familiar.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-start justify-center">
                                    <a
                                        href={WHATSAPP}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-light-green text-sm underline underline-offset-4"
                                    >
                                        WhatsApp
                                    </a>
                                    <a
                                        href={`tel:${PHONE_TEL}`}
                                        className="text-light-green text-sm underline underline-offset-4"
                                    >
                                        Ligar agora
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
