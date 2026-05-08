import { motion } from "motion/react";
import { Link } from "react-router";
import {
  RefrigeratorIcon,
  BellIcon,
  TrendingDownIcon,
  CheckCircle2Icon,
  ShoppingCartIcon,
  CalendarIcon,
  BarChart3Icon,
  StarIcon,
  AlertTriangleIcon,
  DollarSignIcon,
  LeafIcon,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-[#1A2B44]/5 text-[#1A2B44] px-4 py-2 rounded-full mb-6">
                Gestión inteligente de alimentos
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6 text-[#1A2B44] leading-tight">
                Controla tu inventario, evita desperdicios y ahorra
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Una gestión inteligente de tus alimentos que te ayuda a reducir pérdidas,
                optimizar compras y mejorar la organización de tu hogar.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() =>
                    alert(
                      "¡Gracias por tu interés! Por el momento la app no está disponible, pero puedes ver nuestra demo interactiva."
                    )
                  }
                  className="bg-[#1A2B44] text-white px-8 py-4 rounded-full hover:bg-[#2A3B54] transition shadow-lg"
                >
                  Comenzar gratis
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.figma.com/proto/9NCls7dV0SlF1UO3k048IN/App-comida?node-id=67-317&viewport=-108%2C418%2C0.41&t=4WCnj0dimnplS4uk-1&scaling=min-zoom&content-scaling=fixed&page-id=67%3A2",
                      "_blank"
                    )
                  }
                  className="border-2 border-[#1A2B44] text-[#1A2B44] px-8 py-4 rounded-full hover:bg-[#1A2B44] hover:text-white transition"
                >
                  Ver demo
                </button>
              </div>
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-3xl text-[#1A2B44] mb-1">50K+</div>
                  <div className="text-gray-600">Usuarios activos</div>
                </div>
                <div>
                  <div className="text-3xl text-[#1A2B44] mb-1">30%</div>
                  <div className="text-gray-600">Ahorro promedio</div>
                </div>
                <div>
                  <div className="text-3xl text-[#1A2B44] mb-1">4.8⭐</div>
                  <div className="text-gray-600">Valoración</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#1A2B44] to-[#2A4464] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <RefrigeratorIcon className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-white/80 text-sm">Mi Inventario</div>
                      <div className="text-white">23 productos</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {["Leche - Vence en 2 días", "Yogurt - Vence mañana", "Queso - Vence en 5 días"].map(
                      (item, i) => (
                        <div
                          key={i}
                          className="bg-white/10 rounded-lg p-3 text-white/90 text-sm flex items-center gap-2"
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              i === 1 ? "bg-red-400" : "bg-green-400"
                            }`}
                          ></div>
                          {item}
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-white/60 text-sm mb-1">Próximos a vencer</div>
                    <div className="text-white text-2xl">3</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-white/60 text-sm mb-1">Ahorro este mes</div>
                    <div className="text-white text-2xl">$45</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* El Problema */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-[#1A2B44]">El problema que estamos resolviendo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada año, millones de toneladas de alimentos terminan en la basura. No por falta de
              necesidad, sino por desorganización.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <AlertTriangleIcon size={32} />,
                title: "40% de desperdicio",
                description:
                  "Las familias desperdician hasta el 40% de los alimentos que compran por olvido o mala gestión.",
                color: "red",
              },
              {
                icon: <DollarSignIcon size={32} />,
                title: "Pérdida económica",
                description:
                  "Se pierden cientos de dólares al año en comida que caduca antes de ser consumida.",
                color: "orange",
              },
              {
                icon: <LeafIcon size={32} />,
                title: "Impacto ambiental",
                description:
                  "El desperdicio de alimentos contribuye significativamente a las emisiones de CO₂ y al cambio climático.",
                color: "green",
              },
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-${problem.color}-50 rounded-2xl flex items-center justify-center text-${problem.color}-600 mb-6`}
                  style={{
                    backgroundColor: problem.color === "red" ? "#FEF2F2" : problem.color === "orange" ? "#FFF7ED" : "#F0FDF4",
                    color: problem.color === "red" ? "#DC2626" : problem.color === "orange" ? "#EA580C" : "#16A34A",
                  }}
                >
                  {problem.icon}
                </div>
                <h3 className="text-xl mb-3 text-[#1A2B44]">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A2B44] rounded-3xl p-8 md:p-12 text-center text-white"
          >
            <h3 className="text-3xl mb-4">Nuestra solución es simple pero poderosa</h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              NOURI te ayuda a tener control total de tus alimentos, recordándote qué tienes,
              cuándo vence y qué deberías consumir primero. Así reduces desperdicios, ahorras
              dinero y cuidas el planeta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-[#1A2B44]">Beneficios que transforman tu día a día</h2>
            <p className="text-xl text-gray-600">Descubre cómo NOURI mejora la gestión de tus alimentos</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingDownIcon size={32} />,
                title: "Reduce desperdicios",
                description:
                  "Evita que los alimentos caduquen y reduce hasta un 40% el desperdicio de comida en tu hogar.",
              },
              {
                icon: <ShoppingCartIcon size={32} />,
                title: "Optimiza tus compras",
                description:
                  "Compra solo lo necesario con listas inteligentes basadas en tu inventario actual.",
              },
              {
                icon: <BellIcon size={32} />,
                title: "Alertas inteligentes",
                description:
                  "Recibe notificaciones antes de que tus productos caduquen y toma acción a tiempo.",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition"
              >
                <div className="w-16 h-16 bg-[#1A2B44]/10 rounded-2xl flex items-center justify-center text-[#1A2B44] mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl mb-3 text-[#1A2B44]">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-[#1A2B44]">Tan fácil como 1, 2, 3</h2>
            <p className="text-xl text-gray-600">Comienza a gestionar tu inventario en minutos</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Registra tus alimentos",
                description:
                  "Escanea códigos de barras o añade productos manualmente con fechas de caducidad.",
              },
              {
                step: "02",
                title: "Organiza tu inventario",
                description:
                  "Visualiza todo organizado por categorías, ubicación y fecha de vencimiento.",
              },
              {
                step: "03",
                title: "Recibe alertas y ahorra",
                description:
                  "NOURI te avisa antes del vencimiento y te ayuda a planificar tus comidas.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-[#1A2B44] text-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-2xl mb-4 text-[#1A2B44]">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section id="caracteristicas" className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-[#1A2B44]">Características que marcan la diferencia</h2>
            <p className="text-xl text-gray-600">Tecnología inteligente al servicio de tu hogar</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <CalendarIcon size={24} />, title: "Control de fechas" },
              { icon: <BellIcon size={24} />, title: "Recordatorios" },
              { icon: <BarChart3Icon size={24} />, title: "Estadísticas" },
              { icon: <RefrigeratorIcon size={24} />, title: "Multi-ubicación" },
              { icon: <ShoppingCartIcon size={24} />, title: "Listas de compra" },
              { icon: <CheckCircle2Icon size={24} />, title: "Fácil de usar" },
              { icon: <StarIcon size={24} />, title: "Recetas sugeridas" },
              { icon: <TrendingDownIcon size={24} />, title: "Análisis ahorro" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-[#1A2B44]/10 rounded-full flex items-center justify-center text-[#1A2B44]">
                  {feature.icon}
                </div>
                <h4 className="text-[#1A2B44]">{feature.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiénes Somos Preview */}
      <section id="quienes-somos" className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-[#1A2B44]">Quiénes Somos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dos desarrolladores apasionados creando soluciones tecnológicas para un futuro más
              sostenible
            </p>
          </motion.div>

          <div className="text-center">
            <Link
              to="/nosotros"
              className="inline-block bg-[#1A2B44] text-white px-8 py-4 rounded-full hover:bg-[#2A3B54] transition shadow-lg"
            >
              Conócenos más
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-[#1A2B44]">Lo que dicen nuestros usuarios</h2>
            <p className="text-xl text-gray-600">Miles de familias ya están ahorrando con NOURI</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                role: "Madre de familia",
                text: "Desde que uso NOURI, he reducido el desperdicio en casa un 60%. Ya no olvido productos en la nevera.",
                rating: 5,
              },
              {
                name: "Carlos Ruiz",
                role: "Profesional",
                text: "Perfecto para mi estilo de vida ocupado. Las alertas me ayudan a planificar mis comidas y compras.",
                rating: 5,
              },
              {
                name: "Ana Martínez",
                role: "Estudiante",
                text: "Como estudiante, cada peso cuenta. NOURI me ayuda a ahorrar y a no desperdiciar comida.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} size={20} className="fill-[#1A2B44] text-[#1A2B44]" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="text-[#1A2B44]">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-[#1A2B44]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Comienza a ahorrar hoy mismo</h2>
            <p className="text-xl text-white/80 mb-8">
              Únete a miles de usuarios que ya están gestionando sus alimentos de forma inteligente
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() =>
                  alert(
                    "¡Gracias por tu interés! Por el momento la app no está disponible, pero puedes ver nuestra demo interactiva."
                  )
                }
                className="bg-white text-[#1A2B44] px-8 py-4 rounded-full hover:bg-gray-100 transition shadow-lg"
              >
                Descargar gratis
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.figma.com/proto/9NCls7dV0SlF1UO3k048IN/App-comida?node-id=67-317&viewport=-108%2C418%2C0.41&t=4WCnj0dimnplS4uk-1&scaling=min-zoom&content-scaling=fixed&page-id=67%3A2",
                    "_blank"
                  )
                }
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition"
              >
                Ver demo
              </button>
            </div>
            <p className="text-white/60 mt-6">Sin tarjeta de crédito • Prueba gratuita</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
