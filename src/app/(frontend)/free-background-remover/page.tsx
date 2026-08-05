import React from 'react';
import FreeBackgroundRemoverComponent from './components/FreeBackgroundRemoverComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Background Remover Online – AI Image Editor | BackErase',
  description:
    'Remove image backgrounds online for free with BackErase. Create transparent PNGs in seconds using AI. Fast, accurate, secure, and no design skills required.',
};
const FreeBackgroundRemover = () => {
  return (
    <div>
      <FreeBackgroundRemoverComponent />
    </div>
  );
};

export default FreeBackgroundRemover;
