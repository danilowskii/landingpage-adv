import { useState } from "react";
import { Scale, Menu, X, ChevronRight } from "lucide-react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-md border-b border-white/5 shadow-lg"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20 group-hover:border-amber-500/50 transition-colors">
              <Scale className="w-8 h-8 text-amber-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight uppercase font-serif">
                Magalhães
              </h1>
              <p className="text-[10px] text-amber-500 font-bold tracking-[0.2em] uppercase">
                Advocacia Premium
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {["Início", "Sobre", "Áreas de Atuação"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-300 hover:text-white transition-all uppercase tracking-widest relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#contato"
              className="relative overflow-hidden group bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 px-8 py-3 rounded-sm text-sm font-bold shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Agendar Consulta <ChevronRight className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {["Início", "Sobre", "Áreas de Atuação", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-amber-500"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
