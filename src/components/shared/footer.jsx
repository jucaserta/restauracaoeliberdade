import React, { useState } from 'react'
import FooterLogo from "../../assets/images/logo/logo-footernovo.png";
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

const PHONE_DISPLAY = '(11) 91695-0673'
const PHONE_TEL = '5511916950673'
const WHATSAPP = 'https://wa.me/5511916950673?text=Oi!%20Preciso%20de%20atendimento%20agora.'

export default function Footer() {
  const [year] = useState(new Date().getFullYear())

  return (
    <footer className="relative bg-off-white border-t border-t-light-green/40">
      <div className="container pt-14 lg:pt-20 space-y-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Coluna 1 */}
          <div className="col-span-12 lg:col-span-5">
            <div className="space-y-5 d2c_footer_content xl:max-w-[90%]">
              <a href="#d2c_hero" className="inline-block">
                <img
                  src={FooterLogo.src}
                  alt="Restauração e Liberdade"
                  width={380}
                  height={160}
                  loading="lazy"
                />
              </a>

              <p>
                Atendimento 24h com acolhimento discreto e orientação clara para família e paciente.
                Você fala com quem resolve e entende os próximos passos sem enrolação.
              </p>

              {/* CARD (quadrado) para os botões */}
              <div className="rounded-xl border border-light-green bg-white p-4 sm:p-5">
                <p className="text-sm text-darkgray mb-3">
                  Fale com a equipe agora:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="d2c_btn d2c_btn_primary w-full text-center"
                  >
                    Ligue agora
                  </a>

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="d2c_btn d2c_btn_secondary border-light-green/20 hover:text-dark-green w-full text-center"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
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

          {/* Contato (card) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="d2c_footer_content">
              <h4 className="d2c_footer_title">Contato</h4>

              <div className="rounded-xl border border-light-green bg-white p-5 space-y-4">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-3 text-darkgray hover:text-dark-green"
                >
                  <span className="w-10 h-10 rounded-lg border border-light-green grid place-items-center">
                    <FaPhoneAlt />
                  </span>
                  <span className="font-secondary">Telefone: {PHONE_DISPLAY}</span>
                </a>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-darkgray hover:text-dark-green"
                >
                  <span className="w-10 h-10 rounded-lg border border-light-green grid place-items-center">
                    <FaWhatsapp />
                  </span>
                  <span className="font-secondary">WhatsApp: {PHONE_DISPLAY}</span>
                </a>

                <div className="pt-2 border-t border-light-green/60">
                  <p className="text-sm text-darkgray">
                    Atendimento 24h. Resposta rápida.
                  </p>
                </div>
              </div>
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





