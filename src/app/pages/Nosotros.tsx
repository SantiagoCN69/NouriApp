import { motion } from "motion/react";
import { HeartIcon, RocketIcon, LightbulbIcon, TargetIcon } from "lucide-react";
import sofiaPhoto from "../../imports/sofia.png";
import santiagoPhoto from "../../imports/santiago.png";

export default function Nosotros() {
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
            <h1 className="text-5xl md:text-6xl mb-6 text-white leading-tight">
              Nuestra Historia
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Dos estudiantes con un sueño: crear tecnología que genere impacto real
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-6 text-[#1A2B44]">Somos estudiantes, somos soñadores</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Todo comenzó en la universidad. Entre clases, proyectos y largas noches de estudio,
              nos dimos cuenta de un problema cotidiano que afecta a millones: el desperdicio de
              alimentos por falta de organización.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Como estudiantes, sabemos lo que es cuidar cada peso y aprovechar al máximo los
              recursos. Vimos cómo nuestros compañeros, familias y vecinos tiraban comida
              simplemente porque olvidaban que la tenían o no sabían cuándo caducaba.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Decidimos hacer algo al respecto. NOURI nació de esa necesidad real, de querer crear
              una solución práctica que ayudara a las personas a ahorrar dinero y cuidar el planeta.
            </p>
          </motion.div>

          {/* Fotos */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#1A2B44] shadow-2xl">
                <img
                  src={sofiaPhoto}
                  alt="Sofía Alejandra Quiroga"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-2 text-[#1A2B44]">Sofía Alejandra Quiroga</h3>
              <p className="text-gray-600 mb-4">Co-fundadora & Desarrolladora</p>
              <p className="text-gray-500 leading-relaxed">
                Estudiante de ingeniería apasionada por crear soluciones tecnológicas innovadoras
                que ayuden a las personas a vivir de forma más sostenible y eficiente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#1A2B44] shadow-2xl">
                <img
                  src={santiagoPhoto}
                  alt="Santiago Cardona Nossa"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-2 text-[#1A2B44]">Santiago Cardona Nossa</h3>
              <p className="text-gray-600 mb-4">Co-fundador & Desarrollador</p>
              <p className="text-gray-500 leading-relaxed">
                Estudiante de ingeniería enfocado en desarrollar experiencias tecnológicas que
                resuelvan problemas reales y generen un impacto positivo en la sociedad.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-[#1A2B44]">Lo que nos impulsa</h2>
            <p className="text-xl text-gray-600">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-[#1A2B44]/10 rounded-2xl flex items-center justify-center text-[#1A2B44]">
                  {value.icon}
                </div>
                <h3 className="text-xl mb-3 text-[#1A2B44]">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra Visión */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl mb-6 text-[#1A2B44]">Hacia dónde vamos</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Empezamos con NOURI, una app para gestionar el inventario de alimentos. Pero nuestra
              visión va más allá. Queremos ser líderes en soluciones tecnológicas sostenibles que
              ayuden a las personas a vivir mejor mientras cuidan el planeta.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Sabemos que el camino es largo. Somos conscientes de que estamos dando nuestros
              primeros pasos. Pero cada gran empresa empezó con una idea simple y mucho trabajo.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Hoy somos dos estudiantes con un proyecto. Mañana, queremos ser una referencia en
              innovación tecnológica con propósito.
            </p>

            <div className="bg-gradient-to-br from-[#1A2B44] to-[#2A4464] rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-3xl mb-4">Únete a nuestro viaje</h3>
              <p className="text-xl text-white/90 mb-8">
                Cada usuario que confía en NOURI nos acerca un paso más a nuestro sueño. Gracias
                por creer en nosotros.
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://www.figma.com/proto/9NCls7dV0SlF1UO3k048IN/App-comida?node-id=67-317&viewport=-108%2C418%2C0.41&t=4WCnj0dimnplS4uk-1&scaling=min-zoom&content-scaling=fixed&page-id=67%3A2",
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
