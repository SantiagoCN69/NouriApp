import { Link } from "react-router";
import Negro from "../../imports/Negro/Negro";

export default function Footer() {
  return (
    <footer className="bg-[#0F1A2E] text-white py-16 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#1A2B44]/20 to-[#2A4464]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#1A2B44]/10 to-[#2A4464]/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="h-10 w-32 mb-6 brightness-0 invert scale-y-[-1]">
              <Negro />
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Gestión inteligente de inventario de alimentos para un hogar más eficiente y sostenible.
            </p>
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition cursor-pointer">
                <span className="text-sm">𝕏</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition cursor-pointer">
                <span className="text-sm">in</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition cursor-pointer">
                <span className="text-sm">📧</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-6 font-semibold text-white">Producto</h4>
            <ul className="space-y-3 text-white/70">
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
            <h4 className="mb-6 font-semibold text-white">Compañía</h4>
            <ul className="space-y-3 text-white/70">
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
            <h4 className="mb-6 font-semibold text-white">Legal</h4>
            <ul className="space-y-3 text-white/70">
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
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">© 2026 NOURI. Todos los derechos reservados.</p>
          <p className="text-white/40 text-sm">Hecho con 💙 para un futuro más sostenible</p>
        </div>
      </div>
    </footer>
  );
}
