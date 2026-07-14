'use client';
import { EraserIcon, Sparkles, Check, Bot, User, FileImage, Download, Zap } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import BgRemoveBox from '../upload/_components/bg-remove-box';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

const HeroImages = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const [useSample, setUseSample] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const onLeave = () => {
      mouse.current = { x: 0, y: 0 };
    };

    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);

    const tick = () => {
      // Smooth lerp
      current.current.x += (mouse.current.x - current.current.x) * 0.07;
      current.current.y += (mouse.current.y - current.current.y) * 0.07;

      const { x, y } = current.current;

      // Image 1 — top right, depth 0.6 (subtle)
      if (img1Ref.current) {
        img1Ref.current.style.transform = `translate(${-x * 30}px, ${-y * 30}px) rotate(${x * 5}deg)`;
      }

      // Image 2 — left middle, depth slightly stronger
      if (img2Ref.current) {
        img2Ref.current.style.transform = `translate(${-x * 45}px, ${-y * 45}px) rotate(${-x * 8}deg)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const trustBadges = [
    { icon: Bot, text: '100% Automatic AI' },
    { icon: User, text: 'No Signup Required' },
    { icon: FileImage, text: 'Supports JPG, PNG & WEBP' },
    { icon: Download, text: 'Transparent PNG Download' },
    { icon: Zap, text: 'Free to Use' },
  ];

  return (
    <div className="relative overflow-hidden pt-10 pb-16">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div ref={containerRef} className="container relative flex flex-col items-center">
        {/* Floating parallax images with improved styling */}
        <div
          ref={img1Ref}
          className="absolute top-[5%] right-0 hidden xl:block z-0"
          style={{ willChange: 'transform', transition: 'transform 0.05s linear' }}
        >
          <div className="relative p-2 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-border/50 rotate-6 overflow-hidden">
            <Image
              src="/images/demo-image-1.png"
              height={200}
              width={200}
              alt="image"
              className="rounded-xl"
            />
          </div>
        </div>

        <div
          ref={img2Ref}
          className="absolute left-0 top-[40%] hidden xl:block z-0"
          style={{ willChange: 'transform', transition: 'transform 0.05s linear' }}
        >
          <div className="relative p-2 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-border/50 -rotate-12 overflow-hidden">
            <Image
              src="/images/demo-image-2.png"
              height={180}
              width={180}
              alt="image"
              className="rounded-xl"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-[1] flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20">
            <Sparkles className="size-3" />
            <span>AI-POWERED MAGIC</span>
          </div>

          <h1 className="text-balance text-center text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            Free AI Background Remover
          </h1>

          <p className="mb-8 text-center text-base tracking-tight text-muted-foreground md:text-lg max-w-3xl text-balance">
            AI Photo Background Remover: Remove Image Background Instantaneously Just Upload any
            JPG, PNG, JPEG or WEBP and get a clean transparent background in just one click. These
            are not done in Photoshop, no manual editing, no watermarks.
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 mb-10 w-full max-w-5xl">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-card border border-border/50 shadow-sm text-[10px] sm:text-xs font-medium"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <badge.icon className="size-3 sm:size-3.5 text-primary" />
                </div>
                <span className="">{badge.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold">
              Upload Image
            </Button>
            <Button variant="secondary" className="h-12 px-8 rounded-full font-semibold">
              Try Sample Image
            </Button>
          </div>
        </motion.div>

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
    </div>
  );
};

export default HeroImages;
