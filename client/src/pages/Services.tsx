import { useState } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, Stethoscope, Dumbbell, Users, BookOpen, Shield, Clock, MapPin } from 'lucide-react';

/**
 * DESIGN NOTES:
 * - Página de serviços com filtro de busca
 * - Cards com detalhes: local, horários, profissional
 * - Botão "Agendar" que abre formulário
 * - Tipografia: Roboto para títulos, Open Sans para corpo
 */

interface Service {
  id: string;
  icon: React.ComponentType<any>;
  name: string;
  description: string;
  professional: string;
  location: string;
  hours: string;
  color: 'red' | 'yellow' | 'orange';
}

const services: Service[] = [
  {
    id: 'psy-001',
    icon: Heart,
    name: 'Psicologia',
    description: 'Atendimento psicológico especializado para militares e dependentes, focando em bem-estar mental e qualidade de vida.',
    professional: 'Dra. Maria Silva - Psicóloga Clínica',
    location: 'Sala 101 - Bloco A',
    hours: 'Segunda a Sexta: 08:00 - 18:00',
    color: 'red',
  },
  {
    id: 'dent-001',
    icon: Stethoscope,
    name: 'Odontologia',
    description: 'Serviços odontológicos completos incluindo limpeza, restauração, tratamento de canal e implantes.',
    professional: 'Dr. João Santos - Cirurgião Dentista',
    location: 'Consultório 201 - Bloco B',
    hours: 'Segunda a Quinta: 09:00 - 17:00',
    color: 'yellow',
  },
  {
    id: 'phys-001',
    icon: Dumbbell,
    name: 'Fisioterapia',
    description: 'Reabilitação, prevenção de lesões e programas de condicionamento físico para militares.',
    professional: 'Esp. Carlos Oliveira - Fisioterapeuta',
    location: 'Sala 301 - Bloco C',
    hours: 'Segunda a Sexta: 07:00 - 19:00',
    color: 'orange',
  },
  {
    id: 'social-001',
    icon: Users,
    name: 'Assistência Social',
    description: 'Orientação social, apoio familiar e programas de assistência para militares e dependentes.',
    professional: 'Assistente Social - Equipe IACB',
    location: 'Sala 102 - Bloco A',
    hours: 'Segunda a Sexta: 08:00 - 17:00',
    color: 'red',
  },
  {
    id: 'edu-001',
    icon: BookOpen,
    name: 'Educação e Capacitação',
    description: 'Programas de desenvolvimento profissional, cursos e palestras especializadas.',
    professional: 'Coordenação de Educação IACB',
    location: 'Auditório - Bloco D',
    hours: 'Conforme programação',
    color: 'yellow',
  },
  {
    id: 'other-001',
    icon: Shield,
    name: 'Outros Serviços',
    description: 'Diversos programas de apoio, bem-estar e benefícios para associados.',
    professional: 'Equipe IACB',
    location: 'Sede IACB',
    hours: 'Segunda a Sexta: 08:00 - 17:00',
    color: 'orange',
  },
];

const colorMap = {
  red: 'border-[#bd1b0f]',
  yellow: 'border-[#f5e93d]',
  orange: 'border-[#fa9a1b]',
};

const colorTextMap = {
  red: 'text-[#bd1b0f]',
  yellow: 'text-[#f5e93d]',
  orange: 'text-[#fa9a1b]',
};

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [formData, setFormData] = useState({
    associadoName: '',
    pacienteName: '',
    location: '',
    dateTime: '',
  });

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSchedule = (service: Service) => {
    setSelectedService(service);
    setShowScheduleForm(true);
    setFormData({
      ...formData,
      location: service.location,
    });
  };

  const handleSubmitSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Agendamento:', formData);
    alert('Agendamento solicitado com sucesso! Você receberá uma confirmação em breve.');
    setShowScheduleForm(false);
    setFormData({
      associadoName: '',
      pacienteName: '',
      location: '',
      dateTime: '',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />

      <main className="pt-[280px]">
        {/* Hero Section */}
        <section className="py-12 bg-[#0226db]">
          <div className="container text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Nossos Serviços</h1>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Conheça todos os serviços disponíveis para militares do CBMPE e seus
              dependentes
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container">
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="Buscar serviço..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#0226db] rounded-lg focus:outline-none focus:border-[#bd1b0f] transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container">
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.id}
                      className={`border-l-4 ${colorMap[service.color]} bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow`}
                    >
                      {/* Header with Icon */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`${colorTextMap[service.color]} flex-shrink-0`}>
                          <Icon size={40} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-black">
                            {service.name}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Details */}
                      <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                        <div className="flex items-start gap-3">
                          <span className="font-semibold text-black min-w-[100px]">
                            Profissional:
                          </span>
                          <span className="text-gray-600">{service.professional}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin size={20} className="text-[#fa9a1b] flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-black text-sm">Local</p>
                            <p className="text-gray-600 text-sm">{service.location}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock size={20} className="text-[#f5e93d] flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-black text-sm">Horários</p>
                            <p className="text-gray-600 text-sm">{service.hours}</p>
                          </div>
                        </div>
                      </div>

                      {/* Schedule Button */}
                      <button
                        onClick={() => handleSchedule(service)}
                        className="w-full bg-[#0226db] text-white font-bold py-3 rounded-lg hover:bg-[#bd1b0f] transition-colors"
                      >
                        Agendar
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  Nenhum serviço encontrado com os critérios de busca.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Schedule Modal */}
      {showScheduleForm && selectedService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8">
            <h2 className="text-2xl font-bold text-black mb-2">
              Agendar {selectedService.name}
            </h2>
            <p className="text-gray-600 mb-6">
              Preencha os dados abaixo para agendar seu atendimento
            </p>

            <form onSubmit={handleSubmitSchedule} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Nome do Associado
                </label>
                <input
                  type="text"
                  required
                  value={formData.associadoName}
                  onChange={(e) =>
                    setFormData({ ...formData, associadoName: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0226db]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Nome de quem irá (você mesmo ou dependente)
                </label>
                <input
                  type="text"
                  required
                  value={formData.pacienteName}
                  onChange={(e) =>
                    setFormData({ ...formData, pacienteName: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0226db]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Local
                </label>
                <input
                  type="text"
                  disabled
                  value={formData.location}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Data e Hora
                </label>
                <input
                  type="datetime-local"
                  required
                  value={formData.dateTime}
                  onChange={(e) =>
                    setFormData({ ...formData, dateTime: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0226db]"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowScheduleForm(false)}
                  className="flex-1 bg-gray-300 text-black font-bold py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#0226db] text-white font-bold py-2 rounded-lg hover:bg-[#bd1b0f] transition-colors"
                >
                  Confirmar Agendamento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
