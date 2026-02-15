
import React from 'react';

export const About: React.FC = () => {
  const metrics = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Completed Projects" },
    { value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="animate-reveal animate-fade-in-up">
            <div className="text-black dark:text-white font-bold mb-4 uppercase tracking-widest text-sm border-l-2 border-black dark:border-white pl-4">About Us</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-black dark:text-white">
              Built with Precision. <br />
              <span className="text-zinc-400 dark:text-zinc-600">Delivered with Integrity.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-10">
              Maju Jaya Steelworks adalah spesialis konstruksi besi dan baja untuk kebutuhan residential dan commercial. Kami menggabungkan keahlian teknis, material berkualitas, dan sistem kerja profesional untuk memastikan hasil terbaik dalam setiap proyek.
            </p>
            
            <div className="grid grid-cols-3 gap-8">
              {metrics.map((item, idx) => (
                <div key={idx} className="group cursor-default">
                  <div className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2 group-hover:scale-110 transition-transform origin-left duration-300">{item.value}</div>
                  <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-reveal animate-scale-up delay-200">
            <div className="aspect-square bg-white dark:bg-white/5 rounded-3xl border border-zinc-200 dark:border-white/10 flex items-center justify-center p-8 shadow-sm group">
               <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                alt="Precision Work"
                className="rounded-2xl shadow-2xl w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Visual element representing precision */}
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-black dark:bg-white rounded-2xl flex items-center justify-center text-white dark:text-black font-bold text-3xl shadow-xl transition-all duration-500 hover:rotate-12 hover:scale-110">
              MJ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
