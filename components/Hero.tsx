
import React from 'react';
import { ShieldCheck, Target, Users, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-[130px] md:pt-48 md:pb-[130px] overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-200/50 dark:bg-white/5 blur-[120px] rounded-full -mr-64 -mt-32 animate-fade-in"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-100/50 dark:bg-zinc-800/20 blur-[120px] rounded-full -ml-64 -mb-32 animate-fade-in"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <div className="animate-reveal animate-fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-white text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse"></span>
              Engineering Excellence
            </div>
            <h1 className="animate-reveal animate-fade-in-up delay-100 text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-black dark:text-white">
              Precision Steel <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-zinc-600 to-zinc-900 dark:from-white dark:via-zinc-400 dark:to-zinc-600">Fabrication</span> for Modern Construction
            </h1>
            <p className="animate-reveal animate-fade-in-up delay-200 text-zinc-600 dark:text-zinc-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              Ahli dalam konstruksi besi dan baja profesional, kami menghadirkan solusi struktur yang kokoh, presisi, dan tahan lama untuk memperkuat nilai properti anda.
            </p>
            
            <div className="animate-reveal animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-black px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-black/10 dark:shadow-white/10">
                Consultation Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="bg-zinc-50 dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 text-black dark:text-white border border-zinc-200 dark:border-white/10 px-8 py-4 rounded-xl font-bold transition-all">
                View Our Projects
              </button>
            </div>

            <div className="animate-reveal animate-fade-in delay-500 flex flex-wrap gap-8">
              {[
                { icon: ShieldCheck, text: "10+ Years Experience" },
                { icon: Target, text: "500+ Projects Completed" },
                { icon: Users, text: "Guaranteed Workmanship" }
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-zinc-500 hover:text-black dark:hover:text-white transition-colors cursor-default">
                  <badge.icon className="w-5 h-5 text-black dark:text-white" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group animate-reveal animate-scale-up delay-200">
             {/* Mockup Style Industrial Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-2xl transition-all duration-700">
              <img 
                src="/assets/hero.jpg" 
                alt="Industrial Steel Fabrication"
                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent opacity-40"></div>
            </div>
            
            {/* Float Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-2xl z-20 hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-white dark:text-black w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-black dark:text-white">100%</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-semibold">Project Safety</div>
                </div>
              </div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[radial-gradient(#000000_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
