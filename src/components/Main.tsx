import { useState ,useEffect } from 'react';
import { Github, Linkedin, Instagram, Languages, Sun , Moon } from 'lucide-react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';

function Main() {
  const [lang, setLang] = useState<'en' | 'fa'>('en');

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'fa' : 'en');
    document.documentElement.dir = lang === 'en' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang === 'en' ? 'fa' : 'en';
  };

  return (
    <div className={`min-h-screen bg-Pslate-950 text-Pwhite relative overflow-x-hidden ${lang === 'fa' ? 'font-vazir-fa' : ''}`}>

  
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-Pslate-950 to-Pslate-900 grid-background ">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-[500px] w-[500px] rounded-full bg-Pslate-800 blur-3xl animate-blob"></div>
          <div className="absolute h-[500px] w-[500px] rounded-full bg-Pslate-700 blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute h-[500px] w-[500px] rounded-full bg-Pslate-600 blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Language Toggle */}
        <button
          onClick={toggleLang}
          className="fixed top-4 left-4 z-50 p-2 bg-Pslate-800 rounded-full hover:bg-Pslate-700 transition-colors hover:text-Pslate-50"
          aria-label="Toggle Language"
        >
          
          <Languages size={24} />
        </button>

        <button
           onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 z-50 p-2 bg-Pslate-800 rounded-full hover:bg-Pslate-700 hover:text-Pslate-50 transition-colors"
          aria-label="Toggle Language"
        >
          

{ darkMode ?  <Moon size={24} /> :<Sun size={24} />  } 
       </button>

        

        {/* Navigation */}
        <Navigation  lang={lang} />

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
        <footer className="bg-Pslate-900/50 backdrop-blur-xs py-8 mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">

              <div className="flex gap-6">
                <a href="https://github.com/parsa-ai" target="_blank" rel="noopener noreferrer" className="text-Pslate-400 hover:text-Pwhite transition-colors transform hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/parsa-alavi-7b126a33b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-Pslate-400 hover:text-Pwhite transition-colors transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="https://instagram.com/parsaalavi" target="_blank" rel="noopener noreferrer" className="text-Pslate-400 hover:text-Pwhite transition-colors transform hover:scale-110">
                  <Instagram size={24} />
                </a>
              </div>
              <div className="text-Pslate-400 text-sm">
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