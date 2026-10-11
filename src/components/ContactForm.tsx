'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  service: z.enum([
    'screen-printing',
    'digital-embroidery',
    'custom-apparel',
    'promotional-items',
    'branding-design',
    'event-campaign'
  ]),
  message: z.string().min(10, 'Please provide more details about your project'),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: 'screen-printing',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    // TODO: Integrate with Supabase
    // Example: await supabase.from('inquiries').insert(data)
    console.log('Form data:', data);
    alert('Thank you for your message! We will get back to you shortly.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            id="name"
            {...register('name')}
            type="text"
            placeholder="John Doe"
            className={`
              block w-full rounded-md border-0 px-3 py-2
              text-base ring-offset-white
              focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200
              sm:text-sm
              ${errors.name ? 'border-red-500' : ''}
            `}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            id="email"
            {...register('email')}
            type="email"
            placeholder="you@example.com"
            className={`
              block w-full rounded-md border-0 px-3 py-2
              text-base ring-offset-white
              focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200
              sm:text-sm
              ${errors.email ? 'border-red-500' : ''}
            `}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="flex items-start space-x-2">
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          Service Interested In
        </label>
        <select
          id="service"
          {...register('service')}
          className={`
            block w-full rounded-md border-0 px-3 py-2
            text-base ring-offset-white
            focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200
            sm:text-sm
            ${errors.service ? 'border-red-500' : ''}
          `}
        >
          <option value="screen-printing">Screen Printing</option>
          <option value="digital-embroidery">Digital Embroidery</option>
          <option value="custom-apparel">Custom Apparel</option>
          <option value="promotional-items">Promotional Items</option>
          <option value="branding-design">Branding & Design</option>
          <option value="event-campaign">Event & Campaign Printing</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Project Details
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          placeholder="Describe your project, quantity, timeline, and any specific requirements..."
          className={`
            block w-full rounded-md border-0 px-3 py-2
            text-base ring-offset-white
            focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200
            sm:text-sm
            ${errors.message ? 'border-red-500' : ''}
          `}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-center justify-start">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium
            rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2
            focus:ring-indigo-300 disabled:opacity-50
            transition-colors
          `}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}