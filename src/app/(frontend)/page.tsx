import settingServices from '@/server/settings/setting-services';
import { redirect } from 'next/navigation';
import { cache } from 'react';

import { FaqSection } from './_components/faqs';
import Testimonials from './_components/Testimonial';
import HeroImages from './_components/HeroImages';
import Features from './_components/Features';

const HomePage = async () => {
  const settings = await cache(settingServices.publicSettings)();

  if (!settings?.general?.applicationName) {
    redirect('/setup');
  }

  return (
    <div className="pb-16 sm:pb-24 space-y-24 sm:space-y-32">
      <HeroImages />
      <Features />
      <Testimonials />
      <FaqSection />
    </div>
  );
};

export default HomePage;
