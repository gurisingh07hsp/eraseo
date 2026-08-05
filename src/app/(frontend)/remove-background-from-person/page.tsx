import React from 'react';
import RemoveBackgroundFromPersonComponent from './components/RemoveBackgroundFromPersonComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Remove Background from Person Photos | BackErase',
  description:
    'Remove backgrounds from portraits and people with AI precision. Perfect for profile pictures, resumes, social media, and professional photography.',
};
const RemoveBackgroundFromPerson = () => {
  return (
    <div>
      <RemoveBackgroundFromPersonComponent />
    </div>
  );
};

export default RemoveBackgroundFromPerson;
