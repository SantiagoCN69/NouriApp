/// <reference types="vite/client" />
import { motion } from "motion/react";
import { HeartIcon, RocketIcon, LightbulbIcon, TargetIcon } from "lucide-react";
import sofiaPhoto from "../../imports/sofia.png";
import santiagoPhoto from "../../imports/santiago.png";
import { useTheme } from "../context/ThemeContext";

export default function Nosotros() {
  const { isDarkMode } = useTheme();

  return (
    <div className="pt-18">
      {/* Hero */}
      <section className={`py-20 px-6 relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-[#4A6B94] to-[#6A8CB4]' : 'bg-gradient-to-br from-[#1A2B44] to-[#2A4464]'}`}>
        {/* Decorative elements */}
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 ${isDarkMode ? 'bg-white/10' : 'bg-white/5'}`} />
        <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 ${isDarkMode ? 'bg-white/10' : 'bg-white/5'}`} />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={`inline-flex items-center gap-2 backdrop-blur-sm text-white px-5 py-2.5 rounded-full mb-8 border ${isDarkMode ? 'bg-white/20 border-white/30' : 'bg-white/10 border-white/20'}`}>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Nuestra historia
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 text-white leading-tight font-semibold">
              Dos estudiantes,{" "}
              <span className="relative inline-block">
                un sueño
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
                </svg>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Crear tecnología que genere impacto real en las personas y el planeta
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className={`py-20 px-6 ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl mb-6 ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>Somos estudiantes, somos soñadores</h2>
            <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Todo comenzó en la universidad. Entre clases, proyectos y largas noches de estudio,
              nos dimos cuenta de un problema cotidiano que afecta a millones: el desperdicio de
              alimentos por falta de organización.
            </p>
            <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Como estudiantes, sabemos lo que es cuidar cada peso y aprovechar al máximo los
              recursos. Vimos cómo nuestros compañeros, familias y vecinos tiraban comida
              simplemente porque olvidaban que la tenían o no sabían cuándo caducaba.
            </p>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Decidimos hacer algo al respecto. NOURI nació de esa necesidad real, de querer crear
              una solución práctica que ayudara a las personas a ahorrar dinero y cuidar el planeta.
            </p>
          </motion.div>

          {/* Fotos */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <div className="relative w-56 h-56 mx-auto mb-6">
                <div className={`absolute inset-0 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 ${isDarkMode ? 'bg-gradient-to-br from-[#4A6B94]/20 to-[#6A8CB4]/20' : 'bg-gradient-to-br from-[#1A2B44]/20 to-[#2A4464]/20'}`} />
                <div className="relative w-full h-full rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={sofiaPhoto}
                    alt="Sofía Alejandra Quiroga"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className={`text-2xl mb-2 font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>Sofía Alejandra Quiroga</h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Co-fundadora & Desarrolladora</p>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Estudiante de diseño interactivo y multimedia de la universidad del tolima, apasionada por crear soluciones tecnológicas innovadoras
                que ayuden a las personas a vivir de forma más sostenible y eficiente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center group"
            >
              <div className="relative w-56 h-56 mx-auto mb-6">
                <div className={`absolute inset-0 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 ${isDarkMode ? 'bg-gradient-to-br from-[#4A6B94]/20 to-[#6A8CB4]/20' : 'bg-gradient-to-br from-[#1A2B44]/20 to-[#2A4464]/20'}`} />
                <div className="relative w-full h-full rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={santiagoPhoto}
                    alt="Santiago Cardona Nossa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className={`text-2xl mb-2 font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>Santiago Cardona Nossa</h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Co-fundador & Desarrollador</p>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Estudiante de diseño interactivo y multimedia de la universidad del tolima, enfocado en desarrollar experiencias tecnológicas que
                resuelvan problemas reales y generen un impacto positivo en la sociedad.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className={`py-20 px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl mb-4 ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>Lo que nos impulsa</h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Los valores que guían cada decisión que tomamos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <HeartIcon size={32} />,
                title: "Pasión",
                description:
                  "Amamos lo que hacemos. Cada línea de código es un paso hacia un mundo mejor.",
              },
              {
                icon: <LightbulbIcon size={32} />,
                title: "Innovación",
                description:
                  "Buscamos soluciones creativas a problemas cotidianos con tecnología accesible.",
              },
              {
                icon: <TargetIcon size={32} />,
                title: "Impacto",
                description:
                  "Queremos generar un cambio real, ayudando a las personas y al planeta.",
              },
              {
                icon: <RocketIcon size={32} />,
                title: "Ambición",
                description:
                  "Somos estudiantes hoy, pero trabajamos para construir algo grande mañana.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className={`absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDarkMode ? 'bg-gradient-to-br from-[#4A6B94]/5 to-[#6A8CB4]/5' : 'bg-gradient-to-br from-[#1A2B44]/5 to-[#2A4464]/5'}`} />
                <div className={`h-full relative p-8 rounded-3xl shadow-sm border hover:shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100/50'}`}>
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${isDarkMode ? 'bg-gray-700 text-[#6A8CB4]' : 'bg-gradient-to-br from-[#1A2B44]/10 to-[#2A4464]/10 text-[#1A2B44]'}`}>
                    {value.icon}
                  </div>
                  <h3 className={`text-xl mb-3 font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>{value.title}</h3>
                  <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra Visión */}
      <section className={`py-20 px-6 ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className={`text-4xl mb-6 ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>Hacia dónde vamos</h2>
            <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Empezamos con NOURI, una app para gestionar el inventario de alimentos. Pero nuestra
              visión va más allá. Queremos ser líderes en soluciones tecnológicas sostenibles que
              ayuden a las personas a vivir mejor mientras cuidan el planeta.
            </p>
            <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Sabemos que el camino es largo. Somos conscientes de que estamos dando nuestros
              primeros pasos. Pero cada gran empresa empezó con una idea simple y mucho trabajo.
            </p>
            <p className={`text-lg leading-relaxed mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Hoy somos dos estudiantes con un proyecto. Mañana, queremos ser una referencia en
              innovación tecnológica con propósito.
            </p>

            <div className={`rounded-3xl p-8 md:p-12 text-white ${isDarkMode ? 'bg-gradient-to-r from-[#4A6B94] to-[#6A8CB4]' : 'bg-gradient-to-br from-[#1A2B44] to-[#2A4464]'}`}>
              <h3 className="text-3xl mb-4">Únete a nuestro viaje</h3>
              <p className="text-xl text-white/90 mb-8">
                Cada usuario que confía en NOURI nos acerca un paso más a nuestro sueño. Gracias
                por creer en nosotros.
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://www.figma.com/proto/9NCls7dV0SlF1UO3k048IN/Nouri?node-id=418-3215&p=f&t=CpXlDIe1fWOoaMzr-1&scaling=scale-down&content-scaling=fixed&page-id=169%3A2&starting-point-node-id=418%3A3215",
                    "_blank"
                  )
                }
                className="bg-white text-[#1A2B44] px-8 py-4 rounded-full hover:bg-gray-100 transition shadow-lg"
              >
                Ver demo interactiva
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
