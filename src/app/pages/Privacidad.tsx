import { motion } from "motion/react";
import { ShieldCheckIcon, LockIcon, EyeOffIcon, DatabaseIcon } from "lucide-react";

export default function Privacidad() {
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
              <ShieldCheckIcon className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 text-white leading-tight">
              Política de Privacidad
            </h1>
            <p className="text-xl text-white/90">
              Tu privacidad es nuestra prioridad
            </p>
            <p className="text-white/70 mt-4">Última actualización: Mayo 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Introducción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              En NOURI, nos comprometemos a proteger tu privacidad y tus datos personales. Esta
              política describe cómo recopilamos, usamos y protegemos tu información cuando
              utilizas nuestra aplicación.
            </p>
          </motion.div>

          {/* Principios */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <LockIcon size={24} />,
                title: "Seguridad",
                description: "Tus datos están encriptados y protegidos",
              },
              {
                icon: <EyeOffIcon size={24} />,
                title: "Privacidad",
                description: "No vendemos ni compartimos tu información",
              },
              {
                icon: <DatabaseIcon size={24} />,
                title: "Control",
                description: "Tú decides qué datos compartes",
              },
            ].map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-[#1A2B44]/10 rounded-full flex items-center justify-center text-[#1A2B44]">
                  {principle.icon}
                </div>
                <h3 className="text-lg mb-2 text-[#1A2B44]">{principle.title}</h3>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Secciones */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-4 text-[#1A2B44]">Información que recopilamos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Recopilamos únicamente la información necesaria para brindarte el mejor servicio:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>
                    <strong>Información de cuenta:</strong> nombre, correo electrónico y
                    contraseña encriptada
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>
                    <strong>Datos de inventario:</strong> productos que registras, fechas de
                    caducidad y categorías
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>
                    <strong>Información de uso:</strong> cómo interactúas con la app para mejorar
                    la experiencia
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-4 text-[#1A2B44]">Cómo usamos tu información</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Utilizamos tus datos exclusivamente para:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>Proporcionar y mejorar nuestros servicios</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>Enviarte notificaciones sobre productos próximos a vencer</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>Personalizar tu experiencia en la aplicación</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>Comunicarnos contigo sobre actualizaciones importantes</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-4 text-[#1A2B44]">Seguridad de tus datos</h2>
              <p className="text-gray-600 leading-relaxed">
                Implementamos medidas de seguridad de nivel empresarial para proteger tu
                información. Utilizamos encriptación SSL/TLS para todas las transmisiones de datos,
                almacenamiento seguro en servidores certificados y controles de acceso estrictos.
                Nunca compartiremos, venderemos o alquilaremos tu información personal a terceros.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-4 text-[#1A2B44]">Tus derechos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Tienes derecho a:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>Acceder a tus datos personales en cualquier momento</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>Solicitar la corrección o eliminación de tu información</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>Exportar tus datos en formato legible</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>Retirar tu consentimiento en cualquier momento</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-4 text-[#1A2B44]">Contacto</h2>
              <p className="text-gray-600 leading-relaxed">
                Si tienes preguntas sobre nuestra política de privacidad o cómo manejamos tus
                datos, no dudes en contactarnos en{" "}
                <a href="mailto:privacidad@nouri.app" className="text-[#1A2B44] hover:underline">
                  privacidad@nouri.app
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
