import { motion } from "motion/react";
import { ArrowLeftIcon, MailIcon, MessageSquareIcon } from "lucide-react";
import Logo from "../imports/Logo/Logo";

interface ContactProps {
  onBack: () => void;
}

export default function Contact({ onBack }: ContactProps) {
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

        <section>
          <h2 className="text-3xl font-bold text-[#1A2B44] mb-8">Ponte en Contacto</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-gray-600">
                ¿Tienes alguna duda, sugerencia o simplemente quieres saludar? Estamos aquí para escucharte.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-12 h-12 bg-[#1A2B44]/5 rounded-full flex items-center justify-center text-[#1A2B44]">
                    <MailIcon size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1A2B44]">Email</div>
                    <div>hola@nouri-app.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-12 h-12 bg-[#1A2B44]/5 rounded-full flex items-center justify-center text-[#1A2B44]">
                    <MessageSquareIcon size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1A2B44]">Soporte</div>
                    <div>Chat en vivo dentro de la App</div>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4 bg-gray-50 p-8 rounded-3xl" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-[#1A2B44] mb-1">Nombre</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1A2B44] outline-none transition" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A2B44] mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1A2B44] outline-none transition" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A2B44] mb-1">Mensaje</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1A2B44] outline-none transition h-32" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <button className="w-full bg-[#1A2B44] text-white py-3 rounded-xl font-bold hover:bg-[#2A3B54] transition shadow-lg">
                Enviar mensaje
              </button>
            </form>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
