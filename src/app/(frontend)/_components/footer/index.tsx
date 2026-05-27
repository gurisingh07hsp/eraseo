// 'use client';

// import { useSettings } from '@/app/_providers/settings-provider';
// import Logo from '@/app/admin/_components/logo';
// import Link from 'next/link';
// import React from 'react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   const settings = useSettings();

//   return (
//     <footer className="border-t">
//       <div className="container flex flex-col items-center justify-center py-12 gap-6">
//         <Logo href="/" className="[&>img]:h-10" />
//         <div className="text-sm text-muted-foreground text-center">
//           Copyright © {currentYear}{' '}
//           <Link className="cursor-pointer" href="/">
//             {settings?.general.applicationName || ''}
//           </Link>
//           . All Rights Reserved.
//         </div>
//         <div className="flex items-center gap-2">
//           <Link
//             className="cursor-pointer text-sm text-muted-foreground text-center hover:text-foreground hover:underline"
//             href="/privacy-policy"
//           >
//             Privacy Policy
//           </Link>
//           <span className="mx-2">|</span>
//           <Link
//             className="cursor-pointer text-sm text-muted-foreground text-center hover:text-foreground hover:underline"
//             href="/terms-of-service"
//           >
//             Terms of Service
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Logo from '@/app/admin/_components/logo';
import Link from 'next/link';

const Footer = () => {
  const navLinks = {
    Product: ['Overview', 'Pricing', 'Marketplace', 'Features'],
    Company: ['About', 'Team', 'Blog', 'Careers'],
    Resources: ['Help', 'Sales', 'Advertise', 'Privacy'],
  };

  return (
    <footer className="w-full border-t text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand Section */}
          <div className="flex flex-col gap-5 max-w-xs">
            {/* Logo */}
            <Logo href="/" className="[&>img]:h-9 me-56" />
            {/* <Link href="/" className="flex items-center gap-2.5 group">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <rect width="4" height="28" rx="2" fill="#111827" />
                <rect x="6" y="4" width="4" height="20" rx="2" fill="#111827" />
                <rect x="12" y="8" width="4" height="12" rx="2" fill="#111827" />
                <rect x="18" y="4" width="4" height="20" rx="2" fill="#111827" />
                <rect x="24" width="4" height="28" rx="2" fill="#111827" />
              </svg>
              <span className="text-lg font-semibold tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors duration-200">
                Shadcnblocks.com
              </span>
            </Link> */}

            {/* Tagline */}
            <p className="text-sm leading-relaxed text-gray-500">
              A collection of components for your startup business or side project.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <Link
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-gray-700 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </Link>

              {/* Facebook */}
              <Link
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-gray-700 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>

              {/* Twitter / X */}
              <Link
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-gray-700 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-gray-700 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Nav Link Columns */}
          <div className="grid grid-cols-3 gap-8 sm:gap-16">
            {Object.entries(navLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold text-white">{category}</h3>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-gray-500 transition-colors duration-200"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-200" />

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">© 2024 Eraseo. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="text-sm text-white transition-colors duration-200">
              Terms and Conditions
            </Link>
            <Link href="#" className="text-sm text-white transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
