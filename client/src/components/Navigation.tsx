import { useState, useEffect } from 'react';
import { Link } from 'wouter';

/**
 * DESIGN NOTES:
 * - Menu horizontal que acompanha a retração do header
 * - Background solid azul igual ao header
 * - Botões em vermelho #bd1b0f com texto branco
 * - Animação de hover: scale-up (1.05) e mudança de background
 * - Sempre visível, mesmo quando o header está retraído
 * - Tipografia: Open Sans para menu items
 * - Transição suave de 300ms
 */

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Quem Somos', href: '/about' },
  { label: 'Serviços', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Cadastro', href: '/register' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-40 shadow-md transition-all duration-300 ${
        isScrolled ? 'top-[72px]' : 'top-[192px]'
      }`}
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/firefighters-header-bg-FsqSQeEDNAGStEkEvyA4KW.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Transparent overlay to blend with header */}
      <div
        className="absolute inset-0"
        style={{
          background: 'transparent',
        }}
      />
      <div className="container relative z-10">
        <div className="flex justify-center gap-2 py-2 flex-wrap">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className="px-5 py-1.5 bg-[#bd1b0f] text-white font-semibold rounded-md
                  border-2 border-[#bd1b0f] transition-all duration-300
                  hover:scale-105 hover:bg-white hover:text-[#bd1b0f]
                  active:scale-95 text-sm"
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
