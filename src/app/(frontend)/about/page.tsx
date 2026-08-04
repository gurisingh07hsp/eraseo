import settingServices from '@/server/settings/setting-services';
import { Metadata } from 'next';
import React, { cache } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await cache(settingServices.publicSettings)();

  return {
    title: `About Us - ${settings?.general?.applicationName || 'Back Erase'}`,
    description: `Learn more about ${settings?.general?.applicationName || 'Back Erase'} and our mission to provide the best AI background removal tool.`,
  };
}

const AboutPage = async () => {
  const settings = await cache(settingServices.publicSettings)();

  return (
    <div className="container py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">
          About {settings?.general?.applicationName || 'Back Erase'}
        </h1>

        <div className="prose dark:prose-invert max-w-none space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Welcome to {settings?.general?.applicationName || 'Back Erase'}, your number one source
            for AI-powered image processing. We&apos;re dedicated to providing you the very best
            background removal experience, with an emphasis on speed, quality, and ease of use.
          </p>

          <p>
            Founded in 2026, {settings?.general?.applicationName || 'Back Erase'} has come a long
            way from its beginnings. When we first started out, our passion for simplifying design
            workflows drove us to start our own business.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Our Mission</h2>
          <p>
            Our mission is to empower creators, e-commerce owners, and photographers by providing
            professional-grade AI tools that were previously only available to large design studios.
            We believe that removing a background shouldn&apos;t take minutes of manual masking—it
            should take one click and a few seconds.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Advanced AI:</strong> Our algorithms are constantly learning to handle complex
              edges like hair and fur.
            </li>
            <li>
              <strong>Privacy First:</strong> We process your images securely and don&apos;t store
              them longer than necessary.
            </li>
            <li>
              <strong>High Resolution:</strong> Get clean, sharp results suitable for print and
              professional use.
            </li>
            <li>
              <strong>User Friendly:</strong> No learning curve. Just upload, wait, and download.
            </li>
          </ul>

          <p className="mt-10">
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any
            questions or comments, please don&apos;t hesitate to contact us.
          </p>

          <p className="font-semibold text-foreground italic mt-8">
            Sincerely,
            <br />
            The {settings?.general?.applicationName || 'Back Erase'} Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
