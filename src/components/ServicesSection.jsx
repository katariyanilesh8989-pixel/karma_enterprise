import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function ServicesSection() {
    const services = [
        {
            title: "VAPT (Penetration Testing)",
            desc: "Web, mobile, API and network penetration testing with prioritized remediation."
        },
        {
            title: "Security Audits & Compliance",
            desc: "ISO & SOC2 readiness, audit consulting, security posture improvement."
        },
        {
            title: "Cloud Security & DevSecOps",
            desc: "Secure CI/CD pipelines, IaC hardening, cloud posture assessment."
        },
        {
            title: "IT Infrastructure Management",
            desc: "Servers, networking, backups, monitoring with guaranteed SLAs."
        },
        {
            title: "Web & App Development",
            desc: "Secure, modern web applications & mobile apps with pixel-perfect UI/UX."
        },
        {
            title: "ERP & Custom Software",
            desc: "Enterprise-grade ERP systems and fully customized business solutions."
        }
    ];

    /* ---------------------------------------------------
       PARTICLE BACKGROUND (CYBER SOFT PARTICLES)
    ------------------------------------------------------*/
    useEffect(() => {
        const canvas = document.getElementById("services-particles");
        const ctx = canvas.getContext("2d");

        let w, h;
        const particles = [];

        const init = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = 600;
            particles.length = 0;

            for (let i = 0; i < 70; i++) {
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    r: Math.random() * 2 + 1,
                    dx: Math.random() * 0.5 - 0.25,
                    dy: Math.random() * 0.5 - 0.25
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = "rgba(255,255,255,0.8)";

            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();

                p.x += p.dx;
                p.y += p.dy;

                if (p.x < 0 || p.x > w) p.dx *= -1;
                if (p.y < 0 || p.y > h) p.dy *= -1;
            });
            requestAnimationFrame(draw);
        };

        init();
        draw();
        window.addEventListener("resize", init);
        return () => window.removeEventListener("resize", init);
    }, []);

    /* ---------------------------------------------------
       MOUSE GLOW EFFECT (CYBER AURA)
    ------------------------------------------------------*/
    useEffect(() => {
        const glow = document.getElementById("mouse-glow");

        const moveGlow = (e) => {
            glow.style.transform =
                `translate(${e.clientX - 120}px, ${e.clientY - 120}px)`;
        };

        window.addEventListener("mousemove", moveGlow);
        return () => window.removeEventListener("mousemove", moveGlow);
    }, []);

    return (
        <section id="services" className="relative py-28 overflow-hidden">

            {/* ——— PAGE TITLE / TAB TITLE ——— */}
            <Helmet>
                <title>Services | VAPT, Security Audits, Cloud Security, IT Infrastructure</title>

                <meta name="description" content="Explore our services including VAPT, security audits, cloud security, DevSecOps, IT infra, ERP and custom development." />

                <meta name="keywords" content="VAPT services, penetration testing, SOC2 audit, ISO audit, cloud security, devsecops, cybersecurity services, IT infra management" />

                <link rel="canonical" href="https://www.karmaenterprise.co/services" />

                <meta property="og:title" content="Our Services | Karma Enterprise" />
                <meta property="og:description" content="Professional cybersecurity, cloud, DevSecOps, IT infra and development services." />
                <meta property="og:url" content="https://www.karmaenterprise.co/services" />
                <meta property="og:image" content="/logo.png" />

                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>


            {/* ——— PARTICLES ——— */}
            <canvas
                id="services-particles"
                className="absolute inset-0 pointer-events-none opacity-40"
            ></canvas>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* ——— TITLE ——— */}
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
                    Our <span className="text-[#ff00c8]">Services</span>
                </h2>

                {/* ——— SERVICES GRID ——— */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="
                                group p-8 rounded-2xl text-white 
                                bg-[#1a0029]/60 backdrop-blur-xl border border-white/10
                                shadow-[0_0_25px_rgba(255,0,200,0.15)]
                                transition transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,0,200,0.45)]
                                hover:border-[#ff00c8]/40
                                hover:bg-[#240046]/60
                            "
                        >
                            <h3 className="text-xl font-semibold group-hover:text-[#ff00c8] transition">
                                {s.title}
                            </h3>
                            <p className="mt-3 text-gray-300 group-hover:text-gray-200 transition">
                                {s.desc}
                            </p>

                            {/* ——— Underline Glow ——— */}
                            <div className="
                                mt-4 h-[2px] w-0 
                                bg-gradient-to-r from-[#ff00c8] to-[#9d4edd] 
                                transition-all duration-500 
                                group-hover:w-full
                            "></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ——— MOUSE GLOW ——— */}
            <div
                id="mouse-glow"
                className="
                    hidden md:block fixed w-60 h-60 
                    bg-[#ff00c8]/10 rounded-full blur-3xl 
                    opacity-50 pointer-events-none 
                    transition-transform duration-200 
                "
            ></div>
        </section>
    );
}
