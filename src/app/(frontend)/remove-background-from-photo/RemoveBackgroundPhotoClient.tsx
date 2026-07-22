'use client';

import React from 'react';
import { Sparkles, Bot, User, FileImage, Download, Zap, Upload, Wand2, Check, ShoppingBag, User as UserIcon, Share2, Palette, Megaphone, Briefcase, Shield, Smartphone, Brain } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'nextjs-toploader/app';

const RemoveBackgroundPhotoClient = () => {
  const router = useRouter();
  const trustBadges = [
    { icon: Bot, text: '100% Automatic AI' },
    { icon: User, text: 'No Signup Required' },
    { icon: FileImage, text: 'Supports JPG, PNG & WEBP' },
    { icon: Download, text: 'Transparent PNG Download' },
    { icon: Zap, text: 'Fast Processing' },
  ];

  const howItWorksData = [
    {
      icon: Upload,
      title: 'Step1 — Upload Your Photo',
      description: 'Choose any image from your computer, tablet, or smartphone in JPG, JPEG, PNG, or WEBP.',
    },
    {
      icon: Wand2,
      title: 'Step2 — Let AI Do The Work',
      description: 'The intelligent system automatically recognizes the subject in the image, removing the background and retaining minute details like hair, clothing, and object edges.',
    },
    {
      icon: Download,
      title: 'Step3 — Download a High-Quality Transparent Image',
      description: 'Preview the edited image and download as a ready-to-use transparent PNG for personal or commercial use.',
    },
  ];

  const whyChooseData = [
    {
      icon: Brain,
      title: 'AI-Powered Precision',
      description: 'Automatically remove backgrounds from people, products, pets, and vehicles with surprising precision using machine learning.',
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Your photo takes only seconds to process, so you can get through lots of images in no time, without compromising quality.',
    },
    {
      icon: FileImage,
      title: 'High-Resolution Output',
      description: 'Download PNG images with transparent backgrounds in high quality for both print and web.',
    },
    {
      icon: User,
      title: 'Easy to Use',
      description: "There's no learning curve. Just upload a photo, remove the background, and download.",
    },
    {
      icon: Smartphone,
      title: 'No Software Required',
      description: 'It all works right in your browser. No need to install Photoshop or any editing app.',
    },
    {
      icon: Shield,
      title: 'Secure Online Processing',
      description: 'Your uploaded images are processed securely, and your privacy is protected.',
    },
  ];

  const featuresList = [
    'Automatic background removal',
    'AI-powered subject detection',
    'Transparent PNG downloads',
    'High-resolution image support',
    'Clean edge refinement',
    'Hair and fine-detail preservation',
    'Fast cloud-based processing',
    'Simple drag-and-drop upload',
    'Mobile and desktop compatibility',
    'Secure online processing',
  ];

  const useCasesData = [
    {
      icon: ShoppingBag,
      title: 'Product Photography',
      description: 'Make high-quality photos with transparent backgrounds for your Shopify products, Amazon, Etsy, WooCommerce, eBay & any other online marketplace.',
    },
    {
      icon: UserIcon,
      title: 'Portrait Photos',
      description: 'Background removal from portraits for producing professional source or profile pictures, resumes, business headshots or personal branding photos.',
    },
    {
      icon: Share2,
      title: 'Social Media Content',
      description: 'Create stunning social posts for Instagram, Facebook, LinkedIn, Pinterest, TikTok, YouTube and more.',
    },
    {
      icon: Megaphone,
      title: 'Marketing Materials',
      description: 'Ideal for brochures, ads, presentations, email campaigns, banners, promotional graphics, etc.',
    },
    {
      icon: Palette,
      title: 'Graphic Design Projects',
      description: 'Create flyers, posters, business cards, websites, presentations, and digital designs by seamlessly filling your designs with transparent images.',
    },
    {
      icon: Briefcase,
      title: 'Personal Use',
      description: 'No complicated editing tools: vacation and family portraits, invitations, greeting cards, school projects, and creative design.',
    },
  ];

  const supportedFormats = ['JPG', 'JPEG', 'PNG', 'WEBP'];

  const benefitsList = [
    'Faster editing workflow',
    'Consistent image quality',
    'Accurate edge detection',
    'Transparent backgrounds in seconds',
    'No professional editing skills required',
  ];

  const idealUsersList = [
    'eCommerce businesses',
    'Graphic designers',
    'Marketing agencies',
    'Photographers',
    'Social media managers',
    'Content creators',
    'Small businesses',
    'Students',
    'Freelancers',
    'Educators',
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16 sm:pb-24">
      {/* Hero Section */}
      <div className="container">
        <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20">
            <Sparkles className="size-3" />
            <span>AI-POWERED MAGIC</span>
          </div>

          <h1 className="text-balance text-center text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            Remove Background from Photo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mb-8">
            Remove unwanted background from any photo in seconds with our AI-driven Remove Background from Photo feature. Ideal for portrait retouching, product images, social media posts, or creating marketing graphics, our AI technology automatically detects the subject in the image and removes the background with 100% accuracy. You will not need any design experience, expensive software or manual editing.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 mb-10 w-full max-w-5xl">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-card border border-border/50 shadow-sm text-[10px] sm:text-xs font-medium"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <badge.icon className="size-3 sm:size-3.5 text-primary" />
                </div>
                <span className="">{badge.text}</span>
              </motion.div>
            ))}
          </div>
          <Button size="lg" onClick={() => router.push('/upload')}>
            Upload Your Photo
          </Button>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            How to Use Our Remove Background from Photos Tool
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

      {/* Remove Backgrounds Automatically Section */}
      <section className="container">
        <div className="bg-gradient-to-br from-accent/30 to-background rounded-3xl border border-border/50 p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Remove Backgrounds Automatically
            </h2>
            <p className="text-lg text-muted-foreground">
              Manually editing a photo takes a lot of time, especially for sharp edges like hair, clothing, or transparent objects. By precisely segmenting the foreground and background while preserving intricate details, our AI streamlines the process. In a matter of a few seconds, you will have a clean, professional image ready for websites, presentations, ads, social media, and online stores.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Choose Our Remove Background from Photo Tool?
          </h2>
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

      {/* Features Section */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Features
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Worry not – our Remove Background from Photo tool has everything you need for efficient editing in no time.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuresList.map((feature, i) => (
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
                <p className="font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            The Right One for Every Kind of Photo
          </h2>
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

      {/* Step by Step Guide Section */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Remove Background from Photo
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Background removal is fast and simple.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'Upload Your Photo', desc: 'Choose any image from your computer, tablet, or smartphone in JPG, JPEG, PNG, or WEBP.' },
            { title: 'AI Detects the Subject', desc: 'The intelligent system in the app automatically recognizes the subject in the image, delimiting it from the background.' },
            { title: 'Background Is Removed', desc: 'It also retains minute details such as hair, clothing, object edges, etc., giving a more natural look after the background is removed.' },
            { title: 'Download Your Image', desc: 'Preview the edited image and download as a ready-to-use transparent PNG anywhere.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border/50 shadow-lg"
            >
              <div className="text-lg font-bold mb-2">{i + 1}. {item.title}</div>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Supported Formats Section */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Supported Image Formats
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Our tool supports common image formats; here are a few of their names. We are working on compatibility to open even more file types and provide you with the best editing experience.
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

      {/* Benefits Section */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Benefits of AI Background Removal
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            The AI background remover saves tons of time and provides fantastic results. And it automates the entire process, eliminating the need to manually select subjects and refine edges.
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

      {/* Built for Businesses and Creators Section */}
      <section className="container">
        <div className="bg-gradient-to-br from-accent/30 to-background rounded-3xl border border-border/50 p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Built for Businesses and Creators
            </h2>
            <p className="text-lg text-muted-foreground">
              Our Remove Background from Photo tool helps you operate more effectively whether you are running an online store, creating marketing campaigns, designing graphics or editing personal images.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {idealUsersList.map((user, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card px-5 py-2.5 rounded-full border border-border/50 text-sm font-medium"
              >
                {user}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Results Section */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Professional Results Without the Complexity
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            With traditional editing software, this has required some skill and a time-consuming process to achieve the same clean cutout. This complexity has been eliminated with our AI-powered solution, which automatically generates high-quality transparent images in a few clicks. Whether it's a single photo edit or a collection of images, our technology gets it right consistently, so you can focus on your work rather than the time-consuming editing.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Start Getting Rid of Backgrounds from Images Immediately
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If you are searching for the best Remove Background from Photo tool, whether for images, portraits, marketing images, or creative works, you are in the right place with a relatively simple, step-by-step guide. Upload an image here today and turn any photo into a transparent PNG in less than 5 seconds.
          </p>
          <Button size="lg" onClick={() => router.push('/upload')}>
            Upload Your Photo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RemoveBackgroundPhotoClient;
