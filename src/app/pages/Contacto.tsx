import { motion } from "motion/react";
import { MailIcon, MessageSquareIcon, SendIcon } from "lucide-react";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="pt-18">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1A2B44] to-[#2A4464]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
              <MessageSquareIcon className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 text-white leading-tight">Contáctanos</h1>
            <p className="text-xl text-white/90">
              Estamos aquí para ayudarte. Envíanos tu mensaje
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl mb-6 text-[#1A2B44]">Hablemos</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Ya sea que tengas una pregunta, sugerencia o simplemente quieras saludarnos,
                estaremos encantados de escucharte. Respondemos todos los mensajes lo más rápido
                posible.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#1A2B44]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MailIcon className="text-[#1A2B44]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-[#1A2B44]">Email</h3>
                    <a
                      href="mailto:hola@nouri.app"
                      className="text-gray-600 hover:text-[#1A2B44] transition"
                    >
                      hola@nouri.app
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#1A2B44]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquareIcon className="text-[#1A2B44]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-[#1A2B44]">Soporte</h3>
                    <a
                      href="mailto:soporte@nouri.app"
                      className="text-gray-600 hover:text-[#1A2B44] transition"
                    >
                      soporte@nouri.app
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
                <h3 className="text-xl mb-4 text-[#1A2B44]">Preguntas frecuentes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Antes de contactarnos, revisa nuestras preguntas frecuentes. Probablemente
                  encuentres la respuesta a tu duda de manera inmediata.
                </p>
                <button className="mt-6 text-[#1A2B44] hover:underline">
                  Ver preguntas frecuentes →
                </button>
              </div>
            </motion.div>

            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2B44] focus:border-transparent transition"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2B44] focus:border-transparent transition"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2B44] focus:border-transparent transition"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2B44] focus:border-transparent transition resize-none"
                    placeholder="Cuéntanos más detalles..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1A2B44] text-white px-8 py-4 rounded-full hover:bg-[#2A3B54] transition shadow-lg flex items-center justify-center gap-2"
                >
                  <SendIcon size={20} />
                  Enviar mensaje
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-[#1A2B44]">
              ¿Aún no has probado NOURI?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Descubre cómo podemos ayudarte a gestionar tu inventario de alimentos
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://www.figma.com/proto/9NCls7dV0SlF1UO3k048IN/App-comida?node-id=67-317&viewport=-108%2C418%2C0.41&t=4WCnj0dimnplS4uk-1&scaling=min-zoom&content-scaling=fixed&page-id=67%3A2",
                  "_blank"
                )
              }
              className="bg-[#1A2B44] text-white px-8 py-4 rounded-full hover:bg-[#2A3B54] transition shadow-lg"
            >
              Ver demo interactiva
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
