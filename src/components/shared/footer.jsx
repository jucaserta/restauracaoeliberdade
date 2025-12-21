import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import CtaSection from "./cta";

const FOOTER_LOGO = "/images/logo.png"; // usa o mesmo, simples

const PHONE_DISPLAY = "(11) 98684-3656";
const PHONE_TEL = "tel:+5511986843656";
const WHATS_URL = "https://wa.me/5511986843656";

const navLinks = [
  { name: "Início", href: "#top" },
  { name: "Por que escolher", href: "#d2c_choose_us" },
  { name: "Como ajudamos", href: "#d2c_services" },
  { name: "Estrutura", href: "#d2c_features" },
  { name: "Depoimentos", href: "#d2c_testimonial" },
  { name: "Contato", href: "#d2c_contact" },
];

const infoLinks = [
  { name: "Atendimento 24h", href: "#d2c_choose_us" },
  { name: "Privacidade e discrição", href: "#d2c_choose_us" },
  { name: "Orientação para família", href: "#d2c_services" },
];

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const goTo = (href) => {
    if (!href?.startsWith("#")) {
      window.location.href = href;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {pathname !== "/contact/" && <CtaSection />}

      <footer className="relative bg-off-white pt-14 lg:pt-20">
        <div className="container space-y-6 md:space-y-10 xl:space-y-18">
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            {/* Logo + texto + CTAs */}
            <div className="col-span-12 lg:col-span-5">
              <div className="space-y-4 d2c_footer_content xl:max-w-[90%]">
                <a href="#top" onClick={(e) => { e.preventDefault(); goTo("#top"); }}>
                  <img
                    src={FOOTER_LOGO}
                    alt="Restauração e Liberdade"
                    width={210}
                    height={50}
                    loading="lazy"
                  />
                </a>

                <p>
                  Atendimento 24h com acolhimento discreto e orientação clara.
                  Você fala com quem resolve e entende os próximos passos sem enrolação.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                  <a
                    href={PHONE_TEL}
                    className="d2c_btn d2c_btn_primary w-full sm:w-fit"
                    aria-label={`Ligar agora ${PHONE_DISPLAY}`}
                  >
                    Ligue agora
                  </a>

                  <a
                    href={WHATS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="d2c_btn d2c_btn_secondary w-full sm:w-fit text-off-white border-light-green/20 hover:text-dark-green"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Navegação */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="d2c_footer_content">
                <h4 className="d2c_footer_title">Navegação</h4>
                <ul>
                  {navLinks.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={(e) => { e.preventDefault(); goTo(l.href); }}
                      >
                        {l.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contato (quadrado) */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="d2c_footer_content">
                <h4 className="d2c_footer_title">Contato</h4>

                <div className="rounded-xl border border-light-green/20 bg-white p-4 space-y-3">
                  <a
                    href={PHONE_TEL}
                    className="flex items-center gap-3 text-dark-green"
                  >
                    <span className="w-9 h-9 rounded-lg border border-light-green/20 flex items-center justify-center">
                      <FaPhoneAlt />
                    </span>
                    <span className="font-medium">{PHONE_DISPLAY}</span>
                  </a>

                  <a
                    href={WHATS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-dark-green"
                  >
                    <span className="w-9 h-9 rounded-lg border border-light-green/20 flex items-center justify-center">
                      <FaWhatsapp />
                    </span>
                    <span className="font-medium">WhatsApp {PHONE_DISPLAY}</span>
                  </a>

                  <p className="text-sm text-darkgray pt-2 border-t border-light-green/10">
                    Atendimento 24h. Resposta rápida.
                  </p>
                </div>
              </div>
            </div>

            {/* Informações */}
            <div className="col-span-12 lg:col-span-12">
              <div className="d2c_footer_content">
                <h4 className="d2c_footer_title">Informações</h4>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                  {infoLinks.map((l) => (
                    <li key={l.name}>
                      <a
                        href={l.href}
                        onClick={(e) => { e.preventDefault(); goTo(l.href); }}
                      >
                        {l.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="d2c_copyright">
            <p className="text-base">
              © {year} <span className="font-bold text-base">Restauração e Liberdade</span>. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
