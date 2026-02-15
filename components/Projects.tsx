
import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      name: "Modern Minimalist Gate",
      category: "Residential",
      location: "Perumahan Citra Indah",
      imageUrl: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Commercial Steel Canopy",
      category: "Commercial",
      location: "Central Business Area",
      imageUrl: "https://images.unsplash.com/photo-1590674116497-69b503023223?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Industrial Warehouse Structure",
      category: "Industrial",
      location: "Industrial Estate",
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">Selected Projects</h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">Beberapa proyek yang telah kami selesaikan dengan presisi.</p>
        </div>
        <button className="text-black dark:text-white font-bold flex items-center gap-2 hover:gap-3 transition-all">
          View All Projects <ExternalLink size={18} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative rounded-3xl overflow-hidden aspect-[4/5] border border-zinc-200 dark:border-zinc-800 shadow-xl">
            {/* Grayscale removed from image below */}
            <img 
              src={project.imageUrl} 
              alt={project.name} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
            />
            {/* Gradient adjusted for better visibility since grayscale is removed */}
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-opacity"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 transform group-hover:translate-y-[-10px] transition-transform duration-300">
              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">
                <span className="w-1 h-1 rounded-full bg-black dark:bg-white"></span>
                {project.category}
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{project.name}</h3>
              <div className="flex items-center gap-1.5 text-zinc-500 text-sm">
                <MapPin size={14} className="text-black dark:text-white" />
                {project.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
