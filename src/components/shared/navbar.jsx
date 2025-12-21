import React, { useEffect, useState } from "react";
import CtaSection from "./cta";

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
        <div className="container space-y-6 md:space-y-10 xl:space-y-18">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Logo + texto */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-5">
              <div className="space-y-4 d2c_footer_content xl:max-w-[80%] 2xl:max-w-[73%]">
                <div>
                  <a href="#d2c_hero">
                    <img
                      src="/images/footer-logo.png"
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

                <div className="flex gap-2 pt-2">
                  <a
                    href="tel:+5511986843656"
                    className="d2c_btn d2c_btn_primary px-6 py-2 hover:text-white"
                  >
                    Ligue agora
                  </a>

                  <a
                    href="https://wa.me/5511986843656"
                    target="_blank"
                    rel="noreferrer"
                    className="d2c_btn px-6 py-2 border border-light-green/20 text-dark-green hover:text-primary rounded-full"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Navegação */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3 xl:pl-10">
              <div className="d2c_footer_content">
                <h4 className="d2c_footer_title">Navegação</h4>
                <ul>
                  <li><a href="#d2c_hero">Início</a></li>
                  <li><a href="#d2c_choose_us">Por que escolher</a></li>
                  <li><a href="#d2c_features">Estrutura</a></li>
                  <li><a href="#d2c_testimonial">Depoimentos</a></li>
                  <li><a href="#d2c_contact">Contato</a></li>
                </ul>
              </div>
            </div>

            {/* Contato */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-4">
              <div className="d2c_footer_content">
                <h4 className="d2c_footer_title">Contato</h4>

                <div className="mt-4 p-5 rounded-2xl border border-light-green/20 bg-white space-y-3">
                  <a
                    href="tel:+5511986843656"
                    className="flex items-center gap-3 text-dark-green hover:text-primary transition-all"
                  >
                    <span className="w-9 h-9 rounded-xl border border-light-green/20 flex items-center justify-center">
                      ☎
                    </span>
                    <span>(11) 98684-3656</span>
                  </a>

                  <a
                    href="https://wa.me/5511986843656"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-dark-green hover:text-primary transition-all"
                  >
                    <span className="w-9 h-9 rounded-xl border border-light-green/20 flex items-center justify-center">
                      🟢
                    </span>
                    <span>WhatsApp (11) 98684-3656</span>
                  </a>

                  <p className="text-sm text-darkgray pt-2 border-t border-light-green/10">
                    Atendimento 24h. Resposta rápida.
                  </p>
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
    </>
  );
}
