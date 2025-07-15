import React from 'react';
import { Mail, Phone, Linkedin, Instagram, Github } from 'lucide-react';
import FormP from './FormP';

interface ContactProps {
  lang: 'en' | 'fa';
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const content = {
    en: {
      title: 'Contact Me',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      contactInfo: 'Contact Information',
      socialMedia: 'Social Media'
    },
    fa: {
      title: 'تماس با من',
      name: 'نام',
      email: 'ایمیل',
      subject: 'موضوع',
      message: 'پیام',
      send: 'ارسال پیام',
      contactInfo: 'اطلاعات تماس',
      socialMedia: 'شبکه‌های اجتماعی'
    }
  };

  

  return (
    <section id="contact" className="py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 xTxt">{content[lang].title}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-Pslate-800/50 backdrop-blur-xs p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{content[lang].contactInfo}</h3>
              <div className="space-y-4">
                <a href="mailto:parsaalavi9@gmail.com" className="flex items-center gap-3 text-Pslate-400 hover:text-Pwhite transition-colors">
                  <Mail className="shrink-0" />
                  <span>Parsaalavi9@gmail.com</span>
                </a>
                <a href="tel:+989168432566" className="flex items-center gap-3 text-Pslate-400 hover:text-Pwhite transition-colors">
                  <Phone className="shrink-0" />
                  <span dir='ltr'>+98 916 843 2566</span>
                </a>
              </div>
            </div>

            <div className="bg-Pslate-800/50 backdrop-blur-xs p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{content[lang].socialMedia}</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/parsa-alavi-7b126a33b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="bg-Pslate-700/50 p-3 rounded-full text-Pslate-400 hover:text-Pwhite transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://instagram.com/parsaalavi.ir" target="_blank" rel="noopener noreferrer" className="bg-Pslate-700/50 p-3 rounded-full text-Pslate-400 hover:text-Pwhite transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://github.com/parsa-ai" target="_blank" rel="noopener noreferrer" className="bg-Pslate-700/50 p-3 rounded-full text-Pslate-400 hover:text-Pwhite transition-colors">
                <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <FormP lang={lang} ></FormP>
        </div>
      </div>
    </section>
  );
};

export default Contact;