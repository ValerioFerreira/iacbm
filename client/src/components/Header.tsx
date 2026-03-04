import { useState, useEffect } from 'react';

/**
 * DESIGN NOTES:
 * - Header moderno com imagem de fundo (bombeiros em ação)
 * - Fade do azul para transparente sobre a imagem
 * - Logo circular com fundo branco
 * - Título em Saira Stencil One
 * - Animação de scroll que reduz o header
 * - Transição suave de 300ms
 */

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-6'
      }`}
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/firefighters-header-bg-FsqSQeEDNAGStEkEvyA4KW.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Gradient Overlay - Fade from blue to transparent */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(2, 38, 219, 0.85) 0%, rgba(2, 38, 219, 0.7) 50%, rgba(2, 38, 219, 0.5) 100%)',
          opacity: isScrolled ? 0.95 : 0.8,
        }}
      />

      {/* Content */}
      <div className="container flex flex-col items-center relative z-10">
        {/* Logo Container - Circular with white background */}
        <div
          className={`transition-all duration-300 flex items-center justify-center rounded-full bg-white shadow-lg ${
            isScrolled ? 'w-14 h-14' : 'w-24 h-24'
          }`}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/iacb-logo-new_1ab557c4.png"
            alt="IACB Logo"
            className="w-full h-full object-contain p-1"
          />
        </div>

        {/* Institute Title */}
        <div
          className={`text-center transition-all duration-300 overflow-hidden ${
            isScrolled ? 'max-h-0 opacity-0' : 'max-h-32 opacity-100'
          }`}
        >
          <h1
            className="text-white font-bold leading-tight mt-3 drop-shadow-lg"
            style={{
              fontFamily: '"Saira Stencil One", sans-serif',
              fontSize: isScrolled ? '0px' : '1.875rem',
              letterSpacing: '0.05em',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            INSTITUTO DE APOIO AO CORPO DE BOMBEIROS MILITAR DE PERNAMBUCO
          </h1>
        </div>
      </div>
    </header>
  );
}
