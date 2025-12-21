import { useEffect, useState } from "react";

const PHONE_DISPLAY = "(11) 98684-3656";
const PHONE_TEL = "+5511986843656";
const WHATSAPP_LINK = "https://wa.me/5511986843656?text=Oi!%20Quero%20entender%20como%20funciona%20a%20interna%C3%A7%C3%A3o.";

const navLinks = [
  { name: "Início", href: "/#d2c_home" },
  { name: "Por que escolher", href: "/#d2c_why_choose_us" },
  { name: "Como ajudamos", href: "/#d2c_services" },
  { name: "Estrutura", href: "/#d2c_structure" },
  { name: "Depoimentos", href: "/#d2c_testimonial" },
  { name: "Contato", href: "/#d2c_contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const getCurrentHash = () => {
    if (typeof window === "undefined") return "";
    return window.location.hash || "";
  };

  const isActive = (href) => {
    if (typeof window === "undefined") return false;
    const targetHash = href.includes("#") ? href.split("#")[1] : "";
    const currentHash = getCurrentHash().replace("#", "");
    return targetHash && currentHash === targetHash;
  };

  return (
    <header className="fixed z-40 w-full left-1/2 -translate-x-1/2 md:max-w-[1440px]">
      <div className="container">
        <nav className="d2c_navbar mt-5 p-2 bg-dark-green/50 backdrop-blur-md border border-light-green/20 rounded-2xl lg:rounded-full">
          <div className="flex items-center justify-between flex-wrap w-full gap-3 lg:gap-6">
            {/* Logo */}
            <a href="/#d2c_home" className="pl-1 md:pl-3 xl:pl-5">
              <img
                src="/images/logo.png?v=1"
                alt="Restauração e Liberdade"
                width={165}
                height={60}
                className="d2c_logo max-w-[165px] object-contain"
                loading="eager"
              />
            </a>

            {/* Nav Links */}
            <div className="hidden lg:flex justify-center mx-auto w-[60%] space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
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

            {/* Desktop CTAs */}
            <div className="hidden md:flex md:ml-auto lg:ml-0 items-center gap-3 pr-1 md:pr-3 xl:pr-5">
              <a
                href={`tel:${PHONE_TEL}`}
                className="d2c_btn d2c_btn_primary px-6 py-2 lg:px-6 lg:py-[14px] hover:text-white"
              >
                Ligue agora
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="d2c_btn px-6 py-2 lg:px-6 lg:py-[14px] border border-light-green/30 text-off-white hover:text-primary rounded-full transition-all duration-300"
              >
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden ml-3">
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="p-2 bg-dark-green border border-light-green/20 rounded-md text-primary focus:outline-none transition-all duration-500"
                aria-label="Abrir menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      <aside
        className={`fixed top-0 right-0 w-[320px] h-screen bg-dark-green z-50 transition-all duration-500 ease-in-out ${
          mobileOpen ? "right-0" : "right-[-100%]"
        }`}
      >
        <div className="p-6 pt-4">
          <button
            onClick={() => setMobileOpen(false)}
            className="text-off-white border border-gray rounded p-2"
            aria-label="Fechar menu"
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
                onClick={() => setMobileOpen(false)}
                className={`text-white text-lg font-primary font-semibold capitalize transition-all duration-300 nav_link ${
                  isActive(link.href) ? "text-primary" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-8 space-y-3">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => setMobileOpen(false)}
              className="d2c_btn d2c_btn_primary w-full justify-center"
            >
              Ligue agora
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="d2c_btn w-full justify-center border border-light-green/30 text-off-white hover:text-primary rounded-full transition-all duration-300"
            >
              WhatsApp
            </a>

            <p className="text-sm text-off-white/70 mt-2">
              Atendimento 24h. Resposta rápida.
            </p>
            <p className="text-sm text-off-white/70">
              {PHONE_DISPLAY}
            </p>
          </div>
        </div>
      </aside>
    </header>
  );
}
