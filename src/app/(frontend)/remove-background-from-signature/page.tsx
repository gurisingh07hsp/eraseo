import React from 'react';
import RemoveBackgroundFromSignatureComponent from './components/RemoveBackgroundFromSignatureComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Remove Background from Signature Online | BackErase',
  description:
    'Create professional product images with AI background removal. Perfect for Amazon, Shopify, Etsy, eCommerce stores, and online marketplaces.Make your signature transparent in seconds. Remove white or colored backgrounds from scanned signatures for documents, contracts, and PDFs.',
  alternates: {
    canonical: '/remove-background-from-signature',
  },
};
const RemoveBackgroundFromSignature = () => {
  return (
    <div>
      <RemoveBackgroundFromSignatureComponent />
    </div>
  );
};

export default RemoveBackgroundFromSignature;
