import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute right-0 top-20 w-1/2 h-full bg-gradient-to-l from-amber-900/10 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-white">
              Inicie sua Defesa
            </h2>
            <p className="text-slate-400 mb-10 text-lg">
              Não deixe suas dúvidas jurídicas sem resposta. Entre em contato
              hoje mesmo e tenha uma análise preliminar com sigilo absoluto.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-amber-500 uppercase tracking-widest font-bold">
                    Contato Rápido
                  </p>
                  <p className="text-2xl font-bold text-white">
                    (81) 99999-9999
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-amber-500 uppercase tracking-widest font-bold">
                    Email Corporativo
                  </p>
                  <p className="text-xl font-bold text-white">
                    contato@magalhaes.adv
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-amber-500 uppercase tracking-widest font-bold">
                    Sede
                  </p>
                  <p className="text-lg font-bold text-white">
                    Av. Boa Viagem, 1000 - Recife
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Glass Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>

            <h3 className="text-2xl font-bold text-white mb-8 font-serif">
              Envie uma mensagem
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none text-white placeholder-slate-600 transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none text-white placeholder-slate-600 transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none text-white placeholder-slate-600 transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">
                  Área
                </label>
                <select className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none text-white transition-all appearance-none">
                  <option className="bg-slate-900">Selecione uma área</option>
                  <option className="bg-slate-900">Direito Civil</option>
                  <option className="bg-slate-900">Trabalhista</option>
                  <option className="bg-slate-900">Empresarial</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">
                  Caso
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none text-white placeholder-slate-600 transition-all"
                  placeholder="Descreva brevemente..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 px-4 rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] uppercase tracking-widest text-sm"
              >
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
