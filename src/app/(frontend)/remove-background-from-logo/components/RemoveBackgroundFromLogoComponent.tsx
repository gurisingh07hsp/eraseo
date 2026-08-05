'use client';
import React, { cache } from 'react';
import settingServices from '@/server/settings/setting-services';
import { Sparkles, Bot, User, FileImage, Download, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import BgRemoveBox from '../../upload/_components/bg-remove-box';

const RemoveBackgroundFromLogoComponent = () => {
  const trustBadges = [
    { icon: Bot, text: '100% Automatic AI' },
    { icon: User, text: 'No Signup Required' },
    { icon: FileImage, text: 'Supports JPG, PNG & WEBP' },
    { icon: Download, text: 'Transparent PNG Download' },
    { icon: Zap, text: 'Free to Use' },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20">
        <Sparkles className="size-3" />
        <span>AI-POWERED MAGIC</span>
      </div>

      <h1 className="text-balance text-center text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-6">
        Remove Background from Logo
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 mb-10 w-full max-w-5xl">
        {trustBadges.map((badge, i) => (
          <div
            key={i}
            className="flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-card border border-border/50 shadow-sm text-[10px] sm:text-xs font-medium"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <badge.icon className="size-3 sm:size-3.5 text-primary" />
            </div>
            <span className="">{badge.text}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <Button className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold">
          Upload Image
        </Button>
        <Button variant="secondary" className="h-12 px-8 rounded-full font-semibold">
          Try Sample Image
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full flex justify-center z-10"
      >
        <div className="relative group w-full max-w-[650px]">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 to-blue-600/40 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <BgRemoveBox />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RemoveBackgroundFromLogoComponent;
