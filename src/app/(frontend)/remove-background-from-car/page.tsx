import React from 'react';
import RemoveBackgroundFromCarComponent from './components/RemoveBackgroundFromCarComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Remove Background from Car Images Online | BackErase',
  description:
    'Remove backgrounds from car photos instantly using AI. Perfect for dealerships, marketplaces, and automotive listings with high-quality transparent images.',
};
const RemoveBackgroundFromCar = () => {
  return (
    <div>
      <RemoveBackgroundFromCarComponent />
    </div>
  );
};

export default RemoveBackgroundFromCar;
