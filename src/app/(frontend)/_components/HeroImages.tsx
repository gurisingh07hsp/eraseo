'use client';
import { EraserIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import BgRemoveBox from '../upload/_components/bg-remove-box';

const HeroImages = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

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
        img1Ref.current.style.transform = `translate(${-x * 30}px, ${-y * 30}px)`;
      }

      // Image 2 — left middle, depth slightly stronger
      if (img2Ref.current) {
        img2Ref.current.style.transform = `translate(${-x * 45}px, ${-y * 45}px)`;
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
  return (
    <div>
      <div ref={containerRef} className="container relative flex flex-col items-center">
        <div
          ref={img1Ref}
          className="absolute top-[5%] right-5 hidden xl:block"
          style={{ willChange: 'transform', transition: 'transform 0.05s linear' }}
        >
          <Image src="/images/demo-image-1.png" height={200} width={200} alt="image" />
        </div>

        {/* Image 2 — position unchanged, wrapped in ref div for parallax */}
        <div
          ref={img2Ref}
          className="absolute left-5 top-[50%] hidden xl:block"
          style={{ willChange: 'transform', transition: 'transform 0.05s linear' }}
        >
          <Image src="/images/demo-image-2.png" height={150} width={150} alt="image" />
        </div>

        <h1 className="z-[1] text-balance py-4 text-center text-3xl font-semibold leading-none tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          <EraserIcon className="inline size-7 sm:size-9 md:size-11 lg:size-14 mb-2 mr-2 stroke-3" />{' '}
          Background Remover
        </h1>
        <p className="z-[1] mb-12 text-center text-md tracking-tight text-muted-foreground md:text-xl max-w-2xl">
          Remove backgrounds from images in seconds with our AI-powered background remover. No
          design skills needed!
        </p>
        <BgRemoveBox />
      </div>
    </div>
  );
};

export default HeroImages;
