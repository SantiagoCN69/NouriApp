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
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <>
      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-6 relative overflow-hidden ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
        {/* Decorative background elements */}
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 ${isDarkMode ? 'bg-gradient-to-br from-[#4A6B94]/10 to-[#6A8CB4]/10' : 'bg-gradient-to-br from-[#1A2B44]/10 to-[#2A4464]/10'}`} />
        <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 ${isDarkMode ? 'bg-gradient-to-tr from-[#4A6B94]/5 to-[#6A8CB4]/5' : 'bg-gradient-to-tr from-[#1A2B44]/5 to-[#2A4464]/5'}`} />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 border ${isDarkMode ? 'bg-gradient-to-r from-[#4A6B94]/20 to-[#6A8CB4]/20 text-white border-[#4A6B94]/30' : 'bg-gradient-to-r from-[#1A2B44]/10 to-[#2A4464]/10 text-[#1A2B44] border-[#1A2B44]/20'}`}
              >
                <div className={`w-2 h-2 rounded-full animate-pulse ${isDarkMode ? 'bg-white' : 'bg-[#1A2B44]'}`} />
                Gestión inteligente de alimentos
              </motion.div>
              <h1 className={`text-5xl lg:text-7xl mb-6 leading-tight font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>
                Controla tu inventario,{" "}
                <span className="inline-block">
                  evita{" "}
                  <motion.span
                    initial={{ scale: 1.3, opacity: 0, rotate: -5, color: "#EF4444" }}
                    animate={{ scale: 1, opacity: 1, rotate: 0, color: isDarkMode ? "#8AACD4" : "#1A2B44" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-block"
                  >
                    desperdicios
                  </motion.span>
                </span>
                {" "}y ahorra
              </h1>
              <p className={`text-xl mb-10 leading-relaxed max-w-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Una gestión inteligente de tus alimentos que te ayuda a reducir pérdidas,
                optimizar compras y mejorar la organización de tu hogar.
              </p>
              <div className="flex gap-4 flex-wrap">
                <motion.button
                  onClick={() =>
                    alert(
                      "¡Gracias por tu interés! Por el momento la app no está disponible, pero puedes ver nuestra demo interactiva."
                    )
                  }
                  className={`relative text-white px-8 py-4 rounded-full hover:shadow-xl transition-all overflow-hidden group ${isDarkMode ? 'bg-gradient-to-r from-[#4A6B94] to-[#6A8CB4] hover:shadow-[#4A6B94]/30' : 'bg-gradient-to-r from-[#1A2B44] to-[#2A4464] hover:shadow-[#1A2B44]/30'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Comenzar gratis</span>
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${isDarkMode ? 'bg-gradient-to-r from-[#6A8CB4] to-[#4A6B94]' : 'bg-gradient-to-r from-[#2A4464] to-[#1A2B44]'}`} />
                </motion.button>
                <motion.button
                  onClick={() =>
                    window.open(
                      "https://www.figma.com/proto/9NCls7dV0SlF1UO3k048IN/Nouri?node-id=418-3215&p=f&t=CpXlDIe1fWOoaMzr-1&scaling=scale-down&content-scaling=fixed&page-id=169%3A2&starting-point-node-id=418%3A3215",
                      "_blank"
                    )
                  }
                  className={`relative border-2 px-8 py-4 rounded-full hover:bg-opacity-5 transition-all group overflow-hidden ${isDarkMode ? 'border-[#6A8CB4] text-white hover:bg-[#6A8CB4]/10' : 'border-[#1A2B44] text-[#1A2B44] hover:bg-[#1A2B44]/5'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Ver demo
                    <motion.span 
                      animate={{ x: [0, 5, 0] }} 
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </div>

              {/* Stats */}
          
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative flex justify-center"
            >
              <div className="relative hidden lg:block">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#1A2B44]/20 to-[#2A4464]/20 rounded-3xl blur-2xl" />
                <img 
                  src={isDarkMode ? "/04. Home2.png" : "/04. Home.png"} 
                  alt="Consumir pronto" 
                  className="w-full max-w-xs rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500" 
                />
                {/* Floating elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute -top-4 -right-4 p-3 rounded-2xl shadow-lg z-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <RefrigeratorIcon size={24} className={isDarkMode ? 'text-[#6A8CB4]' : 'text-[#1A2B44]'} />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute -bottom-4 -left-4 p-3 rounded-2xl shadow-lg z-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <BellIcon size={24} className={isDarkMode ? 'text-[#6A8CB4]' : 'text-[#1A2B44]'} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* El Problema */}
      <section className={`py-20 px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl mb-4 ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>El problema que estamos resolviendo</h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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
                gradient: "from-red-50 to-orange-50",
                iconBg: "bg-red-100",
                iconColor: "text-red-600",
              },
              {
                icon: <DollarSignIcon size={32} />,
                title: "Pérdida económica",
                description:
                  "Se pierden cientos de dólares al año en comida que caduca antes de ser consumida.",
                color: "orange",
                gradient: "from-orange-50 to-yellow-50",
                iconBg: "bg-orange-100",
                iconColor: "text-orange-600",
              },
              {
                icon: <LeafIcon size={32} />,
                title: "Impacto ambiental",
                description:
                  "El desperdicio de alimentos contribuye significativamente a las emisiones de CO₂ y al cambio climático.",
                color: "green",
                gradient: "from-green-50 to-emerald-50",
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
              },
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className={`absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDarkMode ? 'bg-gradient-to-br from-[#4A6B94]/5 to-[#6A8CB4]/5' : 'bg-gradient-to-br from-[#1A2B44]/5 to-[#2A4464]/5'}`} />
                <div className={`relative h-full p-8 rounded-3xl shadow-sm border hover:shadow-lg transition-all duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gradient-to-br ' + problem.gradient + ' border-gray-100/50'}`}>
                  <div className={`absolute top-4 right-4 w-20 h-20 rounded-full blur-2xl opacity-50 ${isDarkMode ? 'bg-gray-700' : problem.iconBg}`} />
                  <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${isDarkMode ? 'bg-gray-700 text-[#6A8CB4]' : problem.iconBg + ' ' + problem.iconColor}`}>
                    {problem.icon}
                  </div>
                  <h3 className={`text-xl mb-3 font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>{problem.title}</h3>
                  <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-8 md:p-12 text-center text-white ${isDarkMode ? 'bg-gradient-to-r from-[#4A6B94] to-[#6A8CB4]' : 'bg-[#1A2B44]'}`}
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
      <section id="beneficios" className={`py-20 px-6 ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl mb-4 ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>Beneficios que transforman tu día a día</h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Descubre cómo NOURI mejora la gestión de tus alimentos</p>
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className={`absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDarkMode ? 'bg-gradient-to-br from-[#4A6B94]/5 to-[#6A8CB4]/5' : 'bg-gradient-to-br from-[#1A2B44]/5 to-[#2A4464]/5'}`} />
                <div className={`h-full relative p-8 rounded-3xl shadow-sm border hover:shadow-xl transition-all duration-300 overflow-hidden ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100/50'}`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl ${isDarkMode ? 'bg-gradient-to-br from-[#4A6B94]/5 to-transparent' : 'bg-gradient-to-br from-[#1A2B44]/5 to-transparent'}`} />
                  <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${isDarkMode ? 'bg-gray-700 text-[#6A8CB4]' : 'bg-gradient-to-br from-[#1A2B44]/10 to-[#2A4464]/10 text-[#1A2B44]'}`}>
                    {benefit.icon}
                  </div>
                  <h3 className={`text-xl mb-3 font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>{benefit.title}</h3>
                  <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className={`py-20 px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl mb-4 ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>Tan fácil como 1, 2, 3</h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Comienza a gestionar tu inventario en minutos</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line */}
            <div className={`hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 ${isDarkMode ? 'bg-gradient-to-r from-transparent via-[#6A8CB4]/30 to-transparent' : 'bg-gradient-to-r from-transparent via-[#1A2B44]/30 to-transparent'}`} />
            
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="text-center relative"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                  className="relative w-24 h-24 mx-auto mb-8"
                >
                  <div className={`absolute inset-0 rounded-full blur-md opacity-50 ${isDarkMode ? 'bg-gradient-to-br from-[#4A6B94] to-[#6A8CB4]' : 'bg-gradient-to-br from-[#1A2B44] to-[#2A4464]'}`} />
                  <div className={`relative w-full h-full rounded-full flex items-center justify-center text-2xl font-bold shadow-xl ${isDarkMode ? 'bg-gradient-to-br from-[#4A6B94] to-[#6A8CB4] text-white shadow-[#4A6B94]/30' : 'bg-gradient-to-br from-[#1A2B44] to-[#2A4464] text-white shadow-[#1A2B44]/30'}`}>
                    {step.step}
                  </div>
                </motion.div>
                <h3 className={`text-2xl mb-4 font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>{step.title}</h3>
                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section id="caracteristicas" className={`py-20 px-6 ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl mb-4 ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>Características que marcan la diferencia</h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Tecnología inteligente al servicio de tu hogar</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <CalendarIcon size={24} />, title: "Control de fechas" },
              { icon: <BellIcon size={24} />, title: "Recordatorios" },
              { icon: <BarChart3Icon size={24} />, title: "Estadísticas" },
              { icon: <CheckCircle2Icon size={24} />, title: "Fácil de usar" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, rotate: 2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDarkMode ? 'bg-gradient-to-br from-[#4A6B94]/5 to-[#6A8CB4]/5' : 'bg-gradient-to-br from-[#1A2B44]/5 to-[#2A4464]/5'}`} />
                <div className={`relative p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gradient-to-br from-gray-50 to-white border-gray-100/50'}`}>
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${isDarkMode ? 'bg-gray-700 text-[#6A8CB4]' : 'bg-gradient-to-br from-[#1A2B44]/10 to-[#2A4464]/10 text-[#1A2B44]'}`}>
                    {feature.icon}
                  </div>
                  <h4 className={`font-semibold text-center ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>{feature.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiénes Somos Preview */}
      <section id="quienes-somos" className={`py-20 px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl mb-4 ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>Quiénes Somos</h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Dos desarrolladores apasionados creando soluciones tecnológicas para un futuro más
              sostenible
            </p>
          </motion.div>

          <div className="text-center">
            <Link
              to="/nosotros"
              className={`inline-block text-white px-8 py-4 rounded-full transition shadow-lg ${isDarkMode ? 'bg-gradient-to-r from-[#4A6B94] to-[#6A8CB4] hover:shadow-[#4A6B94]/30' : 'bg-[#1A2B44] hover:bg-[#2A3B54]'}`}
            >
              Conócenos más
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className={`py-20 px-6 ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl mb-4 ${isDarkMode ? 'text-white' : 'text-[#1A2B44]'}`}>Lo que dijeron al ver la demo</h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Feedback de usuarios que probaron nuestro prototipo</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Laura Pérez",
                role: "Usuario de demo",
                text: "¡Me encanta lo fácil que es agregar productos! La interfaz es muy intuitiva y limpia.",
                rating: 5,
              },
              {
                name: "Roberto Sánchez",
                role: "Usuario de demo",
                text: "Las alertas de vencimiento son exactamente lo que necesito. Muy útil para la organización.",
                rating: 5,
              },
              {
                name: "Daniela Torres",
                role: "Usuario de demo",
                text: "El diseño es moderno y las funciones están bien pensadas. Definitivamente la usaría cuando esté disponible.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-2xl border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-100'}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} size={20} className={isDarkMode ? 'fill-[#6A8CB4] text-[#6A8CB4]' : 'fill-[#1A2B44] text-[#1A2B44]'} />
                  ))}
                </div>
                <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>"{testimonial.text}"</p>
                <div>
                  <div className={isDarkMode ? 'text-white' : 'text-[#1A2B44]'}>{testimonial.name}</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className={`py-20 px-6 ${isDarkMode ? 'bg-gradient-to-r from-[#4A6B94] to-[#6A8CB4]' : 'bg-[#1A2B44]'}`}>
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
                    "https://www.figma.com/proto/9NCls7dV0SlF1UO3k048IN/Nouri?node-id=418-3215&p=f&t=CpXlDIe1fWOoaMzr-1&scaling=scale-down&content-scaling=fixed&page-id=169%3A2&starting-point-node-id=418%3A3215",
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
