import settingServices from '@/server/settings/setting-services';
import { Metadata } from 'next';
import React, { cache } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await cache(settingServices.publicSettings)();

  return {
    title: `Terms Of Service - ${settings?.general?.applicationName || ''}`,
  };
}

const TermsOfServicePage = async () => {
  const settings = await cache(settingServices.publicSettings)();
  const legal = await settingServices.getSettings('legal');
  const appName = settings?.general?.applicationName || 'Eraseo';

  const defaultContent = `
    <h2>1. Acceptance of Terms</h2>
    <p>By accessing and using ${appName}, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

    <h2>2. Description of Service</h2>
    <p>${appName} provides AI-powered background removal services for images. We reserve the right to modify or discontinue the service at any time.</p>

    <h2>3. User Accounts</h2>
    <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

    <h2>4. Intellectual Property</h2>
    <p>You retain all rights to the images you upload. ${appName} does not claim ownership of your content. By using the service, you grant us a temporary license to process your images to provide the service.</p>

    <h2>5. Prohibited Conduct</h2>
    <p>You agree not to use the service for any illegal purposes or to upload content that violates any third-party rights, including copyrights and privacy rights.</p>

    <h2>6. Limitation of Liability</h2>
    <p>${appName} is provided "as is" without any warranties. We shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>

    <h2>7. Termination</h2>
    <p>We reserve the right to terminate or suspend your account at our sole discretion, without notice, for conduct that we believe violates these Terms.</p>

    <h2>8. Contact</h2>
    <p>Questions about the Terms of Service should be sent to us at support@eraseo.com.</p>
  `;

  return (
    <div className="container !max-w-[800px] py-16 sm:py-24">
      <h1 className="text-4xl font-bold">Terms of Service</h1>
      <div>
        <div
          className="prose dark:prose-invert mt-10 max-w-none"
          dangerouslySetInnerHTML={{ __html: legal?.termsOfService || defaultContent }}
        />
      </div>
    </div>
  );
};

export default TermsOfServicePage;
