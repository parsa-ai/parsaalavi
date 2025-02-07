import React from 'react';
import ILang from './ILang';

const Skills: React.FC<ILang> = ({ lang }) => {
  const content = {
    en: {
      title: 'Skills',
      technicalTitle: 'Technical Skills',
      softTitle: 'Soft Skills',
      technicalSkills: [
        { name: 'React js', level: 'Advanced', percentage: 90 },
        { name: 'Angular', level: 'Intermediate', percentage: 75 },
        { name: 'Next.js', level: 'Intermediate', percentage: 60 },
        { name: 'Php (WordPress)', level: 'Advanced', percentage: 85 },
        { name: 'Python', level: 'Advanced', percentage: 90 },
      ],
      softSkills: [
        'Creativity',
        'Time Management',
        'Teamwork',
        'Problem Solving',
        'Communication',
        'Leadership',
      ],
    },
    fa: {
      title: 'مهارت‌ها',
      technicalTitle: 'مهارت‌های فنی',
      softTitle: 'مهارت‌های نرم',
      technicalSkills: [
        { name: 'React js', level: 'پیشرفته', percentage: 90 },
        { name: 'Angular', level: 'متوسط', percentage: 75 },
        { name: 'Next.js', level: 'متوسط', percentage: 60 },
        { name: 'Php (WordPress)', level: 'پیشرفته', percentage: 85 },
        { name: 'Python', level: 'پیشرفته', percentage: 90 },
      ],
      softSkills: [
        'خلاقیت',
        'مدیریت زمان',
        'کار تیمی',
        'حل مسئله',
        'ارتباطات',
        'یادگیری سریع',
      ],
    },
  };

  return (
    <section id="skills" className={`py-20 ${lang === 'fa' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{content[lang].title}</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6">{content[lang].technicalTitle}</h3>
            <div className="space-y-6">
              {content[lang].technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span className="text-Pslate-400">{skill.level}</span>
                  </div>
                  <div className="h-2 bg-Pslate-800 rounded-full">
                    <div
                      className="h-full bg-Pwhite rounded-full transition-all duration-500"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6">{content[lang].softTitle}</h3>
            <div className="grid grid-cols-2 gap-4">
              {content[lang].softSkills.map((skill) => (
                <div
                  key={skill}
                  className="bg-Pslate-800/50 backdrop-blur-xs p-4 rounded-xl text-center hover:bg-Pslate-700/50 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
