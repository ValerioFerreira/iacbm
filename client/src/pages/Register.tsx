import { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

/**
 * DESIGN NOTES:
 * - Formulário de cadastro/adesão com campos essenciais
 * - Validação de campos
 * - Feedback visual ao enviar
 * - Tipografia: Roboto para títulos, Open Sans para corpo
 */

interface FormData {
  fullName: string;
  militaryId: string;
  cpf: string;
  phone: string;
  address: string;
}

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    militaryId: '',
    cpf: '',
    phone: '',
    address: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.fullName ||
      !formData.militaryId ||
      !formData.cpf ||
      !formData.phone ||
      !formData.address
    ) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Dados do formulário:', formData);
      toast.success('Cadastro realizado com sucesso! Você receberá um email de confirmação.');
      setFormData({
        fullName: '',
        militaryId: '',
        cpf: '',
        phone: '',
        address: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />

      <main className="pt-[280px]">
        {/* Hero Section */}
        <section className="py-12 bg-[#0226db]">
          <div className="container text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Cadastro/Adesão</h1>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Preencha o formulário abaixo para se associar ao IACB e ter acesso a
              todos os nossos serviços
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container max-w-2xl">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-6">
                Informações Pessoais
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Digite seu nome completo"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#0226db] transition-colors"
                    required
                  />
                </div>

                {/* Military ID */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    RG Militar *
                  </label>
                  <input
                    type="text"
                    name="militaryId"
                    value={formData.militaryId}
                    onChange={handleChange}
                    placeholder="Digite seu RG Militar"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#0226db] transition-colors"
                    required
                  />
                </div>

                {/* CPF */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    CPF *
                  </label>
                  <input
                    type="text"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                    placeholder="Digite seu CPF (XXX.XXX.XXX-XX)"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#0226db] transition-colors"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Digite seu telefone (XX) XXXXX-XXXX"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#0226db] transition-colors"
                    required
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Endereço *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Digite seu endereço completo"
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#0226db] transition-colors resize-none"
                    required
                  />
                </div>

                {/* Terms */}
                <div className="bg-white p-4 rounded-lg border-l-4 border-[#f5e93d]">
                  <p className="text-sm text-gray-600">
                    Ao preencher este formulário, você concorda com os termos de
                    uso e política de privacidade do IACB. Seus dados serão
                    utilizados apenas para fins de associação e comunicação de
                    serviços.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <button
                    type="reset"
                    className="flex-1 bg-gray-300 text-black font-bold py-3 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Limpar
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-[#0226db] text-white font-bold py-3 rounded-lg hover:bg-[#bd1b0f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Cadastro'}
                  </button>
                </div>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-black mb-4">Dúvidas?</h3>
              <p className="text-gray-600 mb-4">
                Se você tiver dúvidas sobre o processo de cadastro, entre em
                contato conosco:
              </p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Telefone:</strong>{' '}
                  <a href="tel:+558132123456" className="text-[#0226db] hover:underline">
                    (81) 3212-3456
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:contato@iacbpe.org.br" className="text-[#0226db] hover:underline">
                    contato@iacbpe.org.br
                  </a>
                </p>
                <p>
                  <strong>Horário de Atendimento:</strong> Segunda a Sexta,
                  08:00 - 17:00
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
