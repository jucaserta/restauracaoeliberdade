import React, { useState } from 'react'
import FooterLogo from '../../assets/images/logo/footer-logo.png'

const PHONE_DISPLAY = '(11) 98684-3656'
const PHONE_TEL = '5511986843656'
const WHATSAPP = 'https://wa.me/5511986843656?text=Oi!%20Preciso%20de%20atendimento%20agora.'

export default function Footer() {
  const [year] = useState(new Date().getFullYear())

  return (
    <footer className="relative bg-off-white border-t border-t-light-green/40">
      <div className="container space-y-6 md:space-y-10 xl:space-y-18 pt-14 lg:pt-20">
        {/* Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Logo & Description */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-5">
            <div className="space-y-4 d2c_footer_content xl:max-w-[80%] 2xl:max-w-[73%]">
              <div>
                <a href="#d2c_hero">
                  <img
                    src={FooterLogo.src}
                    alt="Restauração e Liberdade"
                    width={210}
                    height={50}
                    loading="lazy"
                  />
                </a>
              </div>

              <p>
                Atendimento 24h com acolhimento discreto e orientação clara para família e paciente.
                Você fala com quem resolve e entende os próximos passos sem enrolação.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="d2c_btn d2c_btn_primary hover:text-white hover:border-light-green/20 w-full sm:w-max text-center"
                >
                  Ligue agora
                </a>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="d2c_btn d2c_btn_secondary border-light-green/20 hover:text-dark-green w-full sm:w-max text-center"
                >
                  Falar no WhatsApp
                </a>
              </div>

              <p className="text-sm text-darkgray">
                {PHONE_DISPLAY}
              </p>
            </div>
          </div>

          {/* Navegação (âncoras) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3 xl:pl-10">
            <div className="d2c_footer_content">
              <h4 className="d2c_footer_title">Navegação</h4>
              <ul>
                <li><a href="#d2c_hero">Início</a></li>
                <li><a href="#d2c_choose_us">Por que escolher</a></li>
                <li><a href="#d2c_services">Como ajudamos</a></li>
                <li><a href="#d2c_features">Estrutura</a></li>
                <li><a href="#d2c_contact">Contato</a></li>
              </ul>
            </div>
          </div>

          {/* Contato rápido */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2">
            <div className="d2c_footer_content">
              <h4 className="d2c_footer_title">Contato</h4>
              <ul>
                <li><a href={`tel:${PHONE_TEL}`}>Ligue agora</a></li>
                <li><a href={WHATSAPP} target="_blank" rel="noreferrer">Falar no WhatsApp</a></li>
                <li><a href="#d2c_contact">Abrir formulário</a></li>
              </ul>
            </div>
          </div>

          {/* Avisos */}
          <div className="col-span-12 md:col-span-6 lg:col-span-2 xl:col-span-2">
            <div className="d2c_footer_content">
              <h4 className="d2c_footer_title">Informações</h4>
              <ul>
                <li><a href="#d2c_contact">Atendimento 24h</a></li>
                <li><a href="#d2c_choose_us">Privacidade e discrição</a></li>
                <li><a href="#d2c_services">Orientação para família</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="d2c_copyright">
          <p className="text-base">
            © {year} <span className="font-bold text-base">Restauração e Liberdade</span>. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
