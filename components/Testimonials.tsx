
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TestimonialItem } from '../types';

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      name: "Andi Pratama",
      role: "Home Owner",
      review: "Hasil pagar sangat rapi dan kokoh. Proses dari survey hingga pemasangan sangat cepat dan profesional."
    },
    {
      name: "Rina Setiawan",
      role: "Business Owner",
      review: "Kanopi baja dipasang tepat waktu dan melebihi ekspektasi desain kami. Sangat merekomendasikan untuk proyek komersial."
    },
    {
      name: "Budi Santoso",
      role: "Factory Manager",
      review: "Struktur gudang kami dikerjakan dengan sangat presisi. Ketahanan material dan kerapihan pengelasan sangat memuaskan."
    }
  ];

  return (
    <div className="py-[130px] bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-12 h-12 bg-black dark:bg-white/5 rounded-full flex items-center justify-center mb-6">
            <Quote className="text-white dark:text-white w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">What Our Clients Say</h2>
          <div className="flex items-center gap-1 text-zinc-400 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" className="text-black dark:text-white" />)}
            <span className="ml-2 text-black dark:text-white font-semibold">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="p-10 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-900 rounded-3xl relative hover:border-black dark:hover:border-zinc-700 transition-colors shadow-sm hover:shadow-md">
              <div className="flex gap-1 text-black dark:text-white mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 italic text-lg">
                "{item.review}"
              </p>
              <div className="flex items-center gap-4 border-t border-zinc-100 dark:border-zinc-900 pt-8">
                <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center font-bold text-black dark:text-white border border-zinc-200 dark:border-zinc-800">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-black dark:text-white">{item.name}</div>
                  <div className="text-sm text-zinc-500">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
