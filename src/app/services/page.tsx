import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            Our Services
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service Card */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 6c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Screen Printing</h3>
              <p className="text-gray-600">
                High-quality screen printing on apparel, bags, and promotional
                items. Ideal for bulk orders with vibrant, long-lasting colors.
              </p>
              <Link href="/contact">
                <span className="mt-4 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800">
                  Get a Quote
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10H6a2 2 0 01-2 2v2a2 2 0 012 2h2"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Digital Embroidery</h3>
              <p className="text-gray-600">
                Precise, durable embroidery on caps, jackets, shirts, and more.
                Perfect for logos and detailed designs.
              </p>
              <Link href="/contact">
                <span className="mt-4 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800">
                  Get a Quote
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M5 18h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom Apparel</h3>
              <p className="text-gray-600">
                T-shirts, hoodies, polos, and more—fully customizable with
                your designs, colors, and sizes.
              </p>
              <Link href="/contact">
                <span className="mt-4 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800">
                  Get a Quote
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Promotional Items</h3>
              <p className="text-gray-600">
                Pens, mugs, bags, and other branded merchandise to boost
                your marketing efforts.
              </p>
              <Link href="/contact">
                <span className="mt-4 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800">
                  Get a Quote
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Branding & Design</h3>
              <p className="text-gray-600">
                Full branding packages: logos, business cards, flyers, and
                social media kits.
              </p>
              <Link href="/contact">
                <span className="mt-4 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800">
                  Get a Quote
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Event & Campaign Printing</h3>
              <p className="text-gray-600">
                T-shirts, banners, and materials for conferences, weddings,
                and promotional campaigns.
              </p>
              <Link href="/contact">
                <span className="mt-4 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800">
                  Get a Quote
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Helper component for arrow
function ArrowRightIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7 7m0 0l7-7m-7 7h12" />
    </svg>
  );
}