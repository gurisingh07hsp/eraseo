import React from 'react';
import RemoveBackgroundFromDocumentComponent from './components/RemoveBackgroundFromDocumentComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Remove Background from Documents Online | BackErase',
  description:
    'Remove document backgrounds in seconds with AI. Create clean scans for forms, certificates, PDFs, and official documents quickly and accurately.',
  alternates: {
    canonical: '/remove-background-from-document',
  },
};
const RemoveBackgroundFromDocument = () => {
  return (
    <div>
      <RemoveBackgroundFromDocumentComponent />
    </div>
  );
};

export default RemoveBackgroundFromDocument;
