import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Krietiv Printz | Branding & Printing Services',
  description: 'Krietiv Printz offers screen printing, digital embroidery, custom apparel, promotional items, and branding services in Voi, Taita-Taveta and Nairobi.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}