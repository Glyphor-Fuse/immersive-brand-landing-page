import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0A0A0A] text-[#FDFCF8] overflow-hidden selection:bg-[#8E8E8E] selection:text-[#0A0A0A]">
      {/* Background Texture/Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="container mx-auto px-6 pt-32 pb-20 h-full flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 h-full">
          
          {/* Main Headline Column */}
          <div className="lg:col-span-8 flex flex-col justify-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block text-sm uppercase tracking-[0.4em] mb-8 text-[#8E8E8E] font-medium">
                Established / MMXXIV
              </span>
              
              <h1 className="relative flex flex-col">
                <span className="text-7xl md:text-[10rem] lg:text-[12rem] font-bold leading-[0.85] tracking-tighter mb-2">
                  NEO
                </span>
                <span className="text-7xl md:text-[10rem] lg:text-[12rem] font-serif italic font-light leading-[0.85] tracking-tighter ml-auto lg:mr-24">
                  SABI
                </span>
              </h1>

              <div className="mt-16 flex flex-col md:flex-row md:items-end gap-8">
                <motion.p 
                  className="max-w-xs text-lg leading-relaxed text-[#8E8E8E]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Architectural precision meeting the beauty of the unfinished. A digital sanctuary for the modern minimalist.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-[1px] bg-[#FDFCF8] group-hover:w-20 transition-all duration-500"></div>
                  <span className="uppercase text-xs tracking-widest font-bold">Discover The Void</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Visual Side Column */}
          <div className="lg:col-span-4 relative flex items-center justify-center lg:justify-end h-[50vh] lg:h-auto">
            <motion.div 
              className="relative w-full lg:w-[120%] h-full lg:h-[80%] overflow-hidden grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-1000 ease-in-out"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            >
              <img 
                src="<span className="block"><img src="https://images.pexels.com/photos/33999713/pexels-photo-33999713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Close-up of a modern concrete building entrance with minimalist design and natural light." loading="lazy" /><a href="https://www.pexels.com/photo/modern-concrete-building-entrance-architecture-33999713/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by 정규송 Nui MALAMA on Pexels</a></span>" 
                alt="Minimalist Industrial Architecture"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-40"></div>
            </motion.div>

            {/* Floating Label */}
            <motion.div 
              className="absolute -left-12 bottom-12 hidden xl:block vertical-rl rotate-180"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-[10px] uppercase tracking-[1em] text-[#8E8E8E]">
                Structural Integrity / 01
              </span>
            </motion.div>
          </div>
        </div>

        {/* Footer of Hero */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-[#FDFCF8]/10 pt-8 mt-12">
          <div className="flex gap-12 text-[10px] uppercase tracking-widest text-[#8E8E8E]">
            <div>Tokyo, JPN</div>
            <div>Basics & Raw</div>
          </div>
          
          <motion.div 
            className="flex items-center gap-2 mt-4 md:mt-0 cursor-pointer"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
            <ArrowDownRight size={14} className="text-[#8E8E8E]" />
          </motion.div>
        </div>
      </div>

      {/* Vertical Accents (The "Ma" Concept) */}
      <div className="absolute right-12 top-0 h-32 w-[1px] bg-[#FDFCF8]/20 hidden lg:block"></div>
      <div className="absolute left-6 bottom-0 h-64 w-[1px] bg-[#FDFCF8]/10 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
