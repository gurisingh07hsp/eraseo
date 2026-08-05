import React from 'react';
import RemoveBackgroundFromShoesComponent from './components/RemoveBackgroundFromShoesComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Remove Background from Shoe Images | BackErase',
  description:
    'Instantly remove backgrounds from shoe photos using AI. Create professional footwear images for eCommerce, catalogs, and digital marketing.',
};
const RemoveBackgroundFromShoes = () => {
  return (
    <div>
      <RemoveBackgroundFromShoesComponent />
    </div>
  );
};

export default RemoveBackgroundFromShoes;
