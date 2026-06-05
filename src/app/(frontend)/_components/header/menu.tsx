'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { UserResponse } from '@/server/auth/auth-services';
import { Button, buttonVariants } from '@/components/ui/button';
import { IconLogout, IconUser, IconShieldHalfFilled } from '@tabler/icons-react';

const menuItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Background Remover',
    href: '/upload',
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
];

export default function HeaderMenu({
  isMenuOpen,
  setIsMenuOpen,
  user,
  logout,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;
  user?: UserResponse;
  logout?: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      <div className="hidden lg:flex border rounded-4xl p-1">
        {menuItems.map((item) => (
          <div key={item.title} className="relative">
            <Link
              href={item.href}
              key={item.href}
              className={cn(
                'flex h-full items-center px-4 py-2 transition text-[15px] font-medium rounded-4xl',
                {
                  'bg-primary text-white': pathname === item.href,
                },
              )}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
      <div
        className={cn(
          'fixed top-[80px] left-0 h-[calc(100svh-80px)] w-screen border-t bg-background px-6 py-6 lg:hidden flex flex-col justify-between',
          '-translate-y-3 opacity-0 invisible transition-all overflow-y-auto z-50',
          {
            'translate-y-0 opacity-100 visible': isMenuOpen,
          },
        )}
      >
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'block py-3 px-4 rounded-xl text-base font-semibold transition-colors',
                  pathname === item.href ? 'bg-primary/10 text-primary' : 'hover:bg-accent',
                )}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-4 pt-6 border-t">
          {user ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3 px-4 py-2 mb-2">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {user.name?.[0].toUpperCase()}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm">{user.name}</span>
                  <span className="text-xs text-muted-foreground">{user.email}</span>
                </div>
              </div>
              <Link
                href="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-accent font-semibold"
              >
                <IconUser className="size-5" />
                My Account
              </Link>
              {user.role === 'admin' && (
                <Link
                  href="/admin"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-accent font-semibold"
                >
                  <IconShieldHalfFilled className="size-5" />
                  Admin Dashboard
                </Link>
              )}
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 h-12 px-4 rounded-xl text-destructive hover:text-destructive hover:bg-destructive/10 font-semibold"
                onClick={() => {
                  logout?.();
                  setIsMenuOpen(false);
                }}
              >
                <IconLogout className="size-5" />
                Logout
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'h-12 rounded-xl font-bold border-2',
                )}
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  buttonVariants(),
                  'h-12 rounded-xl font-bold bg-primary hover:bg-primary/90',
                )}
              >
                SignUp
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
