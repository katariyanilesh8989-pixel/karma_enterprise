import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function AboutSection() {

    // 🟣 Particles for About Page
    useEffect(() => {
        const canvas = document.getElementById("about-particles");
        const ctx = canvas.getContext("2d");

        let w, h;
        const particles = [];

        const init = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = 500;
            particles.length = 0;

            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    r: Math.random() * 2 + 1,
                    dx: Math.random() * 0.6 - 0.3,
                    dy: Math.random() * 0.6 - 0.3
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, w, h);

            ctx.fillStyle = "#ffffff";
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

    return (
        <section className="relative py-28 overflow-hidden">
            <Helmet>
                <title>About Us | Karma Enterprise | Cybersecurity & IT Experts</title>

                <meta name="description" content="Learn more about Karma Enterprise — your trusted partner for cybersecurity, digital transformation, cloud security and IT solutions." />

                <meta name="keywords" content="about karma enterprise, cybersecurity team, IT company, cloud security company, DevSecOps experts" />

                <link rel="canonical" href="https://www.karmaenterprise.co/about" />

                <meta property="og:title" content="About Karma Enterprise" />
                <meta property="og:description" content="Cybersecurity & IT experts delivering secure, scalable solutions." />
                <meta property="og:url" content="https://www.karmaenterprise.co/about" />
                <meta property="og:image" content="/logo.png" />
            </Helmet>

            {/* Floating Particles */}
            <canvas
                id="about-particles"
                className="absolute inset-0 pointer-events-none opacity-40"
            ></canvas>

            {/* Soft neon background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#ff00c8]/10 via-[#3c096c]/20 to-transparent blur-3xl opacity-40"></div>

            {/* Mouse Glow */}
            <div
                id="about-glow"
                className="hidden md:block pointer-events-none fixed w-56 h-56 bg-[#ff00c8]/10 rounded-full blur-3xl opacity-40 transition-transform duration-300"
            ></div>

            <script>
                {`
                const g = document.getElementById("about-glow");
                window.addEventListener("mousemove", (e) => {
                    g.style.transform =
                        "translate(" + (e.clientX - 150) + "px, " + (e.clientY - 150) + "px)";
                });
                `}
            </script>

            <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">

                {/* Section Title */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8">
                    About <span className="text-[#ff00c8]">Karma Enterprise</span>
                </h2>

                {/* Primary Description */}
                <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-16">
                    Karma Enterprise is a trusted partner for cybersecurity, cloud, infrastructure,
                    and advanced digital solutions. We help organizations achieve strong security,
                    operational efficiency, and long-term scalability. Our team blends expertise,
                    innovation, and cutting-edge technology to protect and elevate your business.
                </p>

                {/* Mission & Vision */}
                <div className="bg-[#1a0029]/50 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(255,0,200,0.15)] rounded-2xl p-12 max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold text-white mb-6">
                        Our Mission & Vision
                    </h3>

                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                        <strong className="text-white">Mission : </strong>
                        Deliver secure, future-ready IT solutions that empower businesses to grow,
                        innovate, and stay protected in a rapidly evolving digital world.
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed">
                        <strong className="text-white">Vision : </strong>
                        Become a global leader in cybersecurity & digital transformation, setting
                        unmatched benchmarks in trust, innovation, and technological excellence.
                    </p>
                </div>

            </div>
        </section>
    );
}
