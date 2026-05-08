import { motion } from "motion/react";
import { FileTextIcon, CheckCircle2Icon, AlertCircleIcon, ScaleIcon } from "lucide-react";

export default function Terminos() {
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
              <FileTextIcon className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 text-white leading-tight">
              Términos y Condiciones
            </h1>
            <p className="text-xl text-white/90">
              Condiciones de uso de NOURI
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
              Al usar NOURI, aceptas estos términos y condiciones. Te recomendamos leerlos
              detenidamente para entender tus derechos y responsabilidades como usuario.
            </p>
          </motion.div>

          {/* Principios */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <CheckCircle2Icon size={24} />,
                title: "Transparencia",
                description: "Términos claros y justos",
              },
              {
                icon: <ScaleIcon size={24} />,
                title: "Equidad",
                description: "Derechos equilibrados",
              },
              {
                icon: <AlertCircleIcon size={24} />,
                title: "Responsabilidad",
                description: "Compromiso mutuo",
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
              <h2 className="text-3xl mb-4 text-[#1A2B44]">Aceptación de términos</h2>
              <p className="text-gray-600 leading-relaxed">
                Al crear una cuenta y utilizar NOURI, aceptas estar vinculado por estos términos y
                condiciones, nuestra política de privacidad y cualquier término adicional que se
                aplique a características específicas de la aplicación. Si no estás de acuerdo con
                estos términos, por favor no utilices nuestros servicios.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-4 text-[#1A2B44]">Uso del servicio</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Al utilizar NOURI, te comprometes a:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>Proporcionar información precisa y actualizada al registrarte</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>Mantener la seguridad y confidencialidad de tu cuenta</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>Usar la aplicación de manera responsable y legal</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>No intentar acceder a partes no autorizadas del servicio</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-4 text-[#1A2B44]">Planes y pagos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                NOURI ofrece tanto un plan gratuito como opciones premium:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>
                    El plan gratuito incluye funcionalidades básicas sin costo alguno
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>
                    Los planes premium se facturan mensualmente y pueden cancelarse en cualquier
                    momento
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>No ofrecemos reembolsos por meses parciales</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1A2B44]">•</span>
                  <span>
                    Los precios pueden cambiar con previo aviso de 30 días
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-4 text-[#1A2B44]">Propiedad intelectual</h2>
              <p className="text-gray-600 leading-relaxed">
                Todo el contenido, diseño, gráficos, compilación, información y software de NOURI
                son propiedad de NOURI y están protegidos por las leyes de propiedad intelectual.
                Los datos que ingresas en la aplicación siguen siendo de tu propiedad y puedes
                exportarlos o eliminarlos en cualquier momento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-4 text-[#1A2B44]">Limitación de responsabilidad</h2>
              <p className="text-gray-600 leading-relaxed">
                NOURI se proporciona "tal cual" sin garantías de ningún tipo. No nos hacemos
                responsables de pérdidas o daños que puedan surgir del uso o la incapacidad de usar
                nuestros servicios. Es responsabilidad del usuario verificar las fechas de
                caducidad y el estado de los alimentos antes de consumirlos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-4 text-[#1A2B44]">Modificaciones</h2>
              <p className="text-gray-600 leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento.
                Notificaremos a los usuarios sobre cambios significativos a través de la
                aplicación o por correo electrónico. El uso continuado del servicio después de
                dichos cambios constituye tu aceptación de los nuevos términos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-4 text-[#1A2B44]">Terminación</h2>
              <p className="text-gray-600 leading-relaxed">
                Puedes cancelar tu cuenta en cualquier momento desde la configuración de la
                aplicación. Nos reservamos el derecho de suspender o terminar cuentas que violen
                estos términos o que se utilicen de manera inapropiada.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-4 text-[#1A2B44]">Contacto</h2>
              <p className="text-gray-600 leading-relaxed">
                Si tienes preguntas sobre estos términos y condiciones, contáctanos en{" "}
                <a href="mailto:legal@nouri.app" className="text-[#1A2B44] hover:underline">
                  legal@nouri.app
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
