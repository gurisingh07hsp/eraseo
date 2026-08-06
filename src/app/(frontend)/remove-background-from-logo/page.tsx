import React from 'react';
import RemoveBackgroundFromLogoComponent from './components/RemoveBackgroundFromLogoComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Remove Background from Logo Images | BackErase',
  description:
    'Convert logos into transparent PNGs instantly. Remove unwanted backgrounds from logo images while preserving sharp edges and high resolution.',
  alternates: {
    canonical: '/remove-background-from-logo',
  },
};
const RemoveBackgroundLogo = () => {
  return (
    <div>
      <RemoveBackgroundFromLogoComponent />
    </div>
  );
};

export default RemoveBackgroundLogo;
