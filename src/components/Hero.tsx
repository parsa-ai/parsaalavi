import React from 'react';
import { ChevronRight , ArrowDown} from 'lucide-react';
import  ILang  from "./ILang";


const Hero: React.FC<ILang> = ({ lang }) => {
  const content = {
    en: {
      greeting: "Hello, I'm",
      name: "Parsa Alavi",
      title: "React & Next Developer",
      viewWork: "Download Resume",
      contact: "Contact Me"
    },
    fa: {
      greeting: "سلام، من",
      name: "پارسا علوی هستم",
      title: "توسعه‌دهنده ری اکت و نکست",
      viewWork: "دانلود رزومه",
      contact: "تماس با من"
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-10 relative">
      <div className="text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-Pslate-400 text-5xl">{content[lang].greeting}</span>
          <br />
          <span className="bg-linear-to-r from-Pwhite to-Pslate-400 bg-clip-text text-transparent hover-lift">
            {content[lang].name}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-Pslate-400 mb-8 animate-slide-in" style={{ animationDelay: '0.2s' }}>
          {content[lang].title}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <a
            href={'/parsaalavi.pdf'}
            target="_blank"
            download
            className="noise button-hover inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-700 text-white  px-6 py-3  rounded-full font-medium  transition-colors"
          >
            {content[lang].viewWork}
            <ChevronRight size={20} className={lang === 'fa' ? 'rotate-180' : ''} />
          </a>
          <a
            href="#contact"
            className="button-hover inline-flex items-center justify-center gap-2 bg-Pslate-800 text-Pwhite px-6 py-3 rounded-full font-medium hover:bg-Pslate-700 transition-colors"
          >
            {content[lang].contact}
            <ChevronRight size={20} className={lang === 'fa' ? 'rotate-180' : ''} />
          </a>
          
        </div>
        

      </div>
        <a href='#about' className='downbtn'>
          <ArrowDown size={30} ></ArrowDown>
        </a>
    </section>
  );
};

export default Hero;