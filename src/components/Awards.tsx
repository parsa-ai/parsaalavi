import React from 'react';
import ILang from './ILang';

const Awards: React.FC<ILang> = ({ lang }) => {
  const content = {
    en: {
      title: "Awards",
      awards: [
        {
          period: "2024 - Present",
          title: "Programming Instructor",
          company: "Dison",
          description: ""
        },
        {
          period: "2024 - Present",
          title: "Software Engineer",
          company: "FARAZ E-COMMERCE",
          description: "Developing custom WordPress themes and plugins for various clients using PHP and React.js."
        },
        
        {
          period: "2024 - 2024",
          title: "Angular Internship",
          company: "Mohaymen",
          description: "Learning and working on various front-end projects, especially Angular, under the supervision of the Mahimen team in code star."
        },
        {
          period: "2018 - 2018",
          title: "Front-End Internship",
          company: "Arsel Web",
          description: "Learning basic front-end concepts and working on projects as part of the Arsel Web team."
        }
        
      ]
    },
    fa: {
      title: "جوایز",
      awards: [
        {
          period: '۱۴۰۳ - اکنون',
          title: 'مدرس برنامه نویسی',
          company: 'دیسون',
          description: 'تدریس مباحث مختلف برنامه نویسی از جمله مقدمات فرانت اند ، ری اکت ، پایتون و ...'
        },
      
      ]
    }
  };

  return (
    <section id="experience" className={`py-20 ${lang === 'fa' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{content[lang].title}</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-Pslate-800"></div>

          {/* Awards Items */}
          <div className="space-y-12">
            {content[lang].awards.map((exp, index) => (
              <div key={index} className="relative pl-8">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-2 h-2 bg-Pwhite rounded-full -translate-x-1/2"></div>

                {/* Content */}
                <div className="bg-Pslate-800/50 backdrop-blur-xs p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-Pslate-400 mb-2">{exp.company}</p>
                  <p className="text-Pslate-300">{exp.description}</p>
                  <span className="inline-block bg-Pslate-700 text-sm px-3 py-1 rounded-full mb-4 absolute bottom-0 left-3.5">
                     مدرک
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
