import { Link } from "react-router";
import Negro from "../../imports/Negro/Negro";

export default function Footer() {
  return (
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
              <li>
                <a href="/#caracteristicas" className="hover:text-white transition">
                  Características
                </a>
              </li>
              <li>
                <a href="/#como-funciona" className="hover:text-white transition">
                  Cómo funciona
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Compañía</h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <a href="/nosotros" className="hover:text-white transition">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:text-white transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Legal</h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <a href="/privacidad" className="hover:text-white transition">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="/terminos" className="hover:text-white transition">
                  Términos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>© 2026 NOURI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
