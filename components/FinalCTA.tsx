
import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <div className="py-[130px] bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-100 dark:bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 p-12 md:p-20 rounded-[40px] shadow-2xl dark:shadow-none">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-black dark:text-white">
            Let’s Build Something <br />
            <span className="text-zinc-500 dark:text-zinc-400 underline decoration-black/10 dark:decoration-white/30 decoration-8 underline-offset-8">Strong Together</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Hubungi kami hari ini untuk konsultasi, survey lokasi, planning dan estimasi, kami siap mewujudkan impian anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/6285961580015?text=Halo%20mau%20tanya tanya%20nih%20tentang%20jasa%20yang%20disediakan." 
              className="bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-black px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-black/20 dark:shadow-white/10"
            >
              <MessageSquare size={24} />
              Contact via WhatsApp
            </a>
            
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-zinc-500 dark:text-zinc-600 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
              Fast Response
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
              Transparent Fees
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
              Expert Engineers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
