import React from 'react';
import DevelopersPage from './DevelopersPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Background Removal API for Developers | BackErase',
  description:
    'Integrate AI-powered background removal into your app with the BackErase API. Fast, scalable, and developer-friendly with reliable performance.',
};
const Developers = () => {
  return (
    <div>
      <DevelopersPage />
    </div>
  );
};

export default Developers;
