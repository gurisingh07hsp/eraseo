'use client';

import Logo from '@/app/admin/_components/logo';
import { useProfile, useCredits } from '@/app/admin/profile/_services/profile-hooks';
import { UserResponse } from '@/server/auth/auth-services';
import { IconLogout, IconUser, IconShieldHalfFilled } from '@tabler/icons-react';
import { AlignJustifyIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Avatar } from '@/components/ui/avatar';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';

import { cn } from '@/lib/utils';

import HeaderMenu from './menu';

const Header = ({ initalUser }: { initalUser?: UserResponse }) => {
  const { user, logout } = useProfile(initalUser);
  const { credits, isLoading: creditsLoading } = useCredits();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header
      className={cn(
        'sticky transition-all z-50 duration-300 border-b border-border/60 top-0 bg-background/90 backdrop-blur-sm',
      )}
    >
      <div className="container mx-auto flex h-20 items-center px-4 lg:px-14">
        {/* Left Section */}
        <div className="flex flex-1 justify-start">
          <HeaderMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            user={user}
            logout={logout}
          />
        </div>

        {/* Center Section - Logo */}
        <div className="flex flex-shrink-0 justify-center">
          <Logo href="/" className="[&>img]:h-9" />
        </div>

        {/* Right Section */}
        <div className="flex flex-1 justify-end items-center gap-3">
          <div className="items-center gap-1 hidden lg:flex border p-1 rounded-4xl bg-card/50 backdrop-blur-sm shadow-sm">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer outline-none px-1">
                  <Avatar
                    className={cn('ease-snappy transition-[width] size-9')}
                    name={user?.name || ''}
                    src={user?.avatar || undefined}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-64 rounded-3xl shadow-lg p-6"
                  side="bottom"
                  align="end"
                  sideOffset={8}
                >
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 pb-5 text-left text-sm">
                      <Avatar src={user?.avatar || undefined} name={user?.name || ''} />
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">{user?.name}</span>
                        <span className="truncate text-xs">{user?.email}</span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>
                    {creditsLoading ? (
                      <Skeleton className="h-6 w-full rounded-md" />
                    ) : (
                      <>
                        <div className="flex items-center gap-2 text-left text-sm">
                          <span className="text-lg font-semibold text-primary">{credits}</span>
                          <p className="font-semibold">Credits</p>
                        </div>
                      </>
                    )}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup className="py-3 space-y-2">
                    <DropdownMenuItem
                      className="font-medium !bg-transparent hover:!text-primary cursor-pointer"
                      asChild
                    >
                      <Link href="/profile">
                        <IconUser className="size-5" />
                        My Account
                      </Link>
                    </DropdownMenuItem>
                    {user.role === 'admin' && (
                      <DropdownMenuItem
                        className="font-medium !bg-transparent hover:!text-primary cursor-pointer"
                        asChild
                      >
                        <Link href="/admin">
                          <IconShieldHalfFilled className="size-5" />
                          Admin Dashboard
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem
                      className="!text-destructive font-medium !bg-transparent cursor-pointer"
                      onClick={logout}
                    >
                      <IconLogout className="!text-destructive size-5" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'rounded-4xl px-6 font-semibold text-[15px] h-10',
                  )}
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  className={cn(
                    buttonVariants(),
                    'rounded-4xl px-6 font-semibold text-[15px] h-10 bg-primary hover:bg-primary/90 text-white',
                  )}
                  href="/signup"
                >
                  SignUp
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              size="icon"
              variant="ghost"
              className="rounded-full h-10 w-10"
            >
              <AlignJustifyIcon className="!size-6 stroke-[1.5]" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
