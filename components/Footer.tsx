
import React from 'react';
import { Hammer, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-900 pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
              <Hammer className="text-white dark:text-black w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-black dark:text-white">Andalass</span>
          </div>
          <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed mb-8">
            Solusi konstruksi besi dan baja modern dengan presisi tinggi dan kualitas material terbaik.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-black dark:text-white font-bold mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-zinc-600 dark:text-zinc-500">
            <li><a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-black dark:hover:text-white transition-colors">Our Services</a></li>
            <li><a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a></li>
            <li><a href="#process" className="hover:text-black dark:hover:text-white transition-colors">Work Process</a></li>
            <li><a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-black dark:text-white font-bold mb-6">Contact Info</h4>
          <ul className="flex flex-col gap-4 text-zinc-600 dark:text-zinc-500">
            <li className="flex gap-3">
              <MapPin className="text-black dark:text-white shrink-0" size={20} />
              <span>Jl. Simpang Anggodo Lowok Suruh No.19, RT.5/RW.9<br />Mangliawan, Kec. Pakis, Kabupaten Malang, Jawa Timur, Indonesia</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="text-black dark:text-white shrink-0" size={20} />
              <span>0859-6158-0015</span>
            </li>
            {/* <li className="flex gap-3 items-center">
              <Mail className="text-black dark:text-white shrink-0" size={20} />
              <span>info@steelworksdummy.com</span>
            </li> */}
          </ul>
        </div>

        <div>
          <h4 className="text-black dark:text-white font-bold mb-6">Working Hours</h4>
          <ul className="flex flex-col gap-4 text-zinc-600 dark:text-zinc-500">
            <li>Monday – Saturday: 08:00 – 17:00</li>
            <li>Sunday: Closed</li>
            <li className="pt-4 text-sm text-zinc-400 dark:text-zinc-600 italic">
              *Tersedia untuk konsultasi dan survey di luar jam kerja.
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm">
        <p>© 2026 Andalass. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
