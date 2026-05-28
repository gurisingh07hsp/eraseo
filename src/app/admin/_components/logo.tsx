'use client';

import { useSettings } from '@/app/_providers/settings-provider';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';

const Logo = ({
  href,
  className,
  iconOnly,
}: {
  href?: string;
  className?: string;
  iconOnly?: boolean;
}) => {
  const settings = useSettings();
  const applicationName = settings?.general.applicationName;
  const logo = '/images/backeraselogo.png';
  const darkLogo = settings?.general?.darkLogo;
  const iconLogo = settings?.general?.iconLogo;
  const iconLogoDark = settings?.general?.iconLogoDark;

  return (
    <Link
      href={href || '/'}
      className={cn('flex items-center lg:me-80 justify-start text-xl font-semibold')}
    >
      {!iconOnly ? (
        <>
          {logo ? (
            <>
              <Image
                className={cn('dark:hidden object-contain w-32 h-20 lg:w-48 lg:h-24')}
                src={'/images/backeraselogo.png'}
                alt={applicationName || ''}
                unoptimized
                height={100}
                width={300}
              />
              <Image
                className={cn('hidden dark:block object-contain w-32 h-20 lg:w-48 lg:h-24')}
                src={'/images/backeraselogo.png'}
                alt={applicationName || ''}
                unoptimized
                height={100}
                width={180}
              />
            </>
          ) : (
            <span className="block">{applicationName || 'Logo'}</span>
          )}
        </>
      ) : (
        <>
          {iconLogo || logo ? (
            <>
              <Image
                className={cn('dark:hidden object-contain w-32 h-20 lg:w-48 lg:h-24')}
                src={'/images/backeraselogo.png'}
                alt={applicationName || ''}
                unoptimized
                height={100}
                width={100}
              />
              <Image
                className={cn('hidden dark:block object-contain w-32 h-20 lg:w-48 lg:h-24')}
                src={'/images/backeraselogo.png'}
                alt={applicationName || ''}
                unoptimized
                height={300}
                width={300}
              />
            </>
          ) : (
            <span className="flex items-center justify-center size-8 bg-accent rounded-md text-md">
              {applicationName?.substring(0, 2).toUpperCase() || 'LG'}
            </span>
          )}
        </>
      )}
    </Link>
  );
};

export default Logo;
