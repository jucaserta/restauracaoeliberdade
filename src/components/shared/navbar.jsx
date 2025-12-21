import { useEffect, useState } from "react";

const HEADER_LOGO = "/images/logo.png";

const navLinks = [
    { name: "Início", href: "#top" },
    { name: "Por que escolher", href: "#d2c_choose_us" },
    { name: "Como ajudamos", href: "#d2c_services" },
    { name: "Estrutura", href: "#d2c_features" },
    { name: "Depoimentos", href: "#d2c_testimonial" },
    { name: "Contato", href: "#d2c_contact" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [pathname, setPathname] = useState("/");

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
    }, [mobileOpen]);

    useEffect(() => {
        if (typeof window !== "undefined") setPathname(window.location.pathname);
    }, []);

    const isActive = (href) => {
        if (typeof window === "undefined") return false;
        // pra anchors, não tem "active" real. Deixa simples.
        return false;
    };

    return (
        <header className="fixed z-40 w-full left-1/2 -translate-x-1/2 md:max-w-[1440px]">
            <div className="container">
                <nav className="d2c_navbar mt-5 p-2 bg-dark-green/50 backdrop-blur-md border border-light-green/20 rounded-2xl lg:rounded-full">
                    <div className="flex items-center justify-between flex-wrap w-full gap-3 lg:gap-6">
                        {/* Logo */}
                        <a href="#top" className="pl-1 md:pl-3 xl:pl-5">
                            <img
                                src={`${HEADER_LOGO}?v=2`}
                                alt="Restauração e Liberdade"
                                width={165}
                                height={60}
                                className="d2c_logo max-w-[165px] object-contain"
                            />
                        </a>

                        {/* Nav Links */}
                        <div className="hidden lg:flex justify-center mx-auto w-[60%] space-x-10">
                            {navLinks.map((link, idx) => (
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

                        {/* CTAs Desktop */}
                        <div className="hidden md:flex md:ml-auto lg:ml-0 gap-3">
                            <a
                                href="tel:SEU_TELEFONE"
                                className="d2c_btn d2c_btn_primary px-6 py-2 lg:px-6 lg:py-[14px] hover:text-white"
                            >
                                Ligue agora
                            </a>
                            <a
                                href="https://wa.me/SEU_WA"
                                target="_blank"
                                rel="noreferrer"
                                className="d2c_btn d2c_btn_secondary px-6 py-2 lg:px-6 lg:py-[14px] border-light-green/20 text-off-white hover:text-dark-green"
                            >
                                WhatsApp
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
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

            {/* Mobile Menu Drawer */}
            <aside
                className={`fixed top-0 right-0 w-[300px] h-screen bg-dark-green z-50 transition-all duration-500 ease-in-out ${
                    mobileOpen ? "right-0" : "right-[-100%]"
                }`}
            >
                <div className="p-6 pt-4">
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="text-off-white border border-gray rounded"
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
                                onClick={() => setMobileOpen(false)}
                                className="text-white text-lg font-primary font-semibold capitalize transition-all duration-300 nav_link"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-8 space-y-3">
                        <a
                            href="tel:SEU_TELEFONE"
                            className="d2c_btn d2c_btn_primary w-full justify-center hover:text-white"
                            onClick={() => setMobileOpen(false)}
                        >
                            Ligue agora
                        </a>
                        <a
                            href="https://wa.me/SEU_WA"
                            target="_blank"
                            rel="noreferrer"
                            className="d2c_btn d2c_btn_secondary w-full justify-center border-light-green/20 text-off-white hover:text-dark-green"
                            onClick={() => setMobileOpen(false)}
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </aside>
        </header>
    );
}
