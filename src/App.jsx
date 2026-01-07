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
  return (
    <div className="font-sans text-slate-300 antialiased bg-slate-950 selection:bg-amber-500 selection:text-white overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[120px] opacity-40 mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-amber-800/10 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-slate-800/40 rounded-full blur-[80px]"></div>
      </div>
      <Nav />
      <Hero />
      <Metrics />
      <Areas />
      <About />
      <Faqs />
      <Contact />
      <Loc />
      <Footer />
    </div>
  );
};

export default LawFirmWebsite;
