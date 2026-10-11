import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Krietiv Printz<br />
            <span className="text-indigo-600">Your Branding & Printing Partner</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            We specialize in screen printing, digital embroidery, custom apparel,
            promotional items, and full branding solutions for businesses,
            events, and individuals across Kenya.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Our Services
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50"
            >
              View Gallery
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            About Krietiv Printz
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Image
                src="/about.jpg"
                alt="Krietiv Printz team working"
                width={800}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-600">
                Located in Voi, Taita-Taveta County (80300) and serving Nairobi,
                Krietiv Printz has become a trusted name for high-quality
                printing and branding services. We combine traditional screen
                printing techniques with modern digital embroidery to deliver
                products that stand out.
              </p>
              <p className="text-gray-600">
                Our mission is to help businesses and individuals express their
                unique identity through vibrant, durable prints that leave a
                lasting impression.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Fast turnaround times</li>
                <li>Competitive pricing without compromering quality</li>
                <li>Custom designs tailored to your brand</li>
                <li>Nationwide delivery via trusted couriers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Krietiv Printz?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Craftsmanship</h3>
              <p className="text-sm text-gray-600 text-center">
                Every print is inspected for color accuracy and durability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
              <p className="text-sm text-gray-600 text-center">
                Most orders ship within 3-5 business days.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0-2c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2.895.895-2 2-2zm0 6c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Affordable Pricing</h3>
              <p className="text-sm text-gray-600 text-center">
                Transparent quotes with no hidden fees.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2-2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-sm text-gray-600 text-center">
                We work closely with you from concept to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-lg mb-8">
            Let's create something amazing together. Get a free quote today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100"
          >
            Get Started
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}