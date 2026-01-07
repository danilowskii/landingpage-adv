import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Areas from "./components/Areas";
import About from "./components/About";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import Loc from "./components/Loc";
import Footer from "./components/Footer";

const LawFirmWebsite = () => {
  const data = {
    colors: {
      bg: "#020617",
      primary: "#f59e0b",
      secondary: "#c97c24",
      third: "#fff",
      text: "#cbd5e1",
      shadow: "0 0 20px rgba(245, 158, 11, 0.3)",
      hoverShadow: "0 0 30px rgba(245, 158, 11, 0.5)",
    },
    firmName: "Magalhães & Associados",
    contact: "81999999999",
  };

  return (
    <div
      style={{
        "--bg": data.colors.bg,
        "--primary": data.colors.primary,
        "--secondary": data.colors.secondary,
        "--text": data.colors.text,
        "--third": data.colors.third,
      }}
      className={`font-sans text-[var(--text)] antialiased bg-[var(--bg)] selection:bg-[var(--primary)] selection:text-white overflow-x-hidden relative`}
    >
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[120px] opacity-40 mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-amber-800/10 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-slate-800/40 rounded-full blur-[80px]"></div>
      </div>
      <Nav data={data} />
      <Hero data={data} />
      <Metrics data={data} />
      <Areas data={data} />
      <About data={data} />
      <Faqs data={data} />
      <Contact data={data} />
      <Loc data={data} />
      <Footer data={data} />
    </div>
  );
};

export default LawFirmWebsite;
