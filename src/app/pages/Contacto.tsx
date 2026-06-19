import { motion } from "motion/react";
import { MailIcon, MessageSquareIcon, SendIcon } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';
import { useTheme } from "../context/ThemeContext";

export default function Contacto() {
  const [state, handleSubmit] = useForm("xpqbkolj");
  const { isDarkMode } = useTheme();

  return (
    <div className="pt-18">
      {/* Hero */}
      <section className={`py-20 px-6 ${isDarkMode ? 'bg-gradient-to-br from-[#4A6B94] to-[#6A8CB4]' : 'bg-gradient-to-br from-[#1A2B44] to-[#2A4464]'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-white/20' : 'bg-white/10'}`}>
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
      <section className={`py-20 px-6 ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-3xl mb-6 ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>Hablemos</h2>
              <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Ya sea que tengas una pregunta, sugerencia o simplemente quieras saludarnos,
                estaremos encantados de escucharte. Respondemos todos los mensajes lo más rápido
                posible.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${isDarkMode ? 'bg-gray-800' : 'bg-[#1A2B44]/10'}`}>
                    <MailIcon className={isDarkMode ? 'text-[#6A8CB4]' : 'text-[#1A2B44]'} size={24} />
                  </div>
                  <div>
                    <h3 className={`text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>Email</h3>
                    <a
                      href="mailto:hola@nouri.app"
                      className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-[#1A2B44]'} transition`}
                    >
                      scardonan@ut.edu.co
                      <br />
                      squirogav@ut.edu.co
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${isDarkMode ? 'bg-gray-800' : 'bg-[#1A2B44]/10'}`}>
                    <MessageSquareIcon className={isDarkMode ? 'text-[#6A8CB4]' : 'text-[#1A2B44]'} size={24} />
                  </div>
                  <div>
                    <h3 className={`text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>Soporte</h3>
                    <a
                      href="mailto:soporte@nouri.app"
                      className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-[#1A2B44]'} transition`}
                    >
                      scardonan@ut.edu.co
                      <br />
                      squirogav@ut.edu.co
                    </a>
                  </div>
                </div>
              </div>

              <div className={`mt-12 p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className={`text-xl mb-4 ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>Preguntas frecuentes</h3>
                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Antes de contactarnos, revisa nuestras preguntas frecuentes. Probablemente
                  encuentres la respuesta a tu duda de manera inmediata.
                </p>
                <button className={`mt-6 ${isDarkMode ? 'text-[#6A8CB4] hover:text-[#8AACD4]' : 'text-[#1A2B44] hover:text-[#2A3B54]'} hover:underline`}>
                  Ver preguntas frecuentes →
                </button>
              </div>
            </motion.div>

            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="min-h-full flex items-center justify-center"
            >
              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center w-full"
                >
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-gray-700' : 'bg-green-100'}`}>
                    <SendIcon className={isDarkMode ? 'text-[#6A8CB4]' : 'text-green-600'} size={40} />
                  </div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-[#6A8CB4]' : 'text-green-600'}`}>
                    ¡Mensaje enviado con éxito!
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Gracias por contactarnos. Te responderemos lo más pronto posible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                  <div>
                    <label htmlFor="name" className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white focus:ring-[#6A8CB4]' : 'border-gray-300 focus:ring-[#1A2B44]'}`}
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
                      name="email"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white focus:ring-[#6A8CB4]' : 'border-gray-300 focus:ring-[#1A2B44]'}`}
                      placeholder="tu@email.com"
                      required
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white focus:ring-[#6A8CB4]' : 'border-gray-300 focus:ring-[#1A2B44]'}`}
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
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2B44] focus:border-transparent transition resize-none"
                      placeholder="Cuéntanos más detalles..."
                      required
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className={`w-full text-white px-8 py-4 rounded-full transition shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${isDarkMode ? 'bg-gradient-to-r from-[#4A6B94] to-[#6A8CB4] hover:shadow-[#4A6B94]/30' : 'bg-[#1A2B44] hover:bg-[#2A3B54]'}`}
                  >
                    <SendIcon size={20} />
                    {state.submitting ? "Enviando..." : "Enviar mensaje"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl mb-6 ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>
              ¿Aún no has probado NOURI?
            </h2>
            <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Descubre cómo podemos ayudarte a gestionar tu inventario de alimentos
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://www.figma.com/proto/9NCls7dV0SlF1UO3k048IN/Nouri?node-id=418-3215&p=f&t=CpXlDIe1fWOoaMzr-1&scaling=scale-down&content-scaling=fixed&page-id=169%3A2&starting-point-node-id=418%3A3215",
                  "_blank"
                )
              }
              className={`px-8 py-4 rounded-full transition shadow-lg ${isDarkMode ? 'bg-gradient-to-r from-[#4A6B94] to-[#6A8CB4] hover:shadow-[#4A6B94]/30 text-white' : 'bg-[#1A2B44] text-white hover:bg-[#2A3B54]'}`}
            >
              Ver demo interactiva
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
