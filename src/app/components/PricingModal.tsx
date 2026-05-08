import { motion, AnimatePresence } from "motion/react";
import { XIcon, CheckIcon } from "lucide-react";
import { useState } from "react";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PricingModal({ isOpen, onClose }: PricingModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<"free" | "premium">("free");

  const plans = {
    free: {
      name: "Gratuito",
      price: "COP $0",
      period: "/mes",
      features: [
        "Hasta 50 productos en inventario",
        "Alertas básicas de vencimiento",
        "Organización por categorías",
        "Vista de productos próximos a vencer",
        "Acceso en 1 dispositivo",
      ],
    },
    premium: {
      name: "Premium",
      price: "COP $20.000",
      priceUSD: "USD $5",
      period: "/mes",
      features: [
        "Productos ilimitados en inventario",
        "Alertas personalizadas avanzadas",
        "Sincronización multi-dispositivo",
        "Listas de compra inteligentes",
        "Estadísticas y reportes detallados",
        "Sugerencias de recetas basadas en inventario",
        "Escaneo de códigos de barras ilimitado",
        "Soporte prioritario",
        "Sin anuncios",
      ],
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto pointer-events-auto relative"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-gray-100 transition z-50 shadow-sm border border-gray-100"
              >
                <XIcon size={24} className="text-gray-600" />
              </button>

              <div className="p-6 md:p-12">
                <div className="text-center mb-8 md:mb-12 pt-4">
                  <h2 className="text-3xl md:text-4xl mb-3 md:mb-4 text-[#1A2B44]">Elige tu plan</h2>
                  <p className="text-lg md:text-xl text-gray-600">
                    Selecciona el plan que mejor se adapte a tus necesidades
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pb-4">
                    {/* Plan Gratuito */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      onClick={() => setSelectedPlan("free")}
                      className={`relative p-8 rounded-2xl border-2 cursor-pointer transition flex flex-col ${
                        selectedPlan === "free"
                          ? "border-[#1A2B44] bg-[#1A2B44]/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {selectedPlan === "free" && (
                        <div className="absolute top-4 right-4 w-6 h-6 bg-[#1A2B44] rounded-full flex items-center justify-center">
                          <CheckIcon size={16} className="text-white" />
                        </div>
                      )}
                      <div className="mb-6">
                        <h3 className="text-2xl mb-2 text-[#1A2B44]">
                          {plans.free.name}
                        </h3>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl text-[#1A2B44]">
                            {plans.free.price}
                          </span>
                          <span className="text-gray-600">{plans.free.period}</span>
                        </div>
                      </div>
                      <ul className="space-y-3 flex-1">
                        {plans.free.features.map((feature, i) => (
                          <li key={i} className="flex gap-3">
                            <CheckIcon
                              size={20}
                              className="text-[#1A2B44] flex-shrink-0 mt-0.5"
                            />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() =>
                          alert(
                            "¡Gracias por tu interés! Por el momento la app no está disponible, pero puedes ver nuestra demo interactiva."
                          )
                        }
                        className={`w-full mt-8 py-3 rounded-full transition ${
                          selectedPlan === "free"
                            ? "bg-[#1A2B44] text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        Comenzar gratis
                      </button>
                    </motion.div>

                    {/* Plan Premium */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      onClick={() => setSelectedPlan("premium")}
                      className={`relative p-8 rounded-2xl border-2 cursor-pointer transition flex flex-col ${
                        selectedPlan === "premium"
                          ? "border-[#1A2B44] bg-[#1A2B44]/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1A2B44] text-white px-4 py-1 rounded-full text-sm">
                        Más popular
                      </div>
                      {selectedPlan === "premium" && (
                        <div className="absolute top-4 right-4 w-6 h-6 bg-[#1A2B44] rounded-full flex items-center justify-center">
                          <CheckIcon size={16} className="text-white" />
                        </div>
                      )}
                      <div className="mb-6">
                        <h3 className="text-2xl mb-2 text-[#1A2B44]">
                          {plans.premium.name}
                        </h3>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl text-[#1A2B44]">
                            {plans.premium.price}
                          </span>
                          <span className="text-gray-600">{plans.premium.period}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {plans.premium.priceUSD}
                        </p>
                      </div>
                      <ul className="space-y-3 flex-1">
                        {plans.premium.features.map((feature, i) => (
                          <li key={i} className="flex gap-3">
                            <CheckIcon
                              size={20}
                              className="text-[#1A2B44] flex-shrink-0 mt-0.5"
                            />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() =>
                          alert(
                            "¡Gracias por tu interés! Por el momento la app no está disponible, pero puedes ver nuestra demo interactiva."
                          )
                        }
                        className={`w-full mt-8 py-3 rounded-full transition ${
                          selectedPlan === "premium"
                            ? "bg-[#1A2B44] text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        Obtener Premium
                      </button>
                    </motion.div>
                  </div>
                </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
