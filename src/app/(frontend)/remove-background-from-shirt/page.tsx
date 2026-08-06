import React from 'react';
import RemoveBackgroundFromShirtComponent from './components/RemoveBackgroundFromShirtComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Remove Background from Shirt Images | BackErase',
  description:
    'Remove backgrounds from shirt and apparel photos with AI. Create clean product images for clothing stores, catalogs, and online shops.',
  alternates: {
    canonical: '/remove-background-from-shirt',
  },
};
const RemoveBackgroundFromShirt = () => {
  return (
    <div>
      <RemoveBackgroundFromShirtComponent />
    </div>
  );
};

export default RemoveBackgroundFromShirt;
