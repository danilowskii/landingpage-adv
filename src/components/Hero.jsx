import { Shield, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="início"
      className="relative pt-40 pb-20 lg:pt-60 lg:pb-40 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_#f59e0b]"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-amber-500">
                Disponível para urgências
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] font-serif">
              Justiça com <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700 drop-shadow-lg">
                Autoridade
              </span>
            </h2>

            <p className="text-lg text-slate-400 max-w-lg leading-relaxed border-l-4 border-amber-500/30 pl-6">
              Combinamos inteligência jurídica e estratégia de alto nível para
              proteger seu patrimônio e garantir seus direitos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contato"
                className="flex items-center justify-center gap-2 bg-amber-500 text-slate-950 px-8 py-4 rounded-sm font-bold hover:bg-amber-400 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:scale-[1.03]"
              >
                Falar com Advogado <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#sobre"
                className="flex items-center justify-center px-8 py-4 rounded-sm font-bold text-white border border-white/20 hover:bg-white/5 hover:border-amber-500/50 transition-all backdrop-blur-sm"
              >
                Conhecer Escritório
              </a>
            </div>
          </div>

          {/* Imagem Hero com Efeito Liquid Glass */}
          <div className="hidden md:block relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600 to-amber-900 rounded-sm transform translate-x-4 translate-y-4 blur-sm opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Escritório Moderno"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
              {/* Glass Card Overlay on Image */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/60 backdrop-blur-md border border-white/10 p-4 rounded-sm z-20">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-amber-500" />
                  <div>
                    <p className="text-white font-bold text-sm">
                      Proteção Garantida
                    </p>
                    <p className="text-slate-400 text-xs">
                      Excelência desde 2010
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
