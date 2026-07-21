import React, { cache } from 'react';
import settingServices from '@/server/settings/setting-services';
import { Metadata } from 'next';

import RemoveBackgroundPhotoClient from './RemoveBackgroundPhotoClient';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await cache(settingServices.publicSettings)();

  return {
    title: `Remove Background from Photo - ${settings?.general?.applicationName || 'Eraseo'}`,
    description: `Remove unwanted background from any photo in seconds with our AI-driven Remove Background from Photo feature.`,
  };
}

const RemoveBackgroundPhoto = () => {
  return <RemoveBackgroundPhotoClient />;
};

export default RemoveBackgroundPhoto;
