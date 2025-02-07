import React from 'react';
import { Home, User, Code2, Briefcase, Mail } from 'lucide-react';
import { useEffect, useState } from "react";
interface NavigationProps {
  lang: 'en' | 'fa';
}

const Navigation: React.FC<NavigationProps> = ({  lang }) => {
  const menuItems = [
    { icon: <Home size={20} />, label: lang === 'en' ? 'Home' : 'خانه', href: '#home' },
    { icon: <User size={20} />, label: lang === 'en' ? 'About' : 'درباره من', href: '#about' },
    { icon: <Code2 size={20} />, label: lang === 'en' ? 'Skills' : 'مهارت‌ها', href: '#skills' },
    { icon: <Briefcase size={20} />, label: lang === 'en' ? 'Portfolio' : 'نمونه کارها', href: '#portfolio' },
    { icon: <Mail size={20} />, label: lang === 'en' ? 'Contact' : 'تماس', href: '#contact' },
  ];


  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setIsVisible(false); // وقتی صفحه بالای صفحه است مخفی بماند
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // وقتی به بالا اسکرول شود، نمایش داده شود
      } else {
        setIsVisible(false); // وقتی به پایین اسکرول شود، مخفی شود
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
      {/* Desktop Navigation */}
      <nav className= {`hidden lg:block fixed ${lang ==='en' ? 'left-8' : 'right-8' } top-1/2 -translate-y-1/2 z-50`}>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center group"
              >
                <span className="bg-Pslate-800/50 backdrop-blur-xs p-3 rounded-full text-Pslate-400 group-hover:text-Pwhite transition-colors">
                  {item.icon}
                </span>
                <span className={`opacity-0 group-hover:opacity-100 absolute ${lang ==='en' ? 'left-16' : 'right-16' } bg-Pslate-800/50 backdrop-blur-xs px-4 py-2 rounded-full text-sm transition-opacity duration-200`}>
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav
      className={`lg:hidden fixed px-4 bottom-6 left-0 right-0 z-50 flex justify-center items-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-24"
      }`}
    >
      <ul className="flex w-full justify-around py-4 rounded-2xl bg-Pslate-900/95 backdrop-blur-xs">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="flex flex-col items-center text-Pslate-400 hover:text-Pwhite transition-colors"
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </>
  );
};

export default Navigation;