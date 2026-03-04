import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#0226db] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-black mb-4">Página não encontrada</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/">
          <div className="inline-block bg-[#0226db] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#bd1b0f] transition-colors cursor-pointer">
            Voltar para a página inicial
          </div>
        </Link>
      </div>
    </div>
  );
}
