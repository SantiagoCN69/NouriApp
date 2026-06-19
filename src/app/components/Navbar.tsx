import { motion, AnimatePresence } from "motion/react";
import { MenuIcon, XIcon, MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import Negro from "../../imports/Negro/Negro";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  onOpenPricing: () => void;
}

export default function Navbar({ onOpenPricing }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-lg z-50 border-b ${isDarkMode ? 'bg-gray-950/90 border-gray-800/50' : 'bg-white/90 border-gray-100/50'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Decorative element */}
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl -z-10 ${isDarkMode ? 'bg-gradient-to-br from-[#4A6B94]/10 to-[#6A8CB4]/10' : 'bg-gradient-to-br from-[#1A2B44]/5 to-[#2A4464]/5'}`} />
        
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`h-10 w-32 scale-y-[-1] transition-transform ${isDarkMode ? '[&_path]:!fill-white brightness-0 invert' : '[&_path]:!fill-[#1A2B44]'}`}>
            <Negro />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {[
            { href: "/#beneficios", text: "Beneficios" },
            { href: "/#como-funciona", text: "Cómo funciona" },
            { href: "/#caracteristicas", text: "Características" },
            { href: "/nosotros", text: "Quiénes Somos" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative transition-colors py-2 group ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-[#1A2B44]'}`}
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.text}
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: hoveredLink === link.href ? "100%" : 0 }}
                className={`absolute bottom-0 left-0 h-0.5 rounded-full ${isDarkMode ? 'bg-gradient-to-r from-[#6A8CB4] to-[#8AACD4]' : 'bg-gradient-to-r from-[#1A2B44] to-[#2A4464]'}`}
              />
            </a>
          ))}
          <button
            onClick={onOpenPricing}
            className={`relative transition-colors py-2 group ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-[#1A2B44]'}`}
            onMouseEnter={() => setHoveredLink("pricing")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Precios
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: hoveredLink === "pricing" ? "100%" : 0 }}
              className={`absolute bottom-0 left-0 h-0.5 rounded-full ${isDarkMode ? 'bg-gradient-to-r from-[#6A8CB4] to-[#8AACD4]' : 'bg-gradient-to-r from-[#1A2B44] to-[#2A4464]'}`}
            />
          </button>
          <motion.button
            onClick={toggleDarkMode}
            className={`relative px-6 py-2.5 rounded-full hover:shadow-lg transition-all overflow-hidden group ${isDarkMode ? 'bg-gradient-to-r from-[#4A6B94] to-[#6A8CB4] text-white hover:shadow-[#4A6B94]/25' : 'bg-gradient-to-r from-[#1A2B44] to-[#2A4464] text-white hover:shadow-[#1A2B44]/25'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              {isDarkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
              {isDarkMode ? "Claro" : "Oscuro"}
            </span>
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${isDarkMode ? 'bg-gradient-to-r from-[#6A8CB4] to-[#4A6B94]' : 'bg-gradient-to-r from-[#2A4464] to-[#1A2B44]'}`} />
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="relative w-6 h-5">
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              className={`absolute top-0 left-0 w-full h-0.5 rounded-full origin-center ${isDarkMode ? 'bg-white' : 'bg-[#1A2B44]'}`}
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 rounded-full ${isDarkMode ? 'bg-white' : 'bg-[#1A2B44]'}`}
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full origin-center ${isDarkMode ? 'bg-white' : 'bg-[#1A2B44]'}`}
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
            className={`md:hidden border-t overflow-hidden ${isDarkMode ? 'border-gray-800 bg-gray-950' : 'border-gray-100 bg-white'}`}
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              <a
                href="/#beneficios"
                className={`transition py-3 px-4 rounded-lg ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-[#1A2B44] hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Beneficios
              </a>
              <a
                href="/#como-funciona"
                className={`transition py-3 px-4 rounded-lg ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-[#1A2B44] hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Cómo funciona
              </a>
              <a
                href="/#caracteristicas"
                className={`transition py-3 px-4 rounded-lg ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-[#1A2B44] hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Características
              </a>
              <a
                href="/nosotros"
                className={`transition py-3 px-4 rounded-lg ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-[#1A2B44] hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Quiénes Somos
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPricing();
                }}
                className={`transition py-3 px-4 rounded-lg text-left ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-[#1A2B44] hover:bg-gray-50'}`}
              >
                Precios
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  toggleDarkMode();
                }}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full transition w-full mt-4 ${isDarkMode ? 'bg-gradient-to-r from-[#4A6B94] to-[#6A8CB4] text-white hover:shadow-lg hover:shadow-[#4A6B94]/25' : 'bg-gradient-to-r from-[#1A2B44] to-[#2A4464] text-white hover:bg-[#2A3B54]'}`}
              >
                {isDarkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
                {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
