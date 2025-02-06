import { useState } from 'react';
import { Menu, X, Github, Linkedin, Instagram, Languages, } from 'lucide-react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';

function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'fa'>('en');

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'fa' : 'en');
    document.documentElement.dir = lang === 'en' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang === 'en' ? 'fa' : 'en';
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-white relative overflow-x-hidden ${lang === 'fa' ? 'font-vazir-fa' : ''}`}>

  
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 to-slate-900 grid-background ">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-[500px] w-[500px] rounded-full bg-slate-800 blur-3xl animate-blob"></div>
          <div className="absolute h-[500px] w-[500px] rounded-full bg-slate-700 blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute h-[500px] w-[500px] rounded-full bg-slate-600 blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Language Toggle */}
        <button
          onClick={toggleLang}
          className="fixed top-4 left-4 z-50 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
          aria-label="Toggle Language"
        >
          <Languages size={24} />
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed top-4 right-4 z-50 p-2 bg-slate-800 rounded-full lg:hidden hover:bg-slate-700 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation */}
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} lang={lang} />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <Hero lang={lang} />
          <About lang={lang} />
          <Skills lang={lang} />
          <Portfolio lang={lang} />
          <Experience lang={lang} />
          <Contact lang={lang} />
        </main>

        {/* Footer */}
        <footer className="bg-slate-900/50 backdrop-blur-xs py-8 mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">

              <div className="flex gap-6">
                <a href="https://github.com/parsa-ai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/parsa-alavi-7b126a33b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="https://instagram.com/parsaalavi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110">
                  <Instagram size={24} />
                </a>
              </div>
              <div className="text-slate-400 text-sm">
                © 2024 Parsa Alavi. {lang === 'fa' ? 'تمامی حقوق محفوظ است.' : 'All rights reserved.'}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Main;