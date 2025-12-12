import React, { useState, useEffect } from "react";
import FooterLogo from "../../assets/images/logo/footer-logo.png";
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
                className={`relative bg-off-white ${pathname === "/contact/"
                    ? "pt-14 mt-5 lg:pt-20 lg:mt-10 border-t border-t-light-green"
                    : ""
                    }`}
            >
                <div className="container space-y-6 md:space-y-10 xl:space-y-18">
                    {/* Grid */}
                    <div className="grid grid-cols-12 gap-4 md:gap-6">
                        {/* Logo & Description */}
                        <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-5">
                            <div className="space-y-4 d2c_footer_content xl:max-w-[80%] 2xl:max-w-[73%]">
                                <div>
                                    <a href="/">
                                        <img
                                            src={FooterLogo.src}
                                            alt="Logo"
                                            width={210}
                                            height={50}
                                            loading="lazy"
                                        />
                                    </a>
                                </div>
                                <p>
                                    Our medical equipment is built with the future of diagnostics,
                                    accuracy, and patient safety in mind - for every scale of care.
                                </p>
                            </div>
                        </div>

                        {/* Company Links */}
                        <div className="col-span-12 md:col-span-6 lg:col-span-2 xl:col-span-2 xl:pl-10">
                            <div className="d2c_footer_content">
                                <h4 className="d2c_footer_title">Company</h4>
                                <ul>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/services">Services</a></li>
                                    <li><a href="/blog">Blogs</a></li>
                                    <li><a href="#">Features</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Service Links */}
                        <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3 xl:pl-10">
                            <div className="d2c_footer_content">
                                <h4 className="d2c_footer_title">Service</h4>
                                <ul>
                                    <li><a href="/services">Smart Diagnostic Devices</a></li>
                                    <li><a href="/services">EMR Cloud Integration</a></li>
                                    <li><a href="/services">Equipment Installation</a></li>
                                    <li><a href="/services">Device Maintenance</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Support Links */}
                        <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2">
                            <div className="d2c_footer_content">
                                <h4 className="d2c_footer_title">Support</h4>
                                <ul>
                                    <li><a href="/contact">Contact Us</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="d2c_copyright">
                        <p className="text-base">
                            Copyright © {year}{" "}
                            <span className="font-bold text-base">DesignToCodes</span>. All
                            Right Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
