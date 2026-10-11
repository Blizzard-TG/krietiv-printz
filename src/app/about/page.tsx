import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            About Krietiv Printz
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Image
                src="/about.jpg"
                alt="Krietiv Printz team"
                width={800}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-600">
                Krietiv Printz is a premier printing and branding company based
                in Voi, Taita-Taveta County, serving clients across Kenya,
                including Nairobi. We specialize in screen printing, digital
                embroidery, custom apparel, promotional items, and full
                branding solutions.
              </p>
              <p className="text-gray-600">
                Founded with a passion for quality and creativity, we have
                grown to become a trusted partner for businesses, events,
                NGOs, and individuals who want to make a lasting impression.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Values
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Quality Craftsmanship</li>
                <li>Innovation & Technology</li>
                <li>Customer-Centric Service</li>
                <li>Timely Delivery</li>
                <li>Affordable Pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h2>
          <div className="space-y-8">
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Established</h3>
                <p className="text-gray-600">
                  Krietiv Printz started as a small screen-printing shop in
                  Voi, serving local businesses and schools.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Expanded Services</h3>
                <p className="text-gray-600">
                  Added digital embroidery and promotional items to meet
                  growing client needs.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Nairobi Presence</h3>
                <p className="text-gray-600">
                  Established a service hub in Nairobi CBD to serve clients
                  nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}