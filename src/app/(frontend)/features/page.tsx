import settingServices from '@/server/settings/setting-services';
import { Metadata } from 'next';
import React, { cache } from 'react';
import { Sparkles, Zap, Shield, Image as ImageIcon, Download, Layers } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await cache(settingServices.publicSettings)();

  return {
    title: `Features - ${settings?.general?.applicationName || 'Eraseo'}`,
    description: `Discover the powerful AI features of ${settings?.general?.applicationName || 'Eraseo'} for background removal.`,
    alternates: {
      canonical: '/features',
    },
  };
}

const features = [
  {
    title: 'AI-Powered Precision',
    description:
      'Our advanced neural networks are trained on millions of images to handle complex details like hair, fur, and transparent objects with pixel-perfect accuracy.',
    icon: <Sparkles className="size-6" />,
  },
  {
    title: 'Instant Processing',
    description:
      'Remove backgrounds in less than 5 seconds. Our optimized infrastructure ensures you spend less time waiting and more time creating.',
    icon: <Zap className="size-6" />,
  },
  {
    title: 'High-Resolution Export',
    description:
      'Download your processed images in full resolution. No quality loss, perfect for professional printing, e-commerce, and high-end design.',
    icon: <Download className="size-6" />,
  },
  {
    title: 'Bulk Processing',
    description:
      'Need to process hundreds of images? Our pro tools allow for seamless batch background removal to supercharge your workflow.',
    icon: <Layers className="size-6" />,
  },
  {
    title: 'Smart Edge Detection',
    description:
      'Say goodbye to jagged edges. Our AI automatically smooths and refines the boundaries of your subjects for a natural look.',
    icon: <ImageIcon className="size-6" />,
  },
  {
    title: 'Secure & Private',
    description:
      'Your data is safe with us. We use enterprise-grade encryption and automatically delete processed files after 24 hours.',
    icon: <Shield className="size-6" />,
  },
];

const FeaturesPage = async () => {
  const settings = await cache(settingServices.publicSettings)();

  return (
    <div className="container py-16 sm:py-24">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Powerful Features for Creators</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Everything you need to remove backgrounds and edit images like a pro, powered by the
          latest advancements in Artificial Intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-8 bg-card border border-border/50 rounded-3xl hover:border-primary/30 transition-all hover:shadow-xl group"
          >
            <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 p-12 bg-primary rounded-[3rem] text-primary-foreground text-center overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] -mr-32 -mt-32 rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[100px] -ml-32 -mb-32 rounded-full" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to experience the magic?</h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            Join thousands of photographers and designers who are saving hours of manual work every
            week.
          </p>
          <a
            href="/upload"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-sm font-bold text-primary transition-colors hover:bg-white/90"
          >
            Get Started for Free
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
