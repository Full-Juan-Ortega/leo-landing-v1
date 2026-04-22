"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const WHATSAPP = "+5493513183324";
const INSTAGRAM = "https://www.instagram.com/kickstart.mkt/";
const YOUTUBE = "https://www.youtube.com/@kickstartmarketing-z4j";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setIsLoaded(true), 100);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias por suscribirte! Pronto recibirás nuestro eBook.");
  };

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-[#faf8f5]/80 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/brand-assets/Design/logos/tipo.png"
              alt="Kickstart"
              width={130}
              height={44}
              className="h-11 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center gap-10">
            <a href="#sistema" className="text-sm font-medium text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors relative group">
              Sistema KTS
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#e74c3c] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#resultados" className="text-sm font-medium text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors relative group">
              Resultados
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#e74c3c] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#blog" className="text-sm font-medium text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors relative group">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#e74c3c] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            className="btn-primary text-sm"
          >
            Contactar
          </a>
        </div>
      </header>

      {/* Floating Social Buttons */}
      <div className={`fixed bottom-8 right-8 z-50 flex flex-col gap-4 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.962-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.492.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m7.894-6.091a8.07 8.07 0 00-2.876-4.84 8.066 8.066 0 00-4.094-1.562 8.077 8.077 0 00-4.099 1.57 8.033 8.033 0 00-2.869 4.827 8.075 8.075 0 002.882 4.83 8.066 8.066 0 004.097 1.565 8.074 8.074 0 004.095-1.572 8.07 8.07 0 002.875-4.831z" />
          </svg>
        </a>
        <a
          href={INSTAGRAM}
          target="_blank"
          className="w-12 h-12 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
        <a
          href={YOUTUBE}
          target="_blank"
          className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className={`lg:col-span-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#e74c3c] uppercase mb-4">
                Marketing para Agencias de Viajes
              </span>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium text-[#1a1a1a] leading-[1.1] text-balance">
                Tu agencia de viajes{" "}
                <span className="text-[#e74c3c]">generando reservas</span> constantemente
              </h1>
              <p className="mt-6 text-lg text-[#6b6b6b] leading-relaxed max-w-lg">
                Hola, soy Kicki. Mi misión es ayudarte aplicando el sistema KTS a generar más consultas reales, capacitar a tu equipo para que venda más, y crear contenido estratégico.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  className="btn-primary text-center"
                >
                  Agendá tu auditoría gratis
                </a>
                <a
                  href="#sistema"
                  className="btn-secondary text-center"
                >
                  Conocer el sistema
                </a>
              </div>
            </div>
            <div className={`lg:col-span-6 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#e74c3c]/30 rounded-full" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e74c3c]/10 rounded-full" />
                <div className="relative animate-float">
                  <Image
                    src="/brand-assets/Design/kicki/sin fondo.png"
                    alt="Kicki - Fundadora de Kickstart Marketing"
                    width={450}
                    height={500}
                    className="w-full max-w-md lg:max-w-full mx-auto object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is KTS */}
      <section id="sistema" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#e74c3c] uppercase mb-4">
              El Sistema
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1a1a1a]">
              ¿Qué es el Sistema KTS?
            </h2>
            <p className="mt-6 text-lg text-[#6b6b6b] leading-relaxed">
              KTS (Kickstart Travel System) es un sistema completo diseñado exclusivamente para agencias de viajes que buscan profesionalizar su presencia digital, aumentar sus consultas y convertir más ventas.
            </p>
            <p className="mt-4 text-lg text-[#6b6b6b] leading-relaxed">
              Combinamos estrategia, marketing digital, herramientas de automatización y capacitación comercial en un solo programa que transforma tu negocio en 90 días.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits with Kicki Images */}
      <section id="resultados" className="py-24 lg:py-32 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#e74c3c] uppercase mb-4">
              Resultados
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1a1a1a]">
              ¿Qué resultados podés esperar con KTS?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "/brand-assets/Design/kicki/kicki idea.png",
                title: "Más consultas calificadas",
                desc: "Atraé clientes que ya están listos para comprar. Menos tiempo perdido. Más oportunidades reales.",
              },
              {
                image: "/brand-assets/Design/kicki/kicki fanfarrias.png",
                title: "Control total de cada lead",
                desc: "Sabés exactamente quién consultó, por dónde entró y en qué etapa está. Nada se pierde. Todo se sigue.",
              },
              {
                image: "/brand-assets/Design/kicki/kicki feliz.png",
                title: "Respuestas más rápidas",
                desc: "Automatizamos y ordenamos el flujo para responder cuando el cliente está listo para comprar.",
              },
              {
                image: "/brand-assets/Design/kicki/kicki estadisticas.png",
                title: "Publicidad que sí genera ventas",
                desc: "Campañas optimizadas para llevar tráfico directo al sistema, no a mensajes desordenados.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`card-hover bg-white p-8 lg:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="flex gap-6 items-start">
                  <div className="relative w-28 h-28 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain rounded-2xl"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#1a1a1a]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[#6b6b6b] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution CTA */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className={`transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#e74c3c] uppercase mb-4">
                El Problema
              </span>
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-medium">
                El error más común en agencias de viajes
              </h2>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                La mayoría gasta en publicidad sin estrategia de neuroventas detrás. El resultado: clics caros y cero reservas.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { num: "1", text: "Gancho emocional" },
                  { num: "2", text: "Oferta clara" },
                  { num: "3", text: "Cierre con urgencia" },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#e74c3c] text-white font-heading font-bold text-sm flex items-center justify-center">
                      {step.num}
                    </span>
                    <span className="text-white/80 font-medium">{step.text}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                className="inline-block mt-8 btn-primary"
              >
                Agendá tu auditoría gratis
              </a>
            </div>
            <div className={`flex justify-center transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#e74c3c]/20 rounded-full blur-3xl" />
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  <Image
                    src="/brand-assets/Design/kicki/kicki confiando.png"
                    alt="Resultados"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section id="blog" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#e74c3c] uppercase mb-4">
              Blog
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1a1a1a]">
              Consejos útiles
            </h2>
            <p className="mt-4 text-lg text-[#6b6b6b]">
              Enterate de las últimas tendencias en marketing para agencias de viajes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tendencias de marketing para la industria del turismo",
                desc: "Estrategias probadas para aumentar tus ventas.",
              },
              {
                title: "Cómo aumentar la visibilidad de tu destino turístico",
                desc: "Pasos prácticos para destacar en el mercado.",
              },
              {
                title: "La importancia de utilizar un CRM en tu agencia",
                desc: "Cómo organizar consultas y aumentar ventas.",
              },
            ].map((post, i) => (
              <div
                key={i}
                className={`group cursor-pointer transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="relative h-56 bg-[#faf8f5] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-[#e74c3c]/0 group-hover:bg-[#e74c3c]/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-display text-[#1a1a1a]/10 group-hover:text-[#e74c3c]/30 transition-colors duration-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#1a1a1a] group-hover:text-[#e74c3c] transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-[#6b6b6b]">{post.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#e74c3c] uppercase mb-4">
              Testimonios
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1a1a1a]">
              Empresas que crecen
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Caro",
                company: "Mio Turismo",
                text: "Estoy encantada con los resultados. Su enfoque estratégico realmente hizo la diferencia.",
              },
              {
                name: "Noe",
                company: "Planisferio Laguna Larga",
                text: "Su profesionalismo y conocimientos nos ayudaron a alcanzar nuestros objetivos.",
              },
              {
                name: "Vale",
                company: "Huinca Travel",
                text: "Han sido fundamentales en el crecimiento de nuestra agencia. Compromiso con la excelencia.",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <p className="text-[#6b6b6b] italic leading-relaxed">"{testimonial.text}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#e74c3c]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#e74c3c] font-heading font-semibold">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a1a]">{testimonial.name}</p>
                    <p className="text-sm text-[#6b6b6b]">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className={`transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#e74c3c] uppercase mb-4">
              Newsletter
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1a1a1a]">
              #1 MEJOR VENDEDOR
            </h2>
            <p className="mt-4 text-lg text-[#6b6b6b]">
              Suscribite y recibí consejos diarios de marketing para agencias de viajes
            </p>
            <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-6 py-4 rounded-full border border-gray-200 w-full sm:w-80 focus:outline-none focus:border-[#e74c3c] focus:ring-2 focus:ring-[#e74c3c]/20 transition-all"
                required
              />
              <button
                type="submit"
                className="btn-primary"
              >
                Suscribirse
              </button>
            </form>
            <p className="mt-6 text-sm text-[#6b6b6b]">
              Obtené nuestro eBook "La Gran Enciclopedia de las Ventas"
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Image
                  src="/brand-assets/Design/logos/tipo.png"
                  alt="Kickstart"
                  width={130}
                  height={44}
                  className="h-11 w-auto invert opacity-90"
                />
              </div>
              <p className="mt-3 text-white/60">
                El puntapie que tu agencia necesita
              </p>
            </div>
            <div className="text-center lg:text-right">
              <h4 className="font-heading font-semibold mb-3">Contáctanos</h4>
              <p className="text-white/60">Teléfono: +549 351 3183324</p>
              <p className="text-white/60">Email: leo@kickstartmarketing.com</p>
              <div className="mt-5 flex gap-5 justify-center lg:justify-end">
                <a href={INSTAGRAM} target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e74c3c] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.962-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.492.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m7.894-6.091a8.07 8.07 0 00-2.876-4.84 8.066 8.066 0 00-4.094-1.562 8.077 8.077 0 00-4.099 1.57 8.033 8.033 0 00-2.869 4.827 8.075 8.075 0 002.882 4.83 8.066 8.066 0 004.097 1.565 8.074 8.074 0 004.095-1.572 8.07 8.07 0 002.875-4.831z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}