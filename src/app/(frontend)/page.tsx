import settingServices from '@/server/settings/setting-services';
import { EraserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { cache } from 'react';

import { Button } from '@/components/ui/button';
import { Testimonial } from '@/components/ui/testimonial-card';

import { cn } from '@/lib/utils';

import { FaqSection } from './_components/faqs';
import BgRemoveBox from './upload/_components/bg-remove-box';
import Testimonials from './_components/Testimonial';
import HeroImages from './_components/HeroImages';

const howToUseItems = [
  {
    title: '1: Upload Image',
    description:
      'Upload the image you want to remove the background from by clicking the upload button or dragging and dropping the image into the designated area.',
  },
  {
    title: '2: Wait for Processing',
    description:
      'Once the image is uploaded, our advanced AI algorithms will automatically process the image to remove the background.',
  },
  {
    title: '3: Download Image',
    description:
      'After processing, you can download the image with a transparent background or choose a new background from our library.',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=sarah',
    testimonial:
      'I used to spend hours editing product photos. Now it takes seconds — and the results are even better. This tool has seriously boosted my shop’s presentation and saved me so much time.',
  },
  {
    name: 'Leo M',
    role: 'Freelance Photographer',
    rating: 4,
    image: 'https://i.pravatar.cc/150?u=leo',
    testimonial:
      'As a designer, I need precision and speed. This background remover is a game-changer. It’s fast, accurate, and integrates seamlessly into my workflow.',
  },
  {
    name: 'Emily Davis',
    role: 'Content Creator',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=emily',
    testimonial:
      'I love how easy it is to remove backgrounds from my thumbnails. The quality is top-notch, and it saves me so much time. Highly recommend!',
  },
];

const zigzag = [
  {
    title: 'Instantly Remove Backgrounds',
    description:
      'Say goodbye to tedious editing. Our AI-powered tool automatically detects and removes backgrounds from your images in seconds. Perfect for e-commerce, marketing, and profile pics.',
    image: '/images/background-remover-image-1.webp',
  },
  {
    title: 'High-Quality Results, Every Time',
    description:
      'We maintain the original image quality while delivering clean, precise edges — whether it’s hair, fur, or fine details. Get professional results with zero effort.',
    image: '/images/background-remover-image-2.jpeg',
  },
];

const HomePage = async () => {
  const settings = await cache(settingServices.publicSettings)();

  if (!settings?.general?.applicationName) {
    redirect('/setup');
  }

  return (
    <div className="py-16 sm:py-24 space-y-14 sm:space-y-20">
      <HeroImages />
      <div className="bg-card py-14 md:py-20">
        <div className="container">
          <h2 className="font-bold text-xl text-center sm:text-3xl">How to remove a background?</h2>
          <div className="mt-14">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {howToUseItems.map((item) => (
                <div key={item.title} className="py-10 px-7 bg-muted rounded-2xl">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-md text-muted-foreground mt-5">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container !max-w-6xl">
          <h2 className="font-bold text-xl text-center sm:text-3xl">
            Why use our background remover?
          </h2>
          <div className="space-y-18 mt-14">
            {zigzag.map((item, i) => (
              <div
                key={i}
                className={cn('flex flex-col-reverse md:flex-row items-center gap-10', {
                  'md:flex-row-reverse': i % 2 === 1,
                })}
              >
                <div className="flex-1 flex flex-col items-start justify-start">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-md text-muted-foreground mt-5">{item.description}</p>
                  <Button className="mt-7 bg-[#1b17ff]" asChild>
                    <Link href="/upload">Try it now</Link>
                  </Button>
                </div>
                <div className="flex-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="bg-card py-14 md:py-20">
        <div className="container">
          <h2 className="font-bold text-xl text-center sm:text-3xl">What our users are saying</h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </div> */}
      <Testimonials />
      <FaqSection />
    </div>
  );
};

export default HomePage;
