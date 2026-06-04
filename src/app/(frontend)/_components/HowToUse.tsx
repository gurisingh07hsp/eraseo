'use client';

import { motion } from 'motion/react';
import { ImageIcon, Zap, ShieldCheck } from 'lucide-react';

const howToUseItems = [
  {
    title: '1: Upload Image',
    icon: <ImageIcon className="size-6" />,
    description:
      'Upload the image you want to remove the background from by clicking the upload button or dragging and dropping the image into the designated area.',
  },
  {
    title: '2: Wait for Processing',
    icon: <Zap className="size-6" />,
    description:
      'Once the image is uploaded, our advanced AI algorithms will automatically process the image to remove the background.',
  },
  {
    title: '3: Download Image',
    icon: <ShieldCheck className="size-6" />,
    description:
      'After processing, you can download the image with a transparent background or choose a new background from our library.',
  },
];

export default function HowToUse() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            How to remove a background?
          </h2>
          <p className="text-muted-foreground text-lg text-balance">
            Three simple steps to professional-grade background removal.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {howToUseItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 bg-card border border-border/50 rounded-3xl hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
