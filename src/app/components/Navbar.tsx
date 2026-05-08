import { motion, AnimatePresence } from "motion/react";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import Negro from "../../imports/Negro/Negro";

interface NavbarProps {
  onOpenPricing: () => void;
}

export default function Navbar({ onOpenPricing }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-32 scale-y-[-1] [&_path]:!fill-[#1A2B44]">
            <Negro />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="/#beneficios" className="text-gray-600 hover:text-[#1A2B44] transition">
            Beneficios
          </a>
          <a href="/#como-funciona" className="text-gray-600 hover:text-[#1A2B44] transition">
            Cómo funciona
          </a>
          <a href="/#caracteristicas" className="text-gray-600 hover:text-[#1A2B44] transition">
            Características
          </a>
          <a href="/nosotros" className="text-gray-600 hover:text-[#1A2B44] transition">
            Quiénes Somos
          </a>
          <button
            onClick={onOpenPricing}
            className="text-gray-600 hover:text-[#1A2B44] transition"
          >
            Precios
          </button>
          <button
            onClick={() =>
              alert(
                "¡Gracias por tu interés! Por el momento la app no está disponible, pero puedes ver nuestra demo interactiva."
              )
            }
            className="bg-[#1A2B44] text-white px-6 py-2.5 rounded-full hover:bg-[#2A3B54] transition"
          >
            Descargar App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="relative w-6 h-5">
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              className="absolute top-0 left-0 w-full h-0.5 bg-[#1A2B44] rounded-full origin-center"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 bg-[#1A2B44] rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1A2B44] rounded-full origin-center"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              <a
                href="/#beneficios"
                className="text-gray-600 hover:text-[#1A2B44] transition py-3 px-4 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Beneficios
              </a>
              <a
                href="/#como-funciona"
                className="text-gray-600 hover:text-[#1A2B44] transition py-3 px-4 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cómo funciona
              </a>
              <a
                href="/#caracteristicas"
                className="text-gray-600 hover:text-[#1A2B44] transition py-3 px-4 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Características
              </a>
              <a
                href="/nosotros"
                className="text-gray-600 hover:text-[#1A2B44] transition py-3 px-4 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Quiénes Somos
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPricing();
                }}
                className="text-gray-600 hover:text-[#1A2B44] transition py-3 px-4 rounded-lg text-left"
              >
                Precios
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  alert(
                    "¡Gracias por tu interés! Por el momento la app no está disponible, pero puedes ver nuestra demo interactiva."
                  );
                }}
                className="bg-[#1A2B44] text-white px-6 py-3 rounded-full hover:bg-[#2A3B54] transition w-full mt-4"
              >
                Descargar App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
