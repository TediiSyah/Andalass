
import React from 'react';
import { Menu, X, Hammer, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled, isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-slide-down ${isScrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-black dark:bg-white rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12 duration-300">
            <Hammer className="text-white dark:text-black w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-black dark:text-white">
            Andalass <span className="text-zinc-500 dark:text-zinc-400">Steelworks</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all group-hover:w-full"></span>
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all hover:scale-110 active:scale-90"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a 
            href="#contact"
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10 dark:shadow-white/10"
          >
            Get Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className="text-zinc-600 dark:text-zinc-400">
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button className="text-black dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-4 shadow-xl animate-fade-in">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-bold mt-2 text-center" onClick={() => setIsOpen(false)}>
            Get Consultation
          </a>
        </div>
      )}
    </nav>
  );
};
