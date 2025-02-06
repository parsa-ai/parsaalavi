import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import ILang from "./ILang";
import ai from "../assets/ai-lab.webp";
import  asgari from "../assets/asgari.webp";
import park from "../assets/park.webp";
import store from "../assets/parsaStore.webp";
import sepan from "../assets/sepan.webp";
import todo from "../assets/Todo.webp";
import makanbama from "../assets/makanbama.webp";

const Portfolio: React.FC<ILang> = ({ lang }) => {
  const content = {
    en: {
      title: 'Portfolio',
      viewProject: 'View Project',
      projects: [
        {
          title: "Khuzestan Science and Technology Park",
          description: "Designed part of the site theme using PHP and Tailwind.",
          image: park,
          technologies: ["PHP", "WordPress", "Tailwind CSS"],
          link: "https://khstp.ir/"
        },
        {
          title: "Nima Asgari",
          description: "Developed a personal website using Next.js and Tailwind.",
          image: asgari,
          technologies: ["Next.js", "Tailwind"],
          link: "https://parsa-ai.github.io/Asgari/"
        },
        {
          title: "AI Articles",
          description: "Implemented a university project on AI using React, Tailwind, and TypeScript.",
          image: ai,
          technologies: ["React", "TypeScript", "Tailwind CSS"],
          link: "https://ai-lab.liara.run/"
        },
        {
          title: "Makan Ba Ma",
          description: "An online hotel booking website.",
          image: makanbama,
          technologies: ["JavaScript", "HTML", "CSS"],
          link: "https://parsa-ai.github.io/makanbama/"
        },
        {
          title: "Sepan Vet",
          description: "Designed an e-commerce website using WordPress and Elementor.",
          image: sepan,
          technologies: ["WordPress", "Elementor"],
          link: "https://sepanvet.com/"
        },
        {
          title: "Parsa Store",
          description: "Developed a website for API practice.",
          image: store,
          technologies: ["JavaScript", "HTML", "CSS"],
          link: "https://parsa-ai.github.io/ParsaStore/"
        },
        {
          title: "Todo List",
          description: "Created a simple app for task management.",
          image: todo,
          technologies: ["JavaScript", "HTML", "CSS"],
          link: "https://parsa-ai.github.io/TodoPrj/"
        }
        
      ]
    },
    fa: {
      title: 'نمونه کارها',
      viewProject: 'مشاهده پروژه',
      projects: [
        {
          title: 'پارک علم و فناوری خوزستان',
          description: 'طراحی بخشی از تم سایت با استفاده از Php و Tailwind ',
          image: park ,
          technologies: ['Php', 'Wordpress', 'Tailwind CSS'],
          link: 'https://khstp.ir/'
        },

        {
          title: 'نیما عسگری',
          description: 'ساخت سایت شخصی با NextJs , Tailwind',
          image: asgari,
          technologies: ['NextJs', 'Tailwind'],
          link: 'https://parsa-ai.github.io/Asgari/'
        },
        {
          title: 'مقالات هوش مصنوعی',
          description: 'پیاده سازی یک پروژه دانشگاهی با react و Tailwind و ts با موضوع هوش مصنوعی',
          image: ai,
          technologies: ['React', 'TypeScript', 'Tailwind CSS'],
          link: 'https://ai-lab.liara.run/'
        },
        {
          title: 'مکان با ما',
          description: 'سایت رزرو هتل انلاین',
          image: makanbama,
          technologies: ['Js', 'Html', 'CSS'],
          link: 'https://parsa-ai.github.io/makanbama/'
        },
        
        {
          title: 'سپن وت',
          description: 'طراحی سایت فروشگاهی با وردپرس و المنتور',
          image: sepan,
          technologies: ['Wordpress', 'Elementor'],
          link: 'https://sepanvet.com/'
        },
        {
          title: 'پارسا استور',
          description: 'پیاده سازی یک سایت  برای تمرین api ها',
          image: store,
          technologies: ['Js', 'Html', 'CSS'],
          link: 'https://parsa-ai.github.io/ParsaStore/'
        },
        {
          title: 'لیست کار ها',
          description: 'ساخت یک اپ ساده برای ذخیره کار ها ',
          image: todo,
          technologies: ['Js', 'Html', 'CSS'],
          link: 'https://parsa-ai.github.io/TodoPrj/'
        },
      ]
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % content[lang].projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + content[lang].projects.length) % content[lang].projects.length);
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{content[lang].title}</h2>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: lang === 'fa'
                  ? `translateX(${currentIndex * 100}%)`  // تغییر جهت در نسخه فارسی
                  : `translateX(-${currentIndex * 100}%)`
              }}
            >
              {content[lang].projects.map((project, index) => (
                <div key={index} className="w-full shrink-0">
                  <a className="relative group" href={project.link} target='_blank'>
                    <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" />
                    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8">
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-slate-300 text-center mb-4">{project.description}</p>
                      <div className="flex gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="bg-slate-700/50 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a target='_blank' href={project.link} className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-2 rounded-full hover:bg-slate-200 transition-colors">
                        {content[lang].viewProject}
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={lang === 'fa' ? nextProject : prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 p-2 rounded-full hover:bg-slate-200 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={lang === 'fa' ? prevProject : nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 p-2 rounded-full hover:bg-slate-200 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
