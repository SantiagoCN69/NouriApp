import { Link } from "react-router";
import Negro from "../../imports/Negro/Negro";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`py-16 px-6 relative overflow-hidden ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-[#0F1A2E] text-white'}`}>
      {/* Decorative elements */}
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 ${isDarkMode ? 'bg-gradient-to-br from-[#4A6B94]/20 to-[#6A8CB4]/20' : 'bg-gradient-to-br from-[#1A2B44]/20 to-[#2A4464]/20'}`} />
      <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 ${isDarkMode ? 'bg-gradient-to-tr from-[#4A6B94]/10 to-[#6A8CB4]/10' : 'bg-gradient-to-tr from-[#1A2B44]/10 to-[#2A4464]/10'}`} />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className={`h-10 w-32 mb-6 scale-y-[-1] ${isDarkMode ? '[&_path]:!fill-white brightness-0 invert' : 'brightness-0 invert'}`}>
              <Negro />
            </div>
            <p className={`leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-white/70'}`}>
              Gestión inteligente de inventario de alimentos para un hogar más eficiente y sostenible.
            </p>
          </div>
          <div>
            <h4 className={`mb-6 font-semibold ${isDarkMode ? 'text-white' : 'text-white'}`}>Producto</h4>
            <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-white/70'}`}>
              <li>
                <a href="/#caracteristicas" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Características
                </a>
              </li>
              <li>
                <a href="/#como-funciona" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="/#beneficios" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Beneficios
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={`mb-6 font-semibold ${isDarkMode ? 'text-white' : 'text-white'}`}>Compañía</h4>
            <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-white/70'}`}>
              <li>
                <a href="/nosotros" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={`mb-6 font-semibold ${isDarkMode ? 'text-white' : 'text-white'}`}>Legal</h4>
            <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-white/70'}`}>
              <li>
                <a href="/privacidad" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="/terminos" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Términos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${isDarkMode ? 'border-gray-800' : 'border-white/10'}`}>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-white/60'}`}>© 2026 NOURI. Todos los derechos reservados.</p>
          <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-white/40'}`}>Hecho con 💙 para un futuro más sostenible</p>
        </div>
      </div>
    </footer>
  );
}
