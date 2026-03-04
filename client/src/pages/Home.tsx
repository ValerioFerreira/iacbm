import { useState } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';
import ServiceCard from '@/components/ServiceCard';
import NewsCard from '@/components/NewsCard';
import {
  Heart,
  Stethoscope,
  Dumbbell,
  Users,
  BookOpen,
  Shield,
} from 'lucide-react';

/**
 * DESIGN NOTES:
 * - Página principal com layout institucional moderno
 * - Seções alternadas: conteúdo e imagens
 * - Muito espaço em branco para respiro visual
 * - Transições suaves ao scroll
 * - Tipografia: Roboto para títulos, Open Sans para corpo
 */

const carouselImages = [
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/firefighters-rescue-01-NzuJ8EWq2tjQ2yMXT2VmhL.webp',
    alt: 'Bombeiros em operação de resgate',
    title: 'Resgate e Proteção',
    description: 'Equipes treinadas e preparadas para salvar vidas',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/firefighters-training-02-iVpW67EFaURWkxDivMitTu.webp',
    alt: 'Bombeiros em treinamento',
    title: 'Treinamento Contínuo',
    description: 'Capacitação permanente para excelência no atendimento',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/firefighters-community-03-G8u9ShDCLnXMy3zjUmJ8nK.webp',
    alt: 'Bombeiros com comunidade',
    title: 'Engajamento Comunitário',
    description: 'Conectando-nos com a população que servimos',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/firefighters-emergency-04-4RVn7A5ZS5mvXLPxUzR2JC.webp',
    alt: 'Bombeiros em emergência',
    title: 'Pronto para Agir',
    description: 'Resposta rápida e profissional em situações críticas',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/firefighters-team-05-SZq3XfpDkZNjhLZ6ZRrqWw.webp',
    alt: 'Equipe de bombeiros',
    title: 'Equipe Profissional',
    description: 'Dedicados ao serviço e à excelência',
  },
];

const services = [
  {
    icon: Heart,
    title: 'Psicologia',
    description: 'Atendimento psicológico especializado para militares e dependentes',
    color: 'red' as const,
  },
  {
    icon: Stethoscope,
    title: 'Odontologia',
    description: 'Serviços odontológicos completos e de qualidade',
    color: 'yellow' as const,
  },
  {
    icon: Dumbbell,
    title: 'Fisioterapia',
    description: 'Reabilitação e prevenção de lesões',
    color: 'orange' as const,
  },
  {
    icon: Users,
    title: 'Assistência Social',
    description: 'Suporte social e orientação para militares e famílias',
    color: 'red' as const,
  },
  {
    icon: BookOpen,
    title: 'Educação',
    description: 'Programas de capacitação e desenvolvimento profissional',
    color: 'yellow' as const,
  },
  {
    icon: Shield,
    title: 'Outros Serviços',
    description: 'Diversos programas de apoio e bem-estar',
    color: 'orange' as const,
  },
];

const news = [
  {
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/firefighters-rescue-01-NzuJ8EWq2tjQ2yMXT2VmhL.webp',
    title: 'Palestra sobre Saúde Mental para Bombeiros',
    date: '15 de março de 2025',
    location: 'Auditório do IACB',
    excerpt: 'Especialista em psicologia apresentará estratégias de bem-estar mental para profissionais de risco.',
    category: 'event' as const,
  },
  {
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/firefighters-training-02-iVpW67EFaURWkxDivMitTu.webp',
    title: 'Novo Programa de Fisioterapia Preventiva',
    date: '10 de março de 2025',
    location: 'Clínica do IACB',
    excerpt: 'Iniciativa visa prevenir lesões e melhorar a qualidade de vida dos militares.',
    category: 'news' as const,
  },
  {
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/firefighters-community-03-G8u9ShDCLnXMy3zjUmJ8nK.webp',
    title: 'Encontro de Integração com Dependentes',
    date: '22 de março de 2025',
    location: 'Parque da Cidade',
    excerpt: 'Evento comunitário para fortalecer os laços entre militares, famílias e o IACB.',
    category: 'event' as const,
  },
  {
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/firefighters-emergency-04-4RVn7A5ZS5mvXLPxUzR2JC.webp',
    title: 'Atualização de Protocolos de Atendimento',
    date: '05 de março de 2025',
    location: 'Sede do IACB',
    excerpt: 'Novos protocolos de atendimento odontológico entram em vigor para melhor qualidade de serviço.',
    category: 'news' as const,
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />

      {/* Main content starts after header and nav */}
      <main className="pt-[280px]">
        {/* Hero Section with Carousel and Services Sidebar */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Carousel - 2/3 width */}
              <div className="lg:col-span-2">
                <Carousel images={carouselImages} autoPlay interval={6000} />
              </div>

              {/* Services Sidebar - 1/3 width */}
              <div className="lg:col-span-1 bg-gray-50 rounded-lg p-6 h-fit">
                <h2 className="text-2xl font-bold text-black mb-4">
                  Nossos Serviços
                </h2>
                <div className="space-y-3 mb-6">
                  {services.slice(0, 3).map((service) => (
                    <div
                      key={service.title}
                      className="flex items-center gap-3 p-3 bg-white rounded-md hover:bg-blue-50 transition-colors cursor-pointer"
                    >
                      <service.icon
                        size={24}
                        className="text-[#0226db] flex-shrink-0"
                      />
                      <div>
                        <p className="font-semibold text-sm text-black">
                          {service.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/services">
                  <div className="inline-block w-full text-center bg-[#0226db] text-white font-bold py-3 rounded-lg hover:bg-[#bd1b0f] transition-colors cursor-pointer">
                    Encontre um serviço →
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-black mb-4">
                Bem-vindo ao IACB
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                O Instituto de Apoio ao Corpo de Bombeiros Militar de Pernambuco
                é uma instituição dedicada a oferecer assistência integral aos
                militares do CBMPE e seus dependentes. Através de serviços
                especializados em psicologia, odontologia, fisioterapia e outros
                programas, buscamos promover o bem-estar, a saúde e a qualidade
                de vida de nossos associados.
              </p>
              <Link href="/about">
                <div className="inline-block bg-[#0226db] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#bd1b0f] transition-colors cursor-pointer">
                  Saiba mais sobre o IACB
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-black mb-12 text-center">
              Serviços Disponíveis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  color={service.color}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/services">
                <div className="inline-block bg-[#bd1b0f] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0226db] transition-colors cursor-pointer">
                  Ver todos os serviços
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* News and Events Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-black mb-4 text-center">
              Notícias e Eventos
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Acompanhe as últimas notícias, eventos e atividades do IACB
            </p>

            {/* Search Filter */}
            <div className="mb-8 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Buscar notícias e eventos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#0226db] rounded-lg focus:outline-none focus:border-[#bd1b0f] transition-colors"
              />
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {news.map((item, index) => (
                <NewsCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  date={item.date}
                  location={item.location}
                  excerpt={item.excerpt}
                  category={item.category}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/blog">
                <div className="inline-block bg-[#0226db] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#bd1b0f] transition-colors cursor-pointer">
                  Ver mais notícias e eventos
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0226db]">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Quer se associar ao IACB?
            </h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Preencha nosso formulário de cadastro e adesão para ter acesso a
              todos os serviços e benefícios oferecidos pelo Instituto.
            </p>
            <Link href="/register">
              <div className="inline-block bg-[#f5e93d] text-black font-bold px-8 py-3 rounded-lg hover:bg-[#fa9a1b] transition-colors cursor-pointer">
                Fazer Cadastro
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
