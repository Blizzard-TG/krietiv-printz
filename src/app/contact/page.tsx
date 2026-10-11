import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';

export const metadata = {
  title: 'Contact | Krietiv Printz',
  description: 'Get in touch with Krietiv Printz for a free quote on screen printing, digital embroidery, custom apparel, and more.',
};

export default function ContactPage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">
          Get in Touch
          <EnvelopeIcon className="ml-2 h-5 w-5 text-indigo-600" />
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl">
          Have a project in mind? Fill out the form below and we’ll respond
          within 24 hours with a free quote and recommendations.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPinIcon className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Visit Us</h3>
                <p className="text-sm text-gray-600">
                  Voi, Taita-Taveta County • 80300, Kenya<br />
                  Nairobi CBD, Kenya
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <PhoneIcon className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-sm text-gray-600">
                  <a href="tel:+254768748875" className="hover:underline">+254 768 748 875</a>{' '}
                  <br />
                  <a href="tel:+254700236767" className="hover:underline">+254 700 236 767</a>
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <EnvelopeIcon className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Email Us</h3>
                <p className="text-sm text-gray-600">
                  <a href="mailto:info@krietivprintz.co.ke" className="hover:underline">
                    info@krietivprintz.co.ke
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}