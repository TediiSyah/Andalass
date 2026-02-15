
import React from 'react';
import { ProcessStep } from '../types';

export const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Consultation",
      description: "Diskusi mendalam tentang kebutuhan Anda dan survey lokasi gratis."
    },
    {
      number: "02",
      title: "Planning",
      description: "Detail desain teknis dan estimasi biaya yang transparan dan kompetitif."
    },
    {
      number: "03",
      title: "Production",
      description: "Pengerjaan presisi di workshop profesional dengan alat standar industri."
    },
    {
      number: "04",
      title: "Installation",
      description: "Instalasi aman oleh tim ahli sesuai dengan standar kualitas tinggi."
    }
  ];

  return (
    <div className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">Our Working Process</h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">Alur kerja profesional kami untuk memastikan kepuasan Anda di setiap tahap.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
        {/* Connector Line Desktop */}
        <div className="hidden lg:block absolute top-[40px] left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent -z-10"></div>
        
        {steps.map((step, idx) => (
          <div key={idx} className="relative text-center group">
            <div className="w-20 h-20 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:border-black dark:group-hover:border-white transition-all duration-300 relative">
              <span className="text-2xl font-bold text-black dark:text-white group-hover:scale-110 transition-transform">{step.number}</span>
              {/* Dot decoration */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-black"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">{step.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed px-4 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
