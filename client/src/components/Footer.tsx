import { Link } from 'wouter';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

/**
 * DESIGN NOTES:
 * - Footer em fundo azul #0226db
 * - Informações de contato: telefone, endereço, email
 * - Links para Quem Somos e FAQ
 * - Links para redes sociais (Instagram)
 * - Tipografia: Open Sans para corpo, Roboto para títulos
 * - Layout em grid com seções bem organizadas
 */

export default function Footer() {
  return (
    <footer className="bg-[#bd1b0f] text-white py-6 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-sm mb-2">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs">Telefone</p>
                  <a href="tel:+558132123456" className="hover:text-[#f5e93d] transition-colors">
                    (81) 3212-3456
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs">Email</p>
                  <a href="mailto:contato@iacbpe.org.br" className="hover:text-[#f5e93d] transition-colors">
                    contato@iacbpe.org.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs">Endereço</p>
                  <p className="text-xs">Rua dos Bombeiros, 123<br />Recife, PE 52000-000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm mb-2">Links Úteis</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/about">
                  <a className="hover:text-[#f5e93d] transition-colors">Quem Somos</a>
                </Link>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#f5e93d] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[#f5e93d] transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#f5e93d] transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-sm mb-2">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/iacbmpe/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5e93d] transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
            <p className="text-xs mt-2">
              Siga-nos nas redes sociais para acompanhar notícias e eventos do IACB.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 pt-4">
          <p className="text-center text-xs">
            © 2025 Instituto de Apoio ao Corpo de Bombeiros Militar de Pernambuco - IACB. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
