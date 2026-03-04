import { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { Calendar, MapPin } from 'lucide-react';

/**
 * DESIGN NOTES:
 * - Página de blog com notícias e eventos
 * - Filtro por categoria (Notícia/Evento)
 * - Busca por termo
 * - Cards em grid responsivo
 * - Tipografia: Roboto para títulos, Open Sans para corpo
 */

interface BlogPost {
  id: string;
  image: string;
  title: string;
  date: string;
  location?: string;
  excerpt: string;
  content: string;
  category: 'event' | 'news';
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/firefighters-rescue-01-NzuJ8EWq2tjQ2yMXT2VmhL.webp',
    title: 'Palestra sobre Saúde Mental para Bombeiros',
    date: '15 de março de 2025',
    location: 'Auditório do IACB',
    excerpt: 'Especialista em psicologia apresentará estratégias de bem-estar mental para profissionais de risco.',
    content: 'Conteúdo completo da palestra...',
    category: 'event',
  },
  {
    id: '2',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/firefighters-training-02-iVpW67EFaURWkxDivMitTu.webp',
    title: 'Novo Programa de Fisioterapia Preventiva',
    date: '10 de março de 2025',
    location: 'Clínica do IACB',
    excerpt: 'Iniciativa visa prevenir lesões e melhorar a qualidade de vida dos militares.',
    content: 'Conteúdo completo da notícia...',
    category: 'news',
  },
  {
    id: '3',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/firefighters-community-03-G8u9ShDCLnXMy3zjUmJ8nK.webp',
    title: 'Encontro de Integração com Dependentes',
    date: '22 de março de 2025',
    location: 'Parque da Cidade',
    excerpt: 'Evento comunitário para fortalecer os laços entre militares, famílias e o IACB.',
    content: 'Conteúdo completo do evento...',
    category: 'event',
  },
  {
    id: '4',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/firefighters-emergency-04-4RVn7A5ZS5mvXLPxUzR2JC.webp',
    title: 'Atualização de Protocolos de Atendimento',
    date: '05 de março de 2025',
    location: 'Sede do IACB',
    excerpt: 'Novos protocolos de atendimento odontológico entram em vigor para melhor qualidade de serviço.',
    content: 'Conteúdo completo da notícia...',
    category: 'news',
  },
  {
    id: '5',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/firefighters-team-05-SZq3XfpDkZNjhLZ6ZRrqWw.webp',
    title: 'Curso de Desenvolvimento Profissional',
    date: '18 de março de 2025',
    location: 'Sala de Treinamento',
    excerpt: 'Capacitação em liderança e gestão para oficiais do CBMPE.',
    content: 'Conteúdo completo do evento...',
    category: 'event',
  },
  {
    id: '6',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663378430313/S9jc3VJZ9Nc2xccQyVRx3e/firefighters-rescue-01-NzuJ8EWq2tjQ2yMXT2VmhL.webp',
    title: 'Benefícios da Odontologia Preventiva',
    date: '01 de março de 2025',
    location: 'Blog IACB',
    excerpt: 'Artigo sobre a importância da prevenção em saúde bucal para militares.',
    content: 'Conteúdo completo do artigo...',
    category: 'news',
  },
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'event' | 'news'>('all');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />

      <main className="pt-[280px]">
        {/* Hero Section */}
        <section className="py-12 bg-[#0226db]">
          <div className="container text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Notícias e Eventos
            </h1>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Acompanhe as últimas notícias, eventos e atividades do IACB
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Search */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Buscar
                </label>
                <input
                  type="text"
                  placeholder="Buscar notícias e eventos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#0226db] rounded-lg focus:outline-none focus:border-[#bd1b0f] transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Categoria
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-[#0226db] text-white'
                        : 'bg-white text-black border-2 border-[#0226db] hover:bg-gray-100'
                    }`}
                  >
                    Todos
                  </button>
                  <button
                    onClick={() => setSelectedCategory('event')}
                    className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
                      selectedCategory === 'event'
                        ? 'bg-[#bd1b0f] text-white'
                        : 'bg-white text-black border-2 border-[#bd1b0f] hover:bg-gray-100'
                    }`}
                  >
                    Eventos
                  </button>
                  <button
                    onClick={() => setSelectedCategory('news')}
                    className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
                      selectedCategory === 'news'
                        ? 'bg-[#f5e93d] text-black'
                        : 'bg-white text-black border-2 border-[#f5e93d] hover:bg-gray-100'
                    }`}
                  >
                    Notícias
                  </button>
                </div>
              </div>
            </div>

            {/* Results count */}
            <p className="text-gray-600">
              {filteredPosts.length} resultado{filteredPosts.length !== 1 ? 's' : ''} encontrado
              {filteredPosts.length !== 1 ? 's' : ''}
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <NewsCard
                    key={post.id}
                    image={post.image}
                    title={post.title}
                    date={post.date}
                    location={post.location}
                    excerpt={post.excerpt}
                    category={post.category}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  Nenhuma notícia ou evento encontrado com os critérios de busca.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
