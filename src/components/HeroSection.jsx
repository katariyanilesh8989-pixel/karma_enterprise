import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function HeroSection() {

    /* ============================================================
       B + C — Canvas Particle Generator + Mouse Interaction
       ============================================================*/
    useEffect(() => {
        const canvas = document.getElementById("particle-canvas");
        const ctx = canvas.getContext("2d");

        let particles = [];
        let mouse = { x: null, y: null };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 1.3;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Create particles
        for (let i = 0; i < 70; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.4,
                speedY: (Math.random() - 0.5) * 0.4
            });
        }

        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                // Movement
                p.x += p.speedX;
                p.y += p.speedY;

                // Bounce edges
                if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

                // Draw
                ctx.fillStyle = "#ff00c8";
                ctx.shadowBlur = 12;
                ctx.shadowColor = "#ff00c8";
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Mouse attraction
                if (mouse.x && mouse.y) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        p.x += dx / 20;
                        p.y += dy / 20;
                    }
                }
            });

            requestAnimationFrame(animateParticles);
        };

        animateParticles();

        window.addEventListener("mousemove", e => {
            mouse.x = e.clientX;
            mouse.y = e.clientY - 80;
        });

        return () => {
            window.removeEventListener("mousemove", () => { });
        };
    }, []);

    /* ============================================================
       A + B + C — Updated Hero Section with canvas + animated bg
       ============================================================*/
    return (
        <section
            className="
        relative 
        overflow-hidden 
        text-center 
        pt-32 
        pb-24 
        animate-gradient-motion
      "
        >
            <Helmet>
                <title>Karma Enterprise | Cybersecurity, Cloud Security, DevSecOps & IT Solutions</title>

                <meta name="description" content="Karma Enterprise provides cybersecurity, VAPT, DevSecOps, IT infrastructure, cloud security, ERP systems and software development services." />

                <meta name="keywords" content="cybersecurity company, VAPT services, DevSecOps, cloud security, IT infrastructure, penetration testing, security audit, software development, ERP solutions, Karma Enterprise" />

                <link rel="canonical" href="https://www.karmaenterprise.co/" />

                {/* Open Graph (Facebook, LinkedIn) */}
                <meta property="og:title" content="Karma Enterprise | Cybersecurity & IT Solutions" />
                <meta property="og:description" content="Cybersecurity, VAPT, DevSecOps, IT Infrastructure, Cloud Security, Software Development." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.karmaenterprise.co/" />
                <meta property="og:image" content="/logo.png" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Karma Enterprise | Cybersecurity & IT Solutions" />
                <meta name="twitter:description" content="Trusted cybersecurity, cloud and IT solutions provider." />
                <meta name="twitter:image" content="/logo.png" />

                <link rel="icon" type="image/png" href="/logo.png" />
            </Helmet>

            {/* Canvas Particle Background */}
            <canvas id="particle-canvas"></canvas>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
                    Secure. Scale. Succeed.
                </h1>

                <p className="mt-6 text-gray-300 text-lg">
                    Empowering businesses with secure, scalable, and intelligent IT Solutions —
                    Cybersecurity • Cloud • DevSecOps • IT Infrastructure • ERP • Development.
                </p>

                <div className="mt-10">
                    <a
                        href="#services"
                        className="inline-block px-10 py-4 rounded-full bg-gradient-to-r 
            from-[#ff00c8] to-[#9d4edd] text-white font-semibold shadow-lg 
            hover:scale-105 transition"
                    >
                        Explore Services
                    </a>
                </div>
            </div>
        </section>
    );
}
