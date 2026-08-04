'use client';

import { motion } from 'motion/react';
import {
  ArrowRight,
  Zap,
  Brain,
  Image as ImageIcon,
  CreditCard,
  Smartphone,
  Shield,
  Upload,
  Wand2,
  Download,
  ShoppingBag,
  User,
  Share2,
  Palette,
  Megaphone,
  Briefcase,
  Check,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Section 2: Why Choose Back Erase
const whyChooseData = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Simple yet powerful image background removal. And it takes just a few seconds to do without the need for a complicated process.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Precision',
    description:
      'Advanced AI Focus accurately recognizes subjects, maintaining intricate details like hair, fur, jewelry and transparent edges.',
  },
  {
    icon: ImageIcon,
    title: 'High Quality Results',
    description:
      'Download clear transparent PNG images by retaining original quality and sharpness.',
  },
  {
    icon: CreditCard,
    title: 'Completely Free',
    description: 'No Subscription No Hidden Charges Remove Background',
  },
  {
    icon: Smartphone,
    title: 'Works on Every Device',
    description:
      'Use Back Erase Straight From Your Browser On Windows, Mac, Android, iPhone And Tablets And Chromebooks',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description:
      'Once uploaded, the images are processed securely and are automatically deleted post-processing to help keep your data safe and private.',
  },
];

// Section 3: How It Works
const howItWorksData = [
  {
    icon: Upload,
    title: 'Upload Your Photo',
    description: 'Upload a JPG, PNG, JPEG or WEBP image from your PC or mobile device',
  },
  {
    icon: Wand2,
    title: 'AI Removes the Background',
    description:
      'We use our AI to automatically identify the hero, and then we extract it from the background pixel-perfectly!',
  },
  {
    icon: Download,
    title: 'Download Your Transparent Image',
    description:
      'Download your PNG we our high-resolution with Transparent background or change colors and backgrounds!',
  },
];

// Section 4: Use Cases
const useCasesData = [
  {
    icon: ShoppingBag,
    title: 'E-commerce Product Photos',
    description:
      'Design Background Removal Product Images With White Background For Amazon / Shopify/Etsy/eBay/Walmart/Places.',
  },
  {
    icon: User,
    title: 'Portrait Photography',
    description:
      'Make distracting backgrounds go bye-bye in selfies, professional head shots, graduation pictures and family portraits.',
  },
  {
    icon: Share2,
    title: 'Social Media Content',
    description:
      'Create stunning Instagram posts, YouTube thumbnails, Facebook ads, LinkedIn profile photos and TikTok graphics.',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description:
      'Transparent png images or presentations, posters and flyers, logos, brochures and digital art work',
  },
  {
    icon: Megaphone,
    title: 'Marketing Materials',
    description:
      'Images for commercials, websites, email campaigns and other marketing activities.',
  },
  {
    icon: Briefcase,
    title: 'Business Branding',
    description:
      'Design for transparent background logos, team photos, company profiles and icon graphics.',
  },
];

// Section 5: Why AI is Better
const comparisonData = [
  { traditional: 'Manual Select', eraseo: 'Auto Detect' },
  { traditional: 'Time Consuming', eraseo: 'Seconds' },
  { traditional: 'Requires Photoshop Skills', eraseo: 'Beginner Friendly' },
  { traditional: 'Complex Edge Refinement', eraseo: 'AI Precision' },
  { traditional: 'Expensive Software', eraseo: 'Free Online' },
  { traditional: 'Desktop Only', eraseo: 'Works Everywhere' },
];

// Section 6: Supported Formats
const supportedFormats = ['JPG', 'JPEG', 'PNG', 'WEBP'];

// Section 7: Benefits
const benefitsList = [
  'Create transparent PNGs',
  'Replace backgrounds instantly',
  'Prepare ecommerce product images',
  'Make profile pictures stand out',
  'Improve marketing visuals',
  'Design social media graphics',
  'Save hours of manual editing',
  'Produce professional-quality images effortlessly',
];

export default function Features() {
  return (
    <div className="space-y-32">
      {/* Section 2: Why Choose Back Erase */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            So Why Should You Use Back Erase AI Background Remover?
          </h2>
          <p className="text-muted-foreground text-lg text-balance">
            Using next-generation artificial intelligence, Back Erase accurately identifies people,
            products, animals, vehicles, logos and even complex objects with a high degree of
            precision. Our AI removes backgrounds instantly, and with great detail paying special
            attention to hair, fur, edges and transparent objects unlike any existing editor
            software. If you are planning to create Product photos, Profile pictures, Marketing
            graphics, Social media posts or Online store listings then Back Erase makes sure that
            all of the above can help you achieve professional-grade results in just a few seconds!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-8 rounded-3xl border border-border/50 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="size-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            How to Create Image Text That Stands Out in 3 Easy Steps
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorksData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {i + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="size-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4: Use Cases */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ideal for This Type of Image
          </h2>
          <p className="text-muted-foreground text-lg text-balance">
            Whether you want to remove background from any kind of photo, Back Erase provides clean
            and professional looking background removal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCasesData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-8 rounded-3xl border border-border/50 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="size-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 5: Why AI is Better */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Is AI Better Than Manual Background Removal?
          </h2>
          <p className="text-muted-foreground text-lg text-balance">
            Removing a background the traditional way can take anywhere from several minutes to
            hours to do it right. Back Erase automates the whole process using powerful AI that
            detects the subject in seconds.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl border border-border/50 shadow-xl overflow-hidden">
            <div className="grid grid-cols-2 gap-0 border-b border-border/50">
              <div className="p-6 bg-muted/30 text-center font-bold text-muted-foreground">
                Traditional Editing
              </div>
              <div className="p-6 bg-primary/10 text-center font-bold text-primary">
                Back Erase AI
              </div>
            </div>
            {comparisonData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="grid grid-cols-2 gap-0 border-b border-border/30 last:border-b-0"
              >
                <div className="p-5 text-center text-muted-foreground">{item.traditional}</div>
                <div className="p-5 text-center font-medium">{item.eraseo}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Supported Formats */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Supported Image Formats
          </h2>
          <p className="text-muted-foreground text-lg text-balance">
            Back Erase nearly has every popular image format supported, and you can edit them
            without problems. They offer great picture quality in processed high res images.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {supportedFormats.map((format, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card px-10 py-6 rounded-2xl border border-border/50 shadow-lg text-2xl font-bold"
            >
              {format}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 7: Benefits */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Where Millions of Images Need Background Removal
          </h2>
          <p className="text-muted-foreground text-lg text-balance">
            Removing background aids to spice up the aesthetic of images, increases the
            professionalism and makes the initiative less complicated and faster to re-use on web
            sites, online stores, presentations and advertising campaigns.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefitsList.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 bg-card p-5 rounded-2xl border border-border/50 shadow-lg"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="size-5 text-primary" />
                </div>
                <p className="font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
