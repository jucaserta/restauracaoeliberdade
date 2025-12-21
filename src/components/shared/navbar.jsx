'use client'

import { useEffect, useState } from "react";

const PHONE_DISPLAY = "(11) 98684-3656";
const PHONE_TEL = "5511986843656";
const WHATSAPP_URL =
  "https://wa.me/5511986843656?text=" +
  encodeURIComponent("Oi! Preciso de atendimento agora. Pode me orientar?");

const navLinks = [
  { name: "Início", href: "#d2c_hero" },
  { name: "Por que escolher", href: "#d2c_choose_us" },
  { name: "Estrutura", href: "#d2c_features" },
  { name: "Depoimentos", href: "#d2c_testimonial" },
  { name: "Contato", href: "#d2c_contact" },
];

const scrollToHash = (hash) => {
  if (!hash || !hash.startsWith("#")) return;
  const el = document.querySelector(hash);
  if (!el) return;

  // Ajuste fino por causa do header fixo
  const headerOffset = 110;
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#d2c_hero");

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  useEffect(() => {
    const setFromHash = () => {
      const h = window.location.hash || "#d2c_hero";
      setActiveHash(h);
    };

    setFromHash();
    window.addEventListener("hashchange", setFromHash);

    // Se abrir o site já com hash, rola certinho
    if (window.location.hash) {
      setTimeout(() => scrollToHash(window.location.hash), 50);
    }

    return () => window.removeEventListener("hashchange", setFromHash);
  }, []);

  const handleAnchorClick = (href) => (e) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();

    setMobileOpen(false);
    setActiveHash(href);

    // Atualiza a URL sem “pular” seco
    history.replaceState(null, "", href);
    scrollToHash(href);
  };

  const isActive = (href) => activeHash === href;

  return (
    <header className="fixed z-40 w-full left-1/2 -translate-x-1/2 md:max-w-[1440px]">
      <div className="container">
        <nav className="d2c_navbar mt-5 p-2 bg-dark-green/50 backdrop-blur-md border border-light-green/20 rounded-2xl lg:rounded-full">
          <div className="flex items-center justify-between flex-wrap w-full gap-3 lg:gap-6">
            {/* Logo (sem import, direto do public) */}
            <a href="#d2c_hero" onClick={handleAnchorClick("#d2c_hero")} className="pl-1 md:pl-3 xl:pl-5">
              <img
                src={`/images/logo.png?v=1`}
                alt="Restauração e Liberdade"
                width={165}
                height={60}
                className="d2c_logo max-w-[165px] object-contain"
                loading="eager"
              />
            </a>

            {/* Links */}
            <div className="hidden lg:flex justify-center mx-auto w-[60%] space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleAnchorClick(link.href)}
                  className={`nav_link nav_link_Small text-base lg:text-lg font-secondary font-medium capitalize py-2 transition-all duration-600 leading-[1] ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-off-white hover:text-primary"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTAs desktop */}
            <div className="hidden md:flex items-center gap-3 md:ml-auto lg:ml-0">
              <a
                href={`tel:${PHONE_TEL}`}
                className="d2c_btn d2c_btn_primary px-6 py-2 lg:px-6 lg:py-[14px] hover:text-white"
              >
                Ligar agora
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="d2c_btn px-6 py-2 lg:px-6 lg:py-[14px] border border-light-green/20 text-off-white hover:text-primary"
              >
                WhatsApp
              </a>
            </div>

            {/* Mobile toggle */}
            <div className="lg:hidden ml-3">
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="p-2 bg-dark-green border border-light-green/20 rounded-md text-primary focus:outline-none transition-all duration-500"
                aria-label="Open mobile menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 right-0 w-[300px] h-screen bg-dark-green z-50 transition-all duration-500 ease-in-out ${
          mobileOpen ? "right-0" : "right-[-100%]"
        }`}
      >
        <div className="p-6 pt-4">
          <button
            onClick={() => setMobileOpen(false)}
            className="text-off-white border border-gray rounded p-1"
            aria-label="Close mobile menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex flex-col space-y-3 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleAnchorClick(link.href)}
                className={`text-white text-lg font-primary font-semibold capitalize transition-all duration-300 nav_link ${
                  isActive(link.href) ? "text-primary" : ""
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-6 space-y-3">
              <a href={`tel:${PHONE_TEL}`} className="d2c_btn d2c_btn_primary w-full text-center">
                Ligar agora
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="d2c_btn w-full text-center border border-light-green/20 text-off-white hover:text-primary"
              >
                WhatsApp
              </a>
              <p className="text-off-white/70 text-sm">Telefone: {PHONE_DISPLAY}</p>
            </div>
          </nav>
        </div>
      </aside>
    </header>
  );
}
