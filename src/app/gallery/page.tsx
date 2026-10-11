import Image from 'next/image';
import { PhotoIcon, SparklesIcon } from '@heroicons/react/24/solid';

export const metadata = {
  title: 'Gallery | Krietiv Printz',
  description: 'View our work: screen printing, digital embroidery, custom apparel, promotional items, and branding projects.',
};

export default function Gallery() {
  const images = [
    { src: '/gallery1.jpg', alt: 'Screen printed t-shirts' },
    { src: '/gallery2.jpg', alt: 'Digital embroidery on caps' },
    { src: '/gallery3.jpg', alt: 'Custom hoodies' },
    { src: '/gallery4.jpg', alt: 'Promotional mugs' },
    { src: '/gallery5.jpg', alt: 'Branded tote bags' },
    { src: '/gallery6.jpg', alt: 'Event banners' },
    { src: '/gallery7.jpg', alt: 'Business cards' },
    { src: '/gallery8.jpg', alt: 'Custom aprons' },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">
          Our Work
          <SparklesIcon className="ml-2 h-5 w-5 text-indigo-600" />
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl">
          Browse through our recent projects showcasing quality screen printing,
          digital embroidery, and custom branding solutions.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {img.alt}
                </h3>
                <p className="text-sm text-gray-600">
                  Premium quality materials and vibrant colors.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700"
          >
            Discuss Your Project
            <PhotoIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}