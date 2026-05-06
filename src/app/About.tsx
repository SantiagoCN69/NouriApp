import { motion } from "motion/react";
import { ArrowLeftIcon } from "lucide-react";
import Logo from "../imports/Logo/Logo";

interface AboutProps {
  onBack: () => void;
}

export default function About({ onBack }: AboutProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white pt-24 pb-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#1A2B44] hover:text-[#2A3B54] transition mb-8 font-medium"
        >
          <ArrowLeftIcon size={20} />
          Volver al inicio
        </button>

        <div className="h-10 w-32 mb-8 [&_path]:!fill-[#1A2B44]">
          <Logo />
        </div>

        <section className="mb-20">
          <h1 className="text-4xl font-bold text-[#1A2B44] mb-8">Sobre Nosotros</h1>
          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p className="text-xl leading-relaxed">
              En NOURI, creemos que la tecnología puede ser el mejor aliado de la sostenibilidad en el hogar. 
              Nacimos con la misión de erradicar el desperdicio de alimentos a través de soluciones inteligentes 
              y fáciles de usar.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-[#1A2B44] mb-3">Nuestra Visión</h3>
                <p>Convertirnos en el estándar global de gestión de recursos domésticos, ayudando a millones de familias a ahorrar y vivir de forma más consciente.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-[#1A2B44] mb-3">Nuestro Compromiso</h3>
                <p>Innovación constante, privacidad de datos y un impacto positivo real tanto en la economía familiar como en el medio ambiente.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
