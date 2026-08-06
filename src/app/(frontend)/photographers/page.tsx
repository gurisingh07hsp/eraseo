import React from 'react';
import PhotographersComponent from './components/PhotographersComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Background Remover for Photographers | BackErase',
  description:
    'Edit portraits and photography with AI-powered background removal. BackErase helps photographers create clean, professional images in just a few clicks.',
  alternates: {
    canonical: '/photographers',
  },
};
const Photographers = () => {
  return (
    <div>
      <PhotographersComponent />
    </div>
  );
};

export default Photographers;
