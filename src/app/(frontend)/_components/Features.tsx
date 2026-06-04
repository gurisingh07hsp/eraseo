'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const zigzag = [
  {
    title: 'Instantly Remove Backgrounds',
    tag: 'FAST & ACCURATE',
    description:
      'Say goodbye to tedious editing. Our AI-powered tool automatically detects and removes backgrounds from your images in seconds. Perfect for e-commerce, marketing, and profile pics.',
    image: '/images/background-remover-image-1.webp',
  },
  {
    title: 'High-Quality Results, Every Time',
    tag: 'PROFESSIONAL GRADE',
    description:
      'We maintain the original image quality while delivering clean, precise edges — whether it’s hair, fur, or fine details. Get professional results with zero effort.',
    image: '/images/background-remover-image-2.jpeg',
  },
];

export default function Features() {
  return (
    <section className="container">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Why use our background remover?
        </h2>
        <p className="text-muted-foreground text-lg text-balance">
          Powerful features designed to save you time and improve your workflow.
        </p>
      </div>

      <div className="space-y-32">
        {zigzag.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={cn('flex flex-col-reverse md:flex-row items-center gap-16 lg:gap-24', {
              'md:flex-row-reverse': i % 2 === 1,
            })}
          >
            <div className="flex-1 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider">
                {item.tag}
              </span>
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">{item.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
              <div className="pt-4">
                <Button
                  className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold group"
                  asChild
                >
                  <Link href="/upload">
                    Try it now
                    <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-[3rem] -z-10" />
              <div className="relative p-2 bg-card border border-border/50 rounded-[2.5rem] shadow-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={600}
                  className="rounded-[2rem] w-full object-cover aspect-square md:aspect-auto"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
