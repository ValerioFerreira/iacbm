import { Calendar, MapPin } from 'lucide-react';

/**
 * DESIGN NOTES:
 * - Card com imagem no topo
 * - Badge com data e local em cores de destaque
 * - Hover effect: elevação leve e mudança de shadow
 * - Tipografia: Roboto para título, Open Sans para corpo
 * - Transição suave de 300ms
 */

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  location?: string;
  excerpt: string;
  category?: 'event' | 'news';
}

export default function NewsCard({
  image,
  title,
  date,
  location,
  excerpt,
  category = 'news',
}: NewsCardProps) {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md
        hover:shadow-xl hover:scale-102 transition-all duration-300
        cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
              category === 'event'
                ? 'bg-[#bd1b0f]'
                : 'bg-[#0226db]'
            }`}
          >
            {category === 'event' ? 'Evento' : 'Notícia'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-black mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Date and Location */}
        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={16} className="text-[#f5e93d]" />
            <span>{date}</span>
          </div>
          {location && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin size={16} className="text-[#fa9a1b]" />
              <span>{location}</span>
            </div>
          )}
        </div>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{excerpt}</p>

        {/* Read More Link */}
        <a
          href="#"
          className="inline-block text-[#0226db] font-semibold text-sm
            hover:text-[#bd1b0f] transition-colors"
        >
          Leia mais →
        </a>
      </div>
    </div>
  );
}
