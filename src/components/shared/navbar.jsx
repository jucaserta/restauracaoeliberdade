import { useEffect, useState } from "react";
import Logo from "../../assets/images/logo/logo-novo.png";

const PHONE_TEL = "5511986843656";
const WHATSAPP =
  "https://wa.me/5511986843656?text=Oi!%20Preciso%20de%20atendimento%20agora.";

const navLinks = [
  { name: "Início", href: "#d2c_hero" },
  { name: "Por que escolher", href: "#d2c_choose_us" },
  { name: "Estrutura", href: "#d2c_features" },
  { name: "Depoimentos", href: "#d2c_testimonial" },
  { name: "Contato", href: "#d2c_contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#d2c_hero");

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  useEffect(() => {
    const onHash = () => setActiveHash(window.location.hash || "#d2c_hero");
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const isActive = (href) => activeHash === href;

  const handleAnchorClick = (href) => {
    setMobileOpen(false);

    const id = href.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
      setActiveHash(href);
      return;
    }

    window.location.hash = href;
  };

  return (
    <header className="fixed z-40 w-full left-1/2 -translate-x-1/2 md:max-w-[1440px]">
      <div className="container">
        <nav className="d2c_navbar mt-5 p-2 bg-dark-green/50 backdrop-blur-md border border-light-green/20 rounded-2xl lg:rounded-full">
          <div className="flex items-center justify-between w-full gap-3 lg:gap-4 flex-wrap md:flex-nowrap">
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleAnchorClick("#d2c_hero")}
              className="pl-1 md:pl-3 xl:pl-5 shrink-0"
              aria-label="Ir para o início"
            >
              <img
                src={Logo.src}
                alt="Logo"
                width={220}
                height={80}
                className="d2c_logo max-w-[220px] object-contain"
              />
            </button>

            {/* Nav Links */}
            <div className="hidden lg:flex flex-1 min-w-0 justify-center mx-auto space-x-6 xl:space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleAnchorClick(link.href)}
                  className={`nav_link nav_link_Small text-[15px] xl:text-lg font-secondary font-medium capitalize py-2 transition-all duration-600 leading-[1] whitespace-nowrap ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-off-white hover:text-primary"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex md:ml-auto lg:ml-0 items-center gap-3 shrink-0">
              <a
                href={`tel:${PHONE_TEL}`}
                className="d2c_btn d2c_btn_secondary px-6 py-2 lg:px-6 lg:py-[14px] text-off-white border-light-green/20 hover:text-dark-green whitespace-nowrap"
              >
                Ligar agora
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="d2c_btn d2c_btn_primary px-6 py-2 lg:px-6 lg:py-[14px] hover:text-white whitespace-nowrap"
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
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      <aside
        className={`fixed top-0 right-0 w-[300px] h-screen bg-dark-green z-50 transition-all duration-500 ease-in-out ${
          mobileOpen ? "right-0" : "right-[-100%]"
        }`}
      >
        <div className="p-6 pt-4">
          <button
            onClick={() => setMobileOpen(false)}
            className="text-off-white border border-light-green/20 rounded-md p-2"
            aria-label="Fechar menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="flex flex-col space-y-3 mt-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleAnchorClick(link.href)}
                className={`text-left text-white text-lg font-primary font-semibold capitalize transition-all duration-300 nav_link ${
                  isActive(link.href) ? "text-primary" : ""
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="mt-8 space-y-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="d2c_btn d2c_btn_primary w-full text-center hover:text-white"
            >
              WhatsApp
            </a>

            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => setMobileOpen(false)}
              className="d2c_btn d2c_btn_secondary w-full text-center text-off-white border-light-green/20 hover:text-dark-green"
            >
              Ligar agora
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}
