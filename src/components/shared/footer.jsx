import React, { useEffect, useState } from "react";
import CtaSection from "./cta";

const PHONE_DISPLAY = "(11) 98684-3656";
const PHONE_TEL = "+5511986843656";
const WHATSAPP_LINK = "https://wa.me/5511986843656?text=Oi!%20Quero%20entender%20como%20funciona%20a%20interna%C3%A7%C3%A3o.";

const navLinks = [
  { label: "Início", href: "/#d2c_home" },
  { label: "Por que escolher", href: "/#d2c_why_choose_us" },
  { label: "Como ajudamos", href: "/#d2c_services" },
  { label: "Estrutura", href: "/#d2c_structure" },
  { label: "Depoimentos", href: "/#d2c_testimonial" },
  { label: "Contato", href: "/#d2c_contact" },
];

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <>
      {pathname !== "/contact/" && <CtaSection />}

      <footer
        className={`relative bg-off-white ${
          pathname === "/contact/"
            ? "pt-14 mt-5 lg:pt-20 lg:mt-10 border-t border-t-light-green"
            : ""
        }`}
      >
        <div className="container space-y-8 md:space-y-12 xl:space-y-16">
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            {/* Logo + Texto + CTA */}
            <div className="col-span-12 lg:col-span-5">
              <div className="space-y-4 d2c_footer_content xl:max-w-[85%]">
                <a href="/#d2c_home">
                  <img
                    src="/images/footer-logo.png?v=1"
                    alt="Restauração e Liberdade"
                    width={210}
                    height={50}
                    loading="lazy"
                    className="object-contain"
                  />
                </a>

                <p>
                  Atendimento 24h com acolhimento discreto e orientação clara para família e paciente.
                  Você fala com quem resolve e entende os próximos passos.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="d2c_btn d2c_btn_primary px-6 py-2 hover:text-white"
                  >
                    Ligue agora
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="d2c_btn px-6 py-2 border border-light-green/40 text-dark-green hover:text-primary rounded-full transition-all duration-300"
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
                <ul className="space-y-2">
                  {navLinks.map((l) => (
                    <li key={l.href}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contato (caixa bonitinha, dentro do quadrado) */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="d2c_footer_content">
                <h4 className="d2c_footer_title">Contato</h4>

                <div className="p-4 rounded-2xl border border-light-green/30 bg-white space-y-3">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="flex items-center gap-3 p-3 rounded-xl border border-light-green/20 hover:border-light-green/40 transition-all"
                  >
                    <span className="w-9 h-9 rounded-lg bg-off-white flex items-center justify-center border border-light-green/20">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.06a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div className="leading-tight">
                      <p className="font-semibold">Telefone</p>
                      <p className="text-sm">{PHONE_DISPLAY}</p>
                    </div>
                  </a>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-light-green/20 hover:border-light-green/40 transition-all"
                  >
                    <span className="w-9 h-9 rounded-lg bg-off-white flex items-center justify-center border border-light-green/20">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20.52 3.48A11.91 11.91 0 0 0 12.01 0C5.38 0 .01 5.37.01 12c0 2.11.55 4.16 1.6 5.97L0 24l6.2-1.62A12 12 0 0 0 24 12c0-3.19-1.24-6.2-3.48-8.52Z"
                          fill="currentColor"
                          opacity="0.18"
                        />
                        <path
                          d="M19.1 13.9c-.27-.14-1.62-.8-1.87-.9-.25-.09-.43-.14-.62.14-.18.27-.71.9-.87 1.08-.16.18-.32.2-.6.07-.27-.14-1.15-.42-2.2-1.34-.82-.73-1.38-1.63-1.54-1.9-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.99 2.65 1.13 2.83c.14.18 1.95 2.98 4.72 4.18.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div className="leading-tight">
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm">{PHONE_DISPLAY}</p>
                    </div>
                  </a>

                  <p className="text-sm text-darkgray">
                    Atendimento 24h. Resposta rápida.
                  </p>
                </div>
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
