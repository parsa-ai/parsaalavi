import React from 'react';
import { Send, Mail, Phone, Linkedin, Instagram } from 'lucide-react';

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
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">{content[lang].title}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-xs p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{content[lang].contactInfo}</h3>
              <div className="space-y-4">
                <a href="mailto:parsaalavi9@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <Mail className="shrink-0" />
                  <span>Parsaalavi9@gmail.com</span>
                </a>
                <a href="tel:+989168432566" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <Phone className="shrink-0" />
                  <span dir='ltr'>+98 916 843 2566</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xs p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{content[lang].socialMedia}</h3>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/parsaalavi" target="_blank" rel="noopener noreferrer" className="bg-slate-700/50 p-3 rounded-full text-slate-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://instagram.com/parsaalavi.ir" target="_blank" rel="noopener noreferrer" className="bg-slate-700/50 p-3 rounded-full text-slate-400 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-slate-800/50 backdrop-blur-xs p-6 rounded-xl space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {content[lang].name}
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 focus:outline-hidden focus:border-white transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {content[lang].email}
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 focus:outline-hidden focus:border-white transition-colors"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                {content[lang].subject}
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 focus:outline-hidden focus:border-white transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {content[lang].message}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 focus:outline-hidden focus:border-white transition-colors"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full button-hover inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-slate-200 transition-colors"
            >
              {content[lang].send}
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;