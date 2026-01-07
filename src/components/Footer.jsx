import { Scale } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-black text-slate-500 py-16 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-amber-500 rounded-md">
                <Scale className="w-5 h-5 text-black" />
              </div>
              <span className="text-2xl font-bold text-white uppercase tracking-tight font-serif">
                Magalhães
              </span>
            </div>
            <p className="text-sm max-w-sm mb-8 leading-relaxed">
              Comprometidos com a excelência jurídica e a defesa intransigente
              dos interesses de nossos clientes. Sua segurança jurídica é nossa
              prioridade.
            </p>
            <div className="flex gap-4">
              {["IG", "LI", "FB"].map((social) => (
                <div
                  key={social}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all cursor-pointer"
                >
                  <span className="font-bold text-xs">{social}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">
              Links Rápidos
            </h4>
            <ul className="space-y-3 text-sm">
              {["Início", "Sobre Nós", "Áreas de Atuação", "Blog Jurídico"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-amber-500 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Política de Privacidade",
                "Termos de Uso",
                "Código de Ética OAB",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Magalhães Advocacia. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido por{" "}
            <span className="text-white font-bold">Danilo</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
