
import React from 'react';
import { ProcessStep } from '../types';

export const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Consultation",
      description: "Diskusi mendalam tentang kebutuhan anda dan survey lokasi."
    },
    {
      number: "02",
      title: "Planning",
      description: "Detail desain teknis dan estimasi biaya yang transparan."
    },
    {
      number: "03",
      title: "Production",
      description: "Pengerjaan presisi di workshop dengan alat standar industri."
    },
    {
      number: "04",
      title: "Installation",
      description: "Instalasi aman oleh tim ahli sesuai dengan standar kualitas tinggi."
    }
  ];

  return (
    <div className="py-[130px] bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">Our Working Process</h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">Alur kerja profesional kami untuk memastikan kepuasan Anda di setiap tahap.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
        {/* Connector Line Desktop (Horizontal) */}
        <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-zinc-300 dark:border-zinc-700 z-0"></div>
        
        {/* Connector Line Mobile (Vertical) */}
        <div className="lg:hidden absolute left-1/2 top-10 bottom-10 w-0.5 border-l-2 border-dashed border-zinc-300 dark:border-zinc-700 z-0 -translate-x-1/2"></div>
        
        {steps.map((step, idx) => (
          <div key={idx} className="relative text-center group z-10">
            <div className="w-20 h-20 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:border-black dark:group-hover:border-white transition-all duration-300 relative bg-white dark:bg-black">
              <span className="text-2xl font-bold text-black dark:text-white group-hover:scale-110 transition-transform">{step.number}</span>
              {/* Dot decoration */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-black"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white transition-colors group-hover:text-zinc-700 dark:group-hover:text-zinc-200">{step.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed px-4 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
