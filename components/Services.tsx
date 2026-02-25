
import React from 'react';
import { Fence, Home, ArrowUpRight, Building2, Factory, PenTool, LayoutGrid } from 'lucide-react';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const services: (ServiceItem & { icon: any })[] = [
    {
      title: "Custom Gates & Fencing",
      description: "Pagar besi minimalis dan modern dengan struktur kokoh dan desain estetik.",
      icon: Fence
    },
    {
      title: "Steel Canopy Systems",
      description: "Kanopi baja ringan dan industrial untuk hunian, area parkir, dan komersial.",
      icon: Home
    },
    {
      title: "Railings & Stair Structures",
      description: "Railing tangga, balkon, dan struktur tangga besi presisi yang aman dan stylish.",
      icon: LayoutGrid
    },
    {
      title: "Steel Construction",
      description: "Struktur baja untuk gudang, workshop, showroom, dan berbagai bangunan.",
      icon: Building2
    },
    {
      title: "Custom Fabrication",
      description: "Produksi desain khusus sesuai kebutuhan arsitektur dan spesifikasi proyek unik.",
      icon: PenTool
    },
    {
      title: "Installation & Finishing",
      description: "Instalasi profesional dengan quality control ketat dan finishing cat anti karat.",
      icon: Factory
    }
  ];

  return (
    <div className="py-[130px] bg-white dark:bg-black transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16 animate-reveal animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">Our Core Services</h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
          Solusi konstruksi logam komprehensif mulai dari desain hingga instalasi akhir untuk hasil maksimal.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className={`animate-reveal animate-fade-in-up group p-8 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-3xl hover:border-black dark:hover:border-white transition-all duration-500 relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-white/5`}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <ArrowUpRight className="text-black dark:text-white w-5 h-5" />
            </div>
            
            <div className="w-14 h-14 bg-white dark:bg-white/5 border border-zinc-200 dark:border-transparent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black dark:group-hover:bg-white transition-all duration-500 shadow-sm group-hover:rotate-6">
              <service.icon className="w-7 h-7 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors" />
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white transition-colors group-hover:text-zinc-700 dark:group-hover:text-zinc-200">{service.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors">
              {service.description}
            </p>
            
            <button className="text-black dark:text-white text-sm font-semibold flex items-center gap-1 group/btn relative overflow-hidden">
              <span className="relative z-10">Learn more</span>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
