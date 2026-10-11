export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Krietiv Printz</h3>
            <p className="text-sm">
              Screen printing, digital embroidery, custom apparel, promotional
              items, and branding services.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2">Locations</h4>
            <p className="text-sm space-y-1">
              Voi, Taita-Taveta County • 80300, Kenya<br />
              Nairobi CBD, Kenya
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2">Contact</h4>
            <p className="text-sm space-y-1">
              Phone: <a href="tel:+254768748875" className="hover:underline">+254 768 748 875</a>{' '}
              <br />
              Phone: <a href="tel:+254700236767" className="hover:underline">+254 700 236 767</a>{' '}
              <br />
              WhatsApp: <a href="https://wa.me/254768748875" target="_blank" rel="noopener noreferrer" className="hover:underline">+254 768 748 875</a>
            </p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-sm">
          &copy; {new Date().getFullYear()} Krietiv Printz. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}