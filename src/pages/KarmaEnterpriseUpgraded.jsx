import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import ScrollToTop from "../ScrollToTop";

// Lazy Components
const HeroSection = lazy(() => import("../components/HeroSection"));
const ServicesSection = lazy(() => import("../components/ServicesSection"));
const AboutSection = lazy(() => import("../components/AboutSection"));
const TeamSection = lazy(() => import("../components/TeamSection"));

export default function KarmaEnterpriseUpgraded() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // EmailJS Handler
  const handleSendEmail = (e) => {
    e.preventDefault();

    const userName = e.target.name.value;
    const userEmail = e.target.email.value;
    const userMessage = e.target.message.value;

    // Loading toast
    const toastId = toast.loading("Sending your message...");

    // 1️⃣ Send email to business
    emailjs
      .sendForm(
        "service_yenwjbf",
        "template_iagsbdk",
        e.target,
        "bOVvN8UbtcrO0r1nT"
      )
      .then(() => {
        // 2️⃣ Send auto email to user
        emailjs.send(
          "service_yenwjbf",
          "template_w7v4uzk",
          {
            to_name: userName,
            to_email: userEmail,
            user_message: userMessage,
          },
          "bOVvN8UbtcrO0r1nT"
        );

        // Success toast
        toast.success("Message sent successfully! Check your email.", {
          id: toastId,
        });

        setShowForm(false);
      })
      .catch((err) => {
        console.error(err);

        toast.error("Something went wrong. Please try again.", {
          id: toastId,
        });
      });
  };

  return (
    <Router>

      {/* 🔝 Always scroll to top on page change */}
      <ScrollToTop />

      {/* 🌐 Default tab title (Home / Hero page) */}
      <Helmet>
        <title>Karma Enterprise | Cybersecurity & IT Solutions</title>
        <link rel="icon" type="image/png" href="/logo.png" />
        <meta
          name="description"
          content="Cybersecurity, Cloud Security, DevSecOps, IT Infrastructure, VAPT, Web Development, Software Solutions."
        />
      </Helmet>

      {/* 🔥 Toast Component */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#240046",
            color: "#ffffff",
            border: "1px solid #ff00c8",
            padding: "12px 18px",
            fontSize: "15px",
          },
          success: {
            iconTheme: {
              primary: "#ff00c8",
              secondary: "#ffffff",
            },
          },
        }}
      />


      {/* NAVBAR */}
      {/* NAVBAR – Floating Neon Magnetic Menu */}
      {/* NAVBAR – Floating Neon Magnetic + Active Highlight + Shrink + Glow Trail */}
      {/* NAVBAR – Floating Neon Magnetic + Shrink + Glow Trail */}
      <header
        id="navbar"
        className="
    fixed top-0 w-full z-50 
    backdrop-blur-xl bg-[#0d0016]/40 
    border-b border-white/10
    transition-all duration-300
  "
      >
        {/* Neon Top Border Animation */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff00c8] via-[#9d4edd] to-[#ff00c8] animate-pulse"></div>

        {/* Glow Following Mouse */}
        <div
          id="nav-glow"
          className="
      hidden md:block fixed w-32 h-32 
      bg-[#ff00c8]/10 blur-3xl rounded-full opacity-60 
      pointer-events-none transition-transform duration-300 -z-10
    "
        ></div>

        <nav
          id="navbarInner"
          className="
      max-w-7xl mx-auto px-6 h-20 
      flex items-center justify-between text-white
      transition-all duration-300
    "
        >

          {/* LOGO + BRAND */}
          <div className="flex items-center gap-3 select-none">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer block"
            >
              <div>
                <h3 className="text-2xl font-bold text-white">Karma Enterprise</h3>
                <p className="text-sm mt-2 text-gray-400">Your Vision, Our Karma</p>
              </div>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div
            id="magnet-area"
            className="
        hidden md:flex items-center gap-12 
        text-gray-300 font-semibold relative select-none
      "
          >
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/team", label: "Our Team" }
            ].map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="
            group relative transition-all duration-300 
            hover:text-white nav-magnet
          "
              >
                {item.label}

                {/* Hover Underline Only */}
                <span
                  className="
              absolute left-0 -bottom-1 h-[2px] w-0 
              bg-gradient-to-r from-[#ff00c8] to-[#9d4edd]
              transition-all duration-300 group-hover:w-full
            "
                ></span>
              </Link>
            ))}

            {/* CONTACT BUTTON */}
            <button
              onClick={() => setShowForm(true)}
              className="
          group relative transition-all duration-300 
          hover:text-white nav-magnet
        "
            >
              Contact

              <span
                className="
            absolute left-0 -bottom-1 h-[2px] w-0 
            bg-gradient-to-r from-[#ff00c8] to-[#9d4edd]
            transition-all duration-300 group-hover:w-full
          "
              ></span>
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-3xl transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            className="
        md:hidden bg-[#170022]/95 
        border-t border-white/10 
        backdrop-blur-2xl text-white px-6 py-6 
        flex flex-col gap-6 text-center
        animate-[slideDown_0.3s_ease]
      "
          >
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/team" onClick={() => setMenuOpen(false)}>Our Team</Link>

            <button
              onClick={() => { setMenuOpen(false); setShowForm(true); }}
              className="text-[#ff00c8]"
            >
              Contact
            </button>
          </div>
        )}

        {/* INTERACTION SCRIPTS */}
        <script>
          {`
      /* Glow Trail */
      const glow = document.getElementById("nav-glow");
      window.addEventListener("mousemove", (e) => {
        glow.style.transform =
          "translate(" + (e.clientX - 50) + "px, " + (e.clientY - 50) + "px)";
      });

      /* Magnetic Hover Effect */
      const magnets = document.querySelectorAll('.nav-magnet');
      magnets.forEach((mag) => {
        mag.addEventListener('mousemove', (e) => {
          const rect = mag.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          mag.style.transform = 
            "translate(" + x * 0.15 + "px, " + y * 0.15 + "px)";
        });

        mag.addEventListener('mouseleave', () => {
          mag.style.transform = "translate(0px, 0px)";
        });
      });

      /* Scroll Shrink Effect */
      const nav = document.getElementById("navbar");
      const inner = document.getElementById("navbarInner");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          nav.style.height = "70px";
          inner.style.height = "70px";
          nav.style.background = "rgba(10,0,20,0.7)";
        } else {
          nav.style.height = "80px";
          inner.style.height = "80px";
          nav.style.background = "rgba(10,0,20,0.4)";
        }
      });
    `}
        </script>
      </header>




      {/* ROUTES */}
      <main className="pt-20">
        <Suspense fallback={<div className="text-center text-white py-24">Loading...</div>}>
          <Routes>
            <Route path="/" element={<><HeroSection /><ServicesSection /><AboutSection /></>} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/team" element={<TeamSection />} />
          </Routes>
        </Suspense>
      </main>

      {/* ======================
            FOOTER
         ====================== */}
      <footer className="relative bg-[#0b0014] text-gray-300 pt-16 pb-10 mt-32 border-t border-white/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff00c8] via-[#9d4edd] to-[#ff00c8] animate-pulse"></div>
        <div className="absolute -top-32 right-10 w-72 h-72 bg-[#ff00c8]/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white">Karma Enterprise</h3>
            <p className="text-sm mt-2 text-gray-400">Your Vision, Our Karma</p>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Delivering cybersecurity, IT infrastructure, digital transformation & cloud security solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>VAPT & Pen Testing</li>
              <li>Security Audits</li>
              <li>Cloud Security</li>
              <li>DevSecOps</li>
              <li>IT Infrastructure</li>
              <li>Web & App Development</li>
              <li>ERP & Custom Software</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-[#ff00c8]">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#ff00c8]">About</Link></li>
              <li><Link to="/services" className="hover:text-[#ff00c8]">Services</Link></li>
              <li><Link to="/team" className="hover:text-[#ff00c8]">Our Team</Link></li>
              <li><button className="hover:text-[#ff00c8]" onClick={() => setShowForm(true)}>Contact</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
            <p className="text-sm text-gray-400">
              📍 Surat, Gujarat, India
              <br />
              ✉ info@karmaenterprise.co
            </p>

            <div className="flex gap-5 mt-4">

              <a
                href="https://wa.me/917575839303"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
                title="Chat on WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-7 h-7" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.2 6.37 2.2 11.82c0 2.09.62 4.03 1.78 5.7L2 22l4.62-1.74c1.6.87 3.4 1.33 5.28 1.33 5.46 0 9.82-4.37 9.82-9.82C21.72 6.37 17.46 2 12.04 2z"></path>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/karma_enterprise_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
                title="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-7 h-7" viewBox="0 0 24 24">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/karmaenterprise/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
                title="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-7 h-7" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5A2.5 2.5 0 0 1 0 3.5 2.5 2.5 0 0 1 2.49 1a2.5 2.5 0 0 1 2.49 2.5zm.02 4H1v16h4V7.5zm4 0h4v2.2h.1c.5-.8 1.8-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.7v9.3h-4v-8.3c0-2-.1-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4v8.5h-4v-16z" />
                </svg>
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Karma Enterprise. All rights reserved.
        </div>
      </footer>

      {/* CONTACT POPUP */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-md">

          {/* Particles Behind Form */}
          <canvas id="contact-particles" className="absolute inset-0 opacity-30 pointer-events-none"></canvas>

          {/* Glow */}
          <div
            id="contact-glow"
            className="hidden md:block fixed w-72 h-72 bg-[#ff00c8]/10 blur-3xl rounded-full opacity-50 pointer-events-none transition-transform duration-300"
          ></div>

          <script>
            {`
      const cg = document.getElementById("contact-glow");
      window.addEventListener("mousemove", (e) => {
          cg.style.transform =
              "translate(" + (e.clientX - 150) + "px, " + (e.clientY - 150) + "px)";
      });

      // particles for popup
      const c = document.getElementById("contact-particles");
      const ctx = c.getContext("2d");
      let w, h;
      const particles = [];

      const initPopupParticles = () => {
          w = c.width = window.innerWidth;
          h = c.height = window.innerHeight;
          particles.length = 0;

          for (let i = 0; i < 40; i++) {
              particles.push({
                  x: Math.random() * w,
                  y: Math.random() * h,
                  r: Math.random() * 2 + 1,
                  dx: Math.random() * 0.5 - 0.25,
                  dy: Math.random() * 0.5 - 0.25
              });
          }
      };

      const drawPopupParticles = () => {
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

          requestAnimationFrame(drawPopupParticles);
      };

      initPopupParticles();
      drawPopupParticles();
      window.addEventListener("resize", initPopupParticles);
      `}
          </script>

          {/* Contact Box */}
          <div
            className="
        relative bg-[#1a0029]/60 backdrop-blur-xl 
        p-10 w-full max-w-lg rounded-2xl 
        border border-white/10 shadow-[0_0_30px_rgba(255,0,200,0.35)]
        animate-[fadeInUp_0.4s_ease]
      "
          >
            <h3 className="text-3xl font-bold text-center text-white mb-6">
              Get in <span className="text-[#ff00c8]">Touch</span>
            </h3>

            <form onSubmit={handleSendEmail} className="space-y-5">

              {/* Name */}
              <div>
                <label className="text-sm text-gray-300">Your Name</label>
                <input
                  name="name"
                  className="w-full p-3 mt-1 bg-[#3c096c]/30 border border-white/10 rounded focus:border-[#ff00c8] outline-none transition"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-300">Email Address</label>
                <input
                  name="email"
                  type="email"
                  className="w-full p-3 mt-1 bg-[#3c096c]/30 border border-white/10 rounded focus:border-[#ff00c8] outline-none transition"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-gray-300">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full p-3 mt-1 bg-[#3c096c]/30 border border-white/10 rounded focus:border-[#ff00c8] outline-none transition"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              {/* Send Button */}
              <button
                className="
            w-full py-3 rounded font-semibold mt-2
            bg-gradient-to-r from-[#ff00c8] to-[#9d4edd]
            shadow-[0_0_20px_rgba(255,0,200,0.4)]
            hover:shadow-[0_0_35px_rgba(255,0,200,0.6)]
            transition
          "
              >
                Send Message
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="w-full mt-3 text-gray-400 hover:text-white transition"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </Router>
  );
}
