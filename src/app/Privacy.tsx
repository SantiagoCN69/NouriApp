import { motion } from "motion/react";
import { ArrowLeftIcon, ShieldCheckIcon } from "lucide-react";
import Logo from "../imports/Logo/Logo";

interface PrivacyProps {
  onBack: () => void;
}

export default function Privacy({ onBack }: PrivacyProps) {
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

        <h1 className="text-4xl font-bold text-[#1A2B44] mb-8 flex items-center gap-4">
          <ShieldCheckIcon className="text-green-600" size={36} />
          Política de Privacidad
        </h1>
        
        <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#1A2B44] mb-4">1. Recopilación de Información</h2>
            <p>
              En NOURI, recopilamos información que usted nos proporciona directamente cuando crea una cuenta, utiliza nuestras funciones de inventario o se pone en contacto con nosotros. Esto puede incluir su nombre, dirección de correo electrónico y datos sobre los productos que registra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1A2B44] mb-4">2. Uso de la Información</h2>
            <p>
              Utilizamos su información para personalizar su experiencia, enviarle alertas de vencimiento inteligentes, mejorar nuestras funciones y proporcionarle soporte técnico. Sus datos nos ayudan a entender cómo optimizar la gestión de alimentos en su hogar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1A2B44] mb-4">3. Protección de Datos</h2>
            <p>
              Implementamos medidas de seguridad robustas para proteger su información personal. Sus datos de inventario están encriptados y solo son accesibles por usted o por los miembros de su familia autorizados mediante la función de sincronización.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1A2B44] mb-4">4. Compartir con Terceros</h2>
            <p>
              NOURI no vende ni alquila su información personal a terceros. Solo compartimos datos cuando es estrictamente necesario para la prestación de servicios (como procesadores de pago seguros) o por obligación legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1A2B44] mb-4">5. Sus Derechos</h2>
            <p>
              Usted tiene derecho a acceder, corregir o eliminar sus datos personales en cualquier momento. Puede hacerlo directamente desde la configuración de la App o enviándonos una solicitud por correo electrónico.
            </p>
          </section>

          <section className="pt-8 border-t border-gray-100">
            <p className="text-sm">
              Última actualización: 6 de mayo de 2026<br />
              Dudas sobre privacidad: privacy@nouri-app.com
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
