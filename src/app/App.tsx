import { motion, AnimatePresence } from "motion/react";
import {
  RefrigeratorIcon,
  BellIcon,
  TrendingDownIcon,
  CheckCircle2Icon,
  ShoppingCartIcon,
  CalendarIcon,
  BarChart3Icon,
  StarIcon,
  MenuIcon,
  XIcon,
  ZapIcon,
  CheckIcon
} from "lucide-react";
import { useState } from "react";
import Negro from "../imports/Negro/Negro";
import sofiaPhoto from "../imports/sofia.png";
import santiagoPhoto from "../imports/santiago.png";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pricingModalOpen, setPricingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Pricing Modal */}
      <AnimatePresence>
        {pricingModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPricingModalOpen(false)}
              className="absolute inset-0 bg-[#1A2B44]/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setPricingModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition"
              >
                <XIcon size={24} />
              </button>

              <div className="p-6 md:p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B44] mb-2">Planes diseñados para ti</h2>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto text-sm">
                  Elige el plan que mejor se adapte a tus necesidades y comienza a ahorrar hoy mismo.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Free Plan */}
                  <div className="relative p-6 rounded-2xl border-2 border-gray-100 bg-gray-50/50 flex flex-col h-full">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-[#1A2B44] mb-1">Plan Free</h3>
                      <div className="text-3xl font-bold text-[#1A2B44] mb-0.5">$0</div>
                      <div className="text-gray-500 text-xs">Gratis por siempre</div>
                    </div>
                    
                    <ul className="space-y-3 mb-6 text-left flex-grow">
                      {[
                        "Hasta 30 productos",
                        "Alertas de vencimiento",
                        "Lista de compras simple",
                        "Soporte por comunidad"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-xs">
                          <CheckIcon className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="w-full py-2.5 rounded-full border-2 border-[#1A2B44] text-[#1A2B44] text-sm font-semibold hover:bg-[#1A2B44] hover:text-white transition">
                      Continuar Gratis
                    </button>
                  </div>

                  {/* Premium Plan */}
                  <div className="relative p-6 rounded-2xl border-2 border-[#1A2B44] bg-white shadow-xl flex flex-col h-full overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#1A2B44] text-white px-3 py-0.5 rounded-bl-lg text-[10px] font-bold uppercase tracking-wider">
                      Recomendado
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-center gap-1.5 mb-1">
                        <ZapIcon className="text-yellow-500 fill-yellow-500" size={16} />
                        <h3 className="text-lg font-bold text-[#1A2B44]">Plan Premium</h3>
                      </div>
                      <div className="text-3xl font-bold text-[#1A2B44] mb-0.5">$5 <span className="text-base text-gray-400 font-normal">/mes</span></div>
                      <div className="text-[#1A2B44]/60 text-xs font-medium">O $25,000 COP mensual</div>
                    </div>
                    
                    <ul className="space-y-3 mb-6 text-left flex-grow">
                      {[
                        "Productos ilimitados",
                        "Alertas inteligentes",
                        "Escaneo de recibos",
                        "Sincronización familiar",
                        "Soporte prioritario"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-xs">
                          <CheckIcon className="text-[#1A2B44] mt-0.5 flex-shrink-0" size={14} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="w-full py-3 rounded-full bg-[#1A2B44] text-white text-sm font-bold hover:bg-[#2A3B54] transition shadow-lg flex items-center justify-center gap-2">
                      <ZapIcon size={16} />
                      Mejorar a Premium
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-32 scale-y-[-1] [&_path]:!fill-[#1A2B44]">
              <Negro />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <a href="#beneficios" className="text-gray-600 hover:text-[#1A2B44] transition">Beneficios</a>
            <a href="#como-funciona" className="text-gray-600 hover:text-[#1A2B44] transition">Cómo funciona</a>
            <a href="#caracteristicas" className="text-gray-600 hover:text-[#1A2B44] transition">Características</a>
            <a href="#quienes-somos" className="text-gray-600 hover:text-[#1A2B44] transition">Quiénes Somos</a>
            <a 
              href="https://play.google.com/store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1A2B44] text-white px-6 py-2.5 rounded-full hover:bg-[#2A3B54] transition inline-block text-center"
            >
              Descargar App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1A2B44]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <a
                href="#beneficios"
                className="text-gray-600 hover:text-[#1A2B44] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Beneficios
              </a>
              <a
                href="#como-funciona"
                className="text-gray-600 hover:text-[#1A2B44] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cómo funciona
              </a>
              <a
                href="#caracteristicas"
                className="text-gray-600 hover:text-[#1A2B44] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Características
              </a>
              <a
                href="#quienes-somos"
                className="text-gray-600 hover:text-[#1A2B44] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Quiénes Somos
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A2B44] text-white px-6 py-2.5 rounded-full hover:bg-[#2A3B54] transition w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Descargar App
              </a>
            </div>
          </motion.div>
        )}
      </nav>

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
                ✨ Gestión inteligente de alimentos
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
                  onClick={() => setPricingModalOpen(true)}
                  className="bg-[#1A2B44] text-white px-8 py-4 rounded-full hover:bg-[#2A3B54] transition shadow-lg"
                >
                  Ver planes y precios
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
                    {['Leche - Vence en 2 días', 'Yogurt - Vence mañana', 'Queso - Vence en 5 días'].map((item, i) => (
                      <div key={i} className="bg-white/10 rounded-lg p-3 text-white/90 text-sm flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-red-400' : 'bg-green-400'}`}></div>
                        {item}
                      </div>
                    ))}
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

      {/* Beneficios */}
      <section id="beneficios" className="py-20 bg-gray-50 px-6">
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
                description: "Evita que los alimentos caduquen y reduce hasta un 40% el desperdicio de comida en tu hogar."
              },
              {
                icon: <ShoppingCartIcon size={32} />,
                title: "Optimiza tus compras",
                description: "Compra solo lo necesario con listas inteligentes basadas en tu inventario actual."
              },
              {
                icon: <BellIcon size={32} />,
                title: "Alertas inteligentes",
                description: "Recibe notificaciones antes de que tus productos caduquen y toma acción a tiempo."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
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
      <section id="como-funciona" className="py-20 px-6">
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
                description: "Escanea códigos de barras o añade productos manualmente con fechas de caducidad."
              },
              {
                step: "02",
                title: "Organiza tu inventario",
                description: "Visualiza todo organizado por categorías, ubicación y fecha de vencimiento."
              },
              {
                step: "03",
                title: "Recibe alertas y ahorra",
                description: "NOURI te avisa antes del vencimiento y te ayuda a planificar tus comidas."
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-[#1A2B44] text-white rounded-full flex items-center justify-center text-2xl">
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
      <section id="caracteristicas" className="py-20 bg-gray-50 px-6">
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
              { icon: <TrendingDownIcon size={24} />, title: "Análisis ahorro" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
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

      {/* Quiénes Somos */}
      <section id="quienes-somos" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-[#1A2B44]">Quiénes Somos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos dos desarrolladores apasionados por crear soluciones tecnológicas que
              mejoren la vida diaria de las personas y contribuyan a un futuro más sostenible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#1A2B44] shadow-xl">
                <img
                  src={sofiaPhoto}
                  alt="Sofía Alejandra Quiroga"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-2 text-[#1A2B44]">Sofía Alejandra Quiroga</h3>
              <p className="text-gray-600 mb-4">Co-fundadora & Desarrolladora</p>
              <p className="text-gray-500 leading-relaxed">
                Desarrolladora enfocada en construir soluciones innovadoras que ayuden
                a las personas a optimizar sus recursos y cuidar el medio ambiente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#1A2B44] shadow-xl">
                <img
                  src={santiagoPhoto}
                  alt="Santiago Cardona Nossa"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-2 text-[#1A2B44]">Santiago Cardona Nossa</h3>
              <p className="text-gray-600 mb-4">Co-fundador & Desarrollador</p>
              <p className="text-gray-500 leading-relaxed">
                Desarrollador apasionado por crear experiencias tecnológicas que resuelvan
                problemas reales y generen impacto positivo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 px-6">
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
                rating: 5
              },
              {
                name: "Carlos Ruiz",
                role: "Profesional",
                text: "Perfecto para mi estilo de vida ocupado. Las alertas me ayudan a planificar mis comidas y compras.",
                rating: 5
              },
              {
                name: "Ana Martínez",
                role: "Estudiante",
                text: "Como estudiante, cada peso cuenta. NOURI me ayuda a ahorrar y a no desperdiciar comida.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
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
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Comienza a ahorrar hoy mismo
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Únete a miles de usuarios que ya están gestionando sus alimentos de forma inteligente
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1A2B44] px-8 py-4 rounded-full hover:bg-gray-100 transition shadow-lg text-center"
              >
                Descargar gratis
              </a>
              <button 
                onClick={() => setPricingModalOpen(true)}
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition"
              >
                Ver planes
              </button>
            </div>
            <p className="text-white/60 mt-6">Prueba gratuita de 14 días • Sin tarjeta de crédito</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F1A2E] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="h-8 w-28 mb-4 brightness-0 invert scale-y-[-1]">
                <Negro />
              </div>
              <p className="text-white/60">
                Gestión inteligente de inventario de alimentos para un hogar más eficiente.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Producto</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition">Características</a></li>
                <li><a href="#" onClick={() => setPricingModalOpen(true)} className="hover:text-white transition">Precios</a></li>
                <li><a href="#" className="hover:text-white transition">Seguridad</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Compañía</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Legal</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition">Términos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>© 2026 NOURI. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
