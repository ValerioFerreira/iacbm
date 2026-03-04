import { Link } from 'wouter';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * DESIGN NOTES:
 * - Página institucional com layout limpo e profissional
 * - Seções bem definidas: Missão, Visão, Valores
 * - Muito espaço em branco para leitura confortável
 * - Tipografia: Roboto para títulos, Open Sans para corpo
 */

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />

      <main className="pt-[280px]">
        {/* Hero Section */}
        <section className="py-12 bg-[#0226db]">
          <div className="container text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Quem Somos</h1>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Conheça a história e a missão do Instituto de Apoio ao Corpo de
              Bombeiros Militar de Pernambuco
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container max-w-3xl">
            {/* About Text */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                Sobre o IACB
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                O <strong>Instituto de Apoio ao Corpo de Bombeiros Militar de
                Pernambuco – IACB</strong> é uma pessoa jurídica de direito
                privado, criada em 15 de abril de 2025, constituída sob a forma
                de associação civil, sem fins lucrativos e/ou econômicos,
                apartidária, com autonomia administrativa e financeira.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fundada pela união de pessoas interessadas em apoiar as
                atividades do Corpo de Bombeiros Militar, o IACB promove ações
                voltadas para a formação, capacitação e valorização dos
                bombeiros, visando a melhoria da segurança e do atendimento à
                população, promovendo a prevenção de incêndios e desastres.
              </p>
            </div>

            {/* Mission, Vision, Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Mission */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0226db]">
                <h3 className="text-xl font-bold text-black mb-3">Missão</h3>
                <p className="text-gray-700 leading-relaxed">
                  Oferecer assistência integral aos militares do Corpo de
                  Bombeiros Militar de Pernambuco e seus dependentes, através
                  de serviços especializados que promovam saúde, bem-estar e
                  qualidade de vida.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#bd1b0f]">
                <h3 className="text-xl font-bold text-black mb-3">Visão</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ser reconhecido como um instituto de excelência no apoio e
                  assistência aos profissionais de segurança pública,
                  contribuindo para uma sociedade mais segura e protegida.
                </p>
              </div>

              {/* Values */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f5e93d]">
                <h3 className="text-xl font-bold text-black mb-3">Valores</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Integridade e transparência</li>
                  <li>• Compromisso com a excelência</li>
                  <li>• Respeito e dignidade</li>
                  <li>• Solidariedade e apoio mútuo</li>
                </ul>
              </div>
            </div>

            {/* Services Offered */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                Serviços Oferecidos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                O IACB disponibiliza uma ampla gama de serviços especializados
                para atender às necessidades de seus associados:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-6 h-6 bg-[#0226db] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Psicologia</h4>
                    <p className="text-sm text-gray-600">
                      Atendimento psicológico especializado
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-6 h-6 bg-[#0226db] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Odontologia</h4>
                    <p className="text-sm text-gray-600">
                      Serviços odontológicos completos
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-6 h-6 bg-[#0226db] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Fisioterapia</h4>
                    <p className="text-sm text-gray-600">
                      Reabilitação e prevenção de lesões
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-6 h-6 bg-[#0226db] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Assistência Social</h4>
                    <p className="text-sm text-gray-600">
                      Suporte social e orientação
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                Quer fazer parte do IACB?
              </h3>
              <p className="text-gray-600 mb-6">
                Associe-se agora e tenha acesso a todos os nossos serviços e
                benefícios.
              </p>
              <Link href="/register">
                <div className="inline-block bg-[#0226db] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#bd1b0f] transition-colors cursor-pointer">
                  Fazer Cadastro
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
