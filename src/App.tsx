import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowDown, Menu, X, Instagram, Twitter } from 'lucide-react';
import { useState, useRef } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center text-[#FDFCF8]">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold tracking-tighter uppercase"
      >
        Kintsugi / 01
      </motion.div>
      <div className="flex items-center gap-8">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0A0A0A] flex flex-col justify-center items-center gap-8 z-40"
          >
            {['Origin', 'Method', 'Space', 'Journal'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-6xl md:text-8xl font-serif text-[#FDFCF8] hover:text-[#8E8E8E] transition-colors"
                whileHover={{ x: 20 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="relative h-screen bg-[#FDFCF8] overflow-hidden pt-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col h-full">
        <div className="flex-1 flex flex-col justify-end pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <span className="absolute -top-12 left-0 text-sm font-mono tracking-widest text-[#8E8E8E] uppercase">
              // Precision Crafted
            </span>
            <h1 className="text-[12vw] leading-[0.85] tracking-tighter font-serif text-[#0A0A0A] uppercase">
              The Art <br /> Of Ma
            </h1>
            <motion.div 
              style={{ y }}
              className="absolute right-0 top-0 w-1/3 aspect-[3/4] hidden lg:block"
            >
              <img 
                src="https://images.pexels.com/photos/34192646/pexels-photo-34192646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                alt="Architecture" 
                className="w-full h-full object-cover grayscale"
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="flex justify-between items-end pb-12">
          <div className="max-w-xs">
            <p className="text-[#8E8E8E] text-sm leading-relaxed">
              Finding beauty in the void. Our philosophy blends Tokyo's neo-minimalist precision with the raw, industrial textures of wabi-sabi.
            </p>
          </div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="text-[#0A0A0A]" size={32} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SectionHeading = ({ number, title, subtitle }: { number: string; title: string; subtitle: string }) => (
  <div className="mb-24">
    <span className="text-sm font-mono text-[#8E8E8E] mb-4 block tracking-widest">{number}</span>
    <h2 className="text-6xl md:text-8xl font-serif text-[#0A0A0A] mb-4">{title}</h2>
    <p className="text-xl text-[#8E8E8E] font-sans italic">{subtitle}</p>
  </div>
);

const FeatureGrid = () => {
  return (
    <section className="py-32 bg-[#FDFCF8] px-6 md:px-12 border-t border-[#8E8E8E]/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          number="01 / PROCESS" 
          title="Surgical Precision" 
          subtitle="Where raw materials meet refined design."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="md:col-span-7 aspect-video bg-[#8E8E8E]"
            whileInView={{ opacity: [0, 1], scale: [0.95, 1] }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.pexels.com/photos/34215534/pexels-photo-34215534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
              alt="Industrial Space" 
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>
          <div className="md:col-span-5 md:pl-12">
            <h3 className="text-3xl font-serif mb-6 text-[#0A0A0A]">The Industrial Core</h3>
            <p className="text-lg text-[#0A0A0A]/70 leading-relaxed mb-8">
              Every element is stripped of ornament. We celebrate the honesty of concrete, the cold truth of steel, and the warmth of paper.
            </p>
            <button className="flex items-center gap-4 group cursor-pointer">
              <span className="text-sm uppercase tracking-widest font-bold">Explore the Method</span>
              <div className="w-12 h-px bg-[#0A0A0A] group-hover:w-20 transition-all duration-300" />
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductShowcase = () => {
  return (
    <section className="bg-[#0A0A0A] py-32 text-[#FDFCF8] px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="flex flex-col justify-center">
          <SectionHeading 
            number="02 / COLLECTION" 
            title="Monoliths" 
            subtitle="Objects that define a space by their presence alone."
          />
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-48 bg-[#8E8E8E]/20 relative overflow-hidden">
                <img src="https://images.pexels.com/photos/14563996/pexels-photo-14563996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Object 1" className="w-full h-full object-cover mix-blend-luminosity hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="font-mono text-xs uppercase tracking-widest">Kuro Vase</h4>
            </div>
            <div className="space-y-4 pt-12">
              <div className="h-48 bg-[#8E8E8E]/20 relative overflow-hidden">
                <img src="https://images.pexels.com/photos/34192646/pexels-photo-34192646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Object 2" className="w-full h-full object-cover mix-blend-luminosity hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="font-mono text-xs uppercase tracking-widest">Sosei Lamp</h4>
            </div>
          </div>
        </div>
        <div className="relative h-[80vh]">
          <img 
            src="https://images.pexels.com/photos/6821738/pexels-photo-6821738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            alt="Interior" 
            className="w-full h-full object-cover grayscale opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-[#FDFCF8] text-[#0A0A0A] px-12 py-16 -rotate-90 md:-rotate-0 md:translate-x-24 shadow-2xl">
                <p className="text-sm font-mono mb-4 italic">Design Philosophy</p>
                <p className="text-4xl font-serif">Structure is the soul of silence.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#FDFCF8] pt-32 pb-12 px-6 md:px-12 border-t border-[#8E8E8E]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2">
            <h2 className="text-5xl font-serif text-[#0A0A0A] mb-8">Stay in the void.</h2>
            <div className="flex border-b border-[#0A0A0A] pb-4 max-w-sm">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent w-full outline-none font-mono text-xs"
              />
              <ArrowRight size={20} />
            </div>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-sm font-sans">
              <li><a href="#" className="hover:text-[#8E8E8E] transition-colors">Archive</a></li>
              <li><a href="#" className="hover:text-[#8E8E8E] transition-colors">Stockists</a></li>
              <li><a href="#" className="hover:text-[#8E8E8E] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest mb-6">Social</h4>
            <div className="flex gap-4">
              <Instagram size={20} className="hover:text-[#8E8E8E] cursor-pointer" />
              <Twitter size={20} className="hover:text-[#8E8E8E] cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#8E8E8E]/20 pt-12">
          <p className="font-mono text-[10px] text-[#8E8E8E] uppercase tracking-widest">
            © 2024 Immersive Brand. Tokyo / Berlin.
          </p>
          <div className="text-4xl font-serif mt-8 md:mt-0 tracking-tighter">
            不完全な
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <main className="bg-[#FDFCF8] font-sans text-[#0A0A0A] selection:bg-[#8E8E8E] selection:text-[#FDFCF8]">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <ProductShowcase />
      <section className="h-[60vh] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden">
        <motion.div 
          className="text-[20vw] font-serif opacity-[0.03] absolute whitespace-nowrap select-none"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        >
          NEO MINIMALISM WABI SABI INDUSTRIAL TOKYO NEO MINIMALISM
        </motion.div>
        <div className="text-center z-10">
          <p className="font-mono text-sm tracking-[0.5em] mb-4">THE LAST WORD</p>
          <h2 className="text-6xl md:text-8xl font-serif italic">Less is more, <br /> but empty is everything.</h2>
        </div>
      </section>
      <Footer />
    </main>
  );
}