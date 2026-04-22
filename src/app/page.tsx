"use client";

import Image from "next/image";
import { useState } from "react";

const WHATSAPP = "+5493513183324";
const INSTAGRAM = "https://www.instagram.com/kickstart.mkt/";
const YOUTUBE = "https://www.youtube.com/@kickstartmarketing-z4j";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias por suscribirte! Pronto recibirás nuestro eBook.");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/brand-assets/Design/logos/tipo.png"
              alt="Kickstart"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sistema" className="text-gray-600 hover:text-primary transition">
              Sistema KTS
            </a>
            <a href="#resultados" className="text-gray-600 hover:text-primary transition">
              Resultados
            </a>
            <a href="#blog" className="text-gray-600 hover:text-primary transition">
              Blog
            </a>
          </nav>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-opacity-80 transition"
          >
            Contactar
          </a>
        </div>
      </header>

      {/* Floating Social Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.962-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.492.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m7.894-6.091a8.07 8.07 0 00-2.876-4.84 8.066 8.066 0 00-4.094-1.562 8.077 8.077 0 00-4.099 1.57 8.033 8.033 0 00-2.869 4.827 8.075 8.075 0 002.882 4.83 8.066 8.066 0 004.097 1.565 8.074 8.074 0 004.095-1.572 8.07 8.07 0 002.875-4.831z" />
          </svg>
        </a>
        <a
          href={INSTAGRAM}
          target="_blank"
          className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
        <a
          href={YOUTUBE}
          target="_blank"
          className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tu agencia de viajes{" "}
                <span className="text-primary">generando reservas</span> constantemente
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                Hola, soy Kicki. Mi misión es ayudarte aplicando el sistema KTS a
                generar más consultas reales, capacitar a tu equipo para que venda
                más, y crear contenido estratégico.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  className="bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition"
                >
                  Agendá tu auditoría gratis
                </a>
                <a
                  href="#sistema"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition"
                >
                  Conocer el sistema
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <Image
                  src="/brand-assets/Design/kicki/sin fondo.png"
                  alt="Kicki - Fundadora de Kickstart Marketing"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is KTS */}
      <section id="sistema" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            ¿Qué es el Sistema KTS?
          </h2>
          <p className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            KTS (Kickstart Travel System) es un sistema completo diseñado
            exclusivamente para agencias de viajes que buscan profesionalizar su
            presencia digital, aumentar sus consultas y convertir más ventas.
          </p>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Combinamos estrategia, marketing digital, herramientas de automatización y
            capacitación comercial en un solo programa que transforma tu negocio
            en 90 días.
          </p>
        </div>
      </section>

      {/* Benefits with Kicki Images */}
      <section id="resultados" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            ¿Qué resultados podés esperar con KTS?
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex gap-6 items-center">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src="/brand-assets/Design/kicki/kicki idea.png"
                  alt="Más consultas"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Más consultas calificadas
                </h3>
                <p className="mt-2 text-gray-600">
                  Atraé clientes que ya están listos para comprar. Menos tiempo
                  perdido. Más oportunidades reales.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex gap-6 items-center">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src="/brand-assets/Design/kicki/kicki fanfarrias.png"
                  alt="Control total"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Control total de cada lead
                </h3>
                <p className="mt-2 text-gray-600">
                  Sabés exactamente quién consultó, por dónde entró y en qué etapa
                  está. Nada se pierde. Todo se sigue.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex gap-6 items-center">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src="/brand-assets/Design/kicki/kicki feliz.png"
                  alt="Respuestas rápidas"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Respuestas más rápidas
                </h3>
                <p className="mt-2 text-gray-600">
                  Automatizamos y ordenamos el flujo para responder cuando el cliente
                  está listo para comprar.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex gap-6 items-center">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src="/brand-assets/Design/kicki/kicki estadisticas.png"
                  alt="Publicidad"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Publicidad que sí genera ventas
                </h3>
                <p className="mt-2 text-gray-600">
                  Campañas optimizadas para llevar tráfico directo al sistema, no a
                  mensajes desordenados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold">
                El error más común en agencias de viajes
              </h2>
              <p className="mt-4 text-lg text-white/90">
                La mayoría gasta en publicidad sin estrategia de neuroventas
                detrás. El resultado: clics caros y cero reservas.
              </p>
              <p className="mt-4 text-lg text-white/90">
                Las agencias con las que trabajamos aplican un sistema probado: 1) Gancho
                emocional, 2) Oferta clara, 3) Cierre con urgencia.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                className="inline-block mt-8 bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition"
              >
                Agendá tu auditoría gratis
              </a>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
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
      </section>

      {/* Tips Section */}
      <section id="blog" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Consejos útiles
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center">
            Enterate de las últimas tendencias en marketing para agencias de viajes
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
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
              <div key={i} className="group cursor-pointer">
                <div className="relative h-48 bg-gray-100 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-primary transition">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-600">{post.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Empresas que crecen
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
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
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <p className="text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            #1 MEJOR VENDEDOR
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Suscribite y recibí consejos diarios de marketing para agencias de viajes
          </p>
          <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-4 rounded-full border border-gray-300 w-full sm:w-80 focus:outline-none focus:border-primary"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-80 transition"
            >
              Suscribirse
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500">
            Obtené nuestro eBook &ldquo;La Gran Enciclopedia de las Ventas&rdquo;
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Image
                  src="/brand-assets/Design/logos/tipo.png"
                  alt="Kickstart"
                  width={120}
                  height={40}
                  className="h-10 w-auto invert"
                />
              </div>
              <p className="mt-2 text-white/80">
                El puntapie que tu agencia necesita
              </p>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-2">Contáctanos</h4>
              <p>Teléfono: +549 351 3183324</p>
              <p>Email: leo@kickstartmarketing.com</p>
              <div className="mt-4 flex gap-4 justify-center md:justify-end">
                <a href={INSTAGRAM} target="_blank" className="hover:text-white/80">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" className="hover:text-white/80">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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