'use client';

import { ALLOWED_IMAGE_TYPES } from '@/config/constants';
import { ChevronDownIcon, Download, Loader2, PlusIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { cn } from '@/lib/utils';

import { useRemoveBg } from '../../_services/removebg-hooks';

const BgRemoveBox = () => {
  const {
    onDrop,
    localimage,
    setlocalImage,
    image,
    onClear,
    onChange,
    isLoading,
    showOrignal,
    setShowOrignal,
    progress,
    inputRef,
    downloadPremium,
    premiumDownloadMutation,
  } = useRemoveBg();

  return (
    <div
      className="z-[1] w-full"
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {!isLoading && image && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 px-4 sm:px-6 pt-4 sm:pt-6">
          <div className="bg-accent/50 backdrop-blur-sm rounded-xl p-1 border border-border/50 flex w-full sm:w-auto">
            <Button
              className={cn('h-8 sm:h-9 px-3 sm:px-4 flex-1 sm:flex-none rounded-lg transition-all', {
                'shadow-sm bg-card text-foreground': showOrignal,
                'text-muted-foreground hover:text-foreground': !showOrignal,
              })}
              variant="ghost"
              onClick={() => setShowOrignal(true)}
            >
              Before
            </Button>
            <Button
              className={cn('h-8 sm:h-9 px-3 sm:px-4 flex-1 sm:flex-none rounded-lg transition-all', {
                'shadow-sm bg-card text-foreground': !showOrignal,
                'text-muted-foreground hover:text-foreground': showOrignal,
              })}
              variant="ghost"
              onClick={() => setShowOrignal(false)}
            >
              After
            </Button>
          </div>
          <Button
            className="rounded-xl h-10 w-full sm:w-auto px-5 font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all"
            onClick={async () => {
              if (!image) return;

              try {
                const response = await fetch(image);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'removed-background.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
              } catch (error) {
                console.error('Download failed:', error);
              }
            }}
          >
            Download <Download className="ml-2 size-4" />
          </Button>
        </div>
      )}
      <div className={cn(
        "flex relative items-center flex-col justify-center gap-6 border-none w-full min-h-[350px] sm:min-h-[480px] transition-all",
        !localimage?.preview && "bg-[repeating-conic-gradient(var(--color-muted)_0_25%,transparent_0_50%)] bg-[length:24px_24px] hover:bg-[length:20px_20px] duration-500"
      )}>
        {localimage?.preview ? (
          <div className="relative w-full h-full flex items-center justify-center p-6 min-h-[350px] sm:min-h-[480px]">
            <Image
              src={showOrignal || !image ? localimage?.preview : image}
              alt="image"
              className="object-contain w-full h-full max-h-[400px] drop-shadow-2xl"
              unoptimized
              width={1000}
              height={1000}
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-4 right-4 rounded-full shadow-lg hover:scale-110 transition-transform"
              onClick={onClear}
            >
              <XIcon className="size-5" />
            </Button>
            {isLoading && (
              <div className="absolute z-[2] bg-background/80 backdrop-blur-sm inset-0 flex flex-col justify-center items-center">
                <div className="bg-primary/10 rounded-full p-4 animate-pulse">
                  <Loader2 className="animate-spin text-primary size-8" />
                </div>
                <div className="mt-4 space-y-1 text-center">
                  <p className="text-sm font-bold text-foreground">
                    {progress < 100 ? 'Uploading...' : 'Magically removing background...'}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">
                    {progress}% complete
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 p-8">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <Button
                type="button"
                asChild
                size="lg"
              className="relative h-11 sm:h-14 px-6 sm:px-8 font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl bg-primary hover:bg-primary/90 shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <label htmlFor="file-upload" className="cursor-pointer flex items-center gap-2 sm:gap-3">
                <div className="bg-white/20 rounded-lg p-0.5 sm:p-1">
                  <PlusIcon className="size-5 sm:size-6 stroke-[3px]" />
                </div>
                Start from a photo
              </label>
              </Button>
            </div>
            <input
              type="file"
              id="file-upload"
              accept={ALLOWED_IMAGE_TYPES.join(',')}
              onChange={onChange}
              className="hidden"
              ref={inputRef}
            />
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="font-bold text-lg sm:text-xl text-foreground">Or drop an image here</p>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">Supports JPG, PNG, WEBP up to 10MB</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-8 border-t border-border/50 bg-muted/30">
        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          By uploading an image you agree to our{' '}
          <Link className="font-bold text-foreground hover:text-primary transition-colors underline underline-offset-4" href="/terms-of-service">
            Terms of Service
          </Link>
          . For more details on processing and your rights, check our{' '}
          <Link className="font-bold text-foreground hover:text-primary transition-colors underline underline-offset-4" href="/privacy-policy">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default BgRemoveBox;
