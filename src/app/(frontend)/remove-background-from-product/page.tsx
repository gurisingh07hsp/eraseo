import React from 'react';
import RemoveBackgroundFromProductComponent from './components/RemoveBackgroundFromProduct';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Remove Background from Product Photos | BackErase',
  description:
    'Create professional product images with AI background removal. Perfect for Amazon, Shopify, Etsy, eCommerce stores, and online marketplaces.',
};
const RemoveBackgroundFromProduct = () => {
  return (
    <div>
      <RemoveBackgroundFromProductComponent />
    </div>
  );
};

export default RemoveBackgroundFromProduct;
