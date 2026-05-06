import { motion } from "motion/react";
import { ArrowLeftIcon } from "lucide-react";
import Logo from "../imports/Logo/Logo";

interface TermsAndConditionsProps {
  onBack: () => void;
}

export default function TermsAndConditions({ onBack }: TermsAndConditionsProps) {
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

        <h1 className="text-4xl font-bold text-[#1A2B44] mb-8">Términos y Condiciones de Uso</h1>
        
        <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#1A2B44] mb-4">1. Aceptación de los Términos</h2>
            <p>
              Al descargar, instalar o utilizar la aplicación NOURI, usted acepta estar sujeto a estos Términos y Condiciones. 
              Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1A2B44] mb-4">2. Descripción del Servicio</h2>
            <p>
              NOURI es una plataforma de gestión de inventario de alimentos diseñada para ayudar a los usuarios a reducir el 
              desperdicio y organizar sus consumos. El servicio incluye alertas de vencimiento, listas de compras y 
              análisis de ahorro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1A2B44] mb-4">3. Cuentas de Usuario</h2>
            <p>
              Para acceder a ciertas funciones, es posible que deba crear una cuenta. Usted es responsable de mantener la 
              confidencialidad de sus credenciales y de todas las actividades que ocurran bajo su cuenta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1A2B44] mb-4">4. Planes y Pagos</h2>
            <p>
              Ofrecemos planes gratuitos y premium. Los planes premium se facturan mensualmente o según lo acordado. 
              Las suscripciones pueden cancelarse en cualquier momento desde la configuración de su cuenta o la tienda de aplicaciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1A2B44] mb-4">5. Propiedad Intelectual</h2>
            <p>
              Todo el contenido, logotipos, diseños y software de NOURI son propiedad de NOURI y están protegidos por leyes 
              de propiedad intelectual internacionales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1A2B44] mb-4">6. Limitación de Responsabilidad</h2>
            <p>
              NOURI no se hace responsable de las decisiones tomadas basadas en las alertas de la aplicación. La seguridad 
              alimentaria es responsabilidad del usuario, quien debe verificar el estado real de sus alimentos antes de consumirlos.
            </p>
          </section>

          <section className="pt-8 border-t border-gray-100">
            <p className="text-sm">
              Última actualización: 6 de mayo de 2026<br />
              Contacto legal: legal@nouri-app.com
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
