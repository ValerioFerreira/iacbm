import { LucideIcon } from 'lucide-react';

/**
 * DESIGN NOTES:
 * - Card com sombra sutil para criar profundidade
 * - Hover effect: elevação leve (scale 1.02) e mudança de shadow
 * - Ícone em cor de destaque (vermelho #bd1b0f ou amarelo #f5e93d)
 * - Tipografia: Roboto para título, Open Sans para corpo
 * - Transição suave de 300ms
 */

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: 'red' | 'yellow' | 'orange';
}

const colorMap = {
  red: 'text-[#bd1b0f]',
  yellow: 'text-[#f5e93d]',
  orange: 'text-[#fa9a1b]',
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  color = 'red',
}: ServiceCardProps) {
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg p-6 shadow-md
        hover:shadow-xl hover:scale-102 transition-all duration-300
        cursor-pointer"
    >
      <div className={`${colorMap[color]} mb-4`}>
        <Icon size={40} />
      </div>
      <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
