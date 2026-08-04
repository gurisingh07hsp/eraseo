import settingServices from '@/server/settings/setting-services';
import { Metadata } from 'next';
import React, { cache } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await cache(settingServices.publicSettings)();

  return {
    title: `Privacy Policy - ${settings?.general?.applicationName || ''}`,
  };
}

const PrivacyPolicyPage = async () => {
  const settings = await cache(settingServices.publicSettings)();
  const legal = await settingServices.getSettings('legal');
  const appName = settings?.general?.applicationName || 'Back Erase';

  const defaultContent = `
    <h2>1. Information We Collect</h2>
    <p>We collect information you provide directly to us when you use our services, including when you upload images for processing. This may include:</p>
    <ul>
      <li>Account information (name, email, password)</li>
      <li>Images you upload for background removal</li>
      <li>Payment information (processed securely via Stripe)</li>
    </ul>

    <h2>2. How We Use Your Information</h2>
    <p>We use the information we collect to:</p>
    <ul>
      <li>Provide, maintain, and improve our services</li>
      <li>Process your images and deliver the results</li>
      <li>Send you technical notices, updates, and support messages</li>
      <li>Protect against fraudulent or illegal activity</li>
    </ul>

    <h2>3. Data Retention</h2>
    <p>We value your privacy. Uploaded images are processed in real-time. We do not store your original or processed images longer than necessary to provide the service (typically deleted within 24 hours).</p>

    <h2>4. Data Security</h2>
    <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.</p>

    <h2>5. Cookies</h2>
    <p>We use cookies to maintain your session and improve your experience on our website.</p>

    <h2>6. Changes to this Policy</h2>
    <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

    <h2>7. Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, please contact us at support@backerase.com.</p>
  `;

  return (
    <div className="container !max-w-[800px] py-16 sm:py-24">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <div>
        <div
          className="prose dark:prose-invert mt-10 max-w-none"
          dangerouslySetInnerHTML={{ __html: legal?.privacyPolicy || defaultContent }}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
