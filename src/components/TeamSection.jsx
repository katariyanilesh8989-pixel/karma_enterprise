import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function TeamSection() {
    const leaders = [
        {
            name: "Dhaval Vasava",
            role: "Founder",
            bio: "7+ years in cybersecurity, cloud architecture and IT strategy. Leads enterprise transformation with a security-first vision."
        },
        {
            name: "Nilesh Katariya",
            role: "Co-Founder",
            bio: "Automation & QA engineering  and Softare Development expert. Specializes in scalable frameworks and enterprise-grade software delivery."
        }
    ];

    // 🟣 Particle background
    useEffect(() => {
        const canvas = document.getElementById("team-particles");
        const ctx = canvas.getContext("2d");

        let w, h;
        const particles = [];

        const init = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = 450;
            particles.length = 0;

            for (let i = 0; i < 45; i++) {
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

            ctx.fillStyle = "#fff";
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
                <title>Our Team | Karma Enterprise</title>

                <meta name="description" content="Meet the founders of Karma Enterprise — Dhaval Vasava (Founder) and Nilesh Katariya (Co-Founder)." />

                <meta name="keywords" content="leadership team, founders, cybersecurity experts, karma enterprise team, dhaval vasava, nilesh katariya" />

                <link rel="canonical" href="https://www.karmaenterprise.co/team" />

                <meta property="og:title" content="Our Leadership Team | Karma Enterprise" />
                <meta property="og:description" content="Meet the key leadership members driving cybersecurity & IT innovation." />
                <meta property="og:image" content="/logo.png" />
            </Helmet>

            {/* Floating Particles */}
            <canvas
                id="team-particles"
                className="absolute inset-0 pointer-events-none opacity-40"
            ></canvas>

            {/* Neon gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#9d4edd]/10 via-[#3c096c]/20 to-transparent blur-3xl opacity-40"></div>

            {/* Mouse Glow */}
            <div
                id="team-glow"
                className="hidden md:block pointer-events-none fixed w-56 h-56 bg-[#ff00c8]/10 rounded-full blur-3xl opacity-40 transition-transform duration-300"
            ></div>

            <script>
                {`
                const tg = document.getElementById("team-glow");
                window.addEventListener("mousemove", (e) => {
                    tg.style.transform =
                        "translate(" + (e.clientX - 150) + "px, " + (e.clientY - 150) + "px)";
                });
                `}
            </script>

            <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">

                {/* Title */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Our <span className="text-[#ff00c8]">Leadership</span>
                </h2>

                <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-14">
                    Meet the minds driving innovation, strategy, and security excellence at Karma Enterprise.
                </p>

                {/* Team Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {leaders.map((leader, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-2xl text-left
                            bg-[#1a0029]/60 backdrop-blur-xl border border-white/10
                            shadow-[0_0_25px_rgba(255,0,200,0.15)]
                            hover:shadow-[0_0_35px_rgba(255,0,200,0.35)]
                            hover:border-[#ff00c8]/40
                            transform transition duration-500 hover:-translate-y-2 group"
                        >
                            <h4 className="text-2xl font-bold text-white group-hover:text-[#ff00c8] transition">
                                {leader.name}
                            </h4>
                            <p className="text-sm text-purple-200 mb-3">{leader.role}</p>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition">
                                {leader.bio}
                            </p>

                            <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#ff00c8] to-[#9d4edd] transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
