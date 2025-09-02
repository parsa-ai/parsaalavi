import React from 'react';
import ILang from './ILang';
import parsaPhoto from '../assets/parsa.webp'
const About: React.FC<ILang> = ({ lang }) => {
  const content = {
    en: {
      title: 'About Me',
      description1: `Hi! I'm Parsa, an 20-year-old front-end developer with 3 years of experience in creating beautiful and functional web experiences. Currently studying Computer Engineering at Chamran University, I combine my academic knowledge with practical expertise in React, Next.js, Angular and WordPress.`,
      description2: `I'm passionate about learning new technologies and sharing knowledge with others. My experience includes working on various projects, from small business websites to complex web applications. I believe in the power of teamwork and continuous improvement.`,
      age: 'Age:',
      photoClass:true,
      education: 'Education:',
      university: 'University:',
      experience: 'Experience:',
      values: {
        age: '20',
        education: 'Computer Engineering',
        university: 'Chamran University',
        experience: '3 Years',
      },
      // profileText: 'Parsa Alavi'
    },
    fa: {
      title: 'درباره من',
      description1: `سلام! من پارسا هستم، یک توسعه‌دهنده فرانت‌اند ۲۰ ساله با ۳ سال تجربه در ایجاد صفحات وب و توسعه فرانت اند . در حال حاضر در دانشگاه چمران مهندسی کامپیوتر می‌خوانم و دانش آکادمیک خود را با تخصص عملی در  ری‌اکت، انگولار، نکست.جی‌اس و وردپرس ترکیب می‌کنم.`,
      description2: `من به یادگیری فناوری‌های جدید و اشتراک‌گذاری دانش با دیگران علاقه‌مندم. تجربه من شامل کار بر روی پروژه‌های مختلف، از وب‌سایت‌های کسب‌وکار کوچک تا برنامه‌های وب پیچیده است. من به قدرت کار تیمی و بهبود مستمر اعتقاد دارم.`,
      age: 'سن:',
      photoClass:false,
      education: 'تحصیلات:',
      university: 'دانشگاه:',
      experience: 'تجربه:',
      values: {
        age: '۲۰',
        education: 'مهندسی کامپیوتر',
        university: 'دانشگاه چمران',
        experience: '۳ سال'
      },
      // profileText: 'پارسا علوی'
    }
  };

  const NewLang = content[lang] || content.en;

  return (
    <section id="about" className="py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 xTxt">{NewLang.title}</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative group rounded-full  ">
            <img
              src={parsaPhoto}
              alt="Parsa Alavi"
              className={`w-full object-cover  rounded-3xl bg-Pslate-800/50 aspect-square  ${NewLang.photoClass ? 'rotate-y-[180deg]' : ''}`}
            />
            {/* <div className="absolute inset-0 bg-Pslate-900/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
              <p className="text-sm text-center px-4">{NewLang.profileText}</p>
            </div> */}
          </div>
          <div className="space-y-4">
            <p className="text-Pslate-400 text-justify">{NewLang.description1}</p>
            <p className="text-Pslate-400 text-justify">{NewLang.description2}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-Pslate-400">{NewLang.age}</p>
                <p className="font-medium">{NewLang.values.age}</p>
              </div>
              <div>
                <p className="text-Pslate-400">{NewLang.education}</p>
                <p className="font-medium">{NewLang.values.education}</p>
              </div>
              <div>
                <p className="text-Pslate-400">{NewLang.university}</p>
                <p className="font-medium">{NewLang.values.university}</p>
              </div>
              <div>
                <p className="text-Pslate-400">{NewLang.experience}</p>
                <p className="font-medium">{NewLang.values.experience}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
