'use client';

import { useRef } from 'react';

import { cn } from '@/lib/utils';

export const Hover3dEffect = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const isPointerInside = useRef(false);
  const refElement = useRef<HTMLDivElement>(null);
  const state = useRef({
    rotate: {
      x: 0,
      y: 0,
    },
  });

  const updateStyles = () => {
    if (refElement.current) {
      const { rotate } = state.current;
      refElement.current?.style.setProperty('--r-x', `${rotate.x}deg`);
      refElement.current?.style.setProperty('--r-y', `${rotate.y}deg`);
    }
  };
  return (
    <div
      ref={refElement}
      className={cn("relative isolate [contain:layout_style] [perspective:600px]", className)}
      onPointerEnter={() => {
        isPointerInside.current = true;
      }}
      onPointerLeave={() => {
        isPointerInside.current = false;
        if (refElement.current) {
          refElement.current?.style.setProperty('--r-x', `0deg`);
          refElement.current?.style.setProperty('--r-y', `0deg`);
        }
      }}
      onPointerMove={event => {
        const rotateFactor = 0.4;
        const rect = event.currentTarget.getBoundingClientRect();
        const position = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
        const percentage = {
          x: (100 / rect.width) * position.x,
          y: (100 / rect.height) * position.y,
        };
        const delta = {
          x: percentage.x - 50,
          y: percentage.y - 50,
        };

        const { rotate } = state.current;
        rotate.x = -(delta.x / 3.5);
        rotate.y = delta.y / 2;
        rotate.x *= rotateFactor;
        rotate.y *= rotateFactor;

        updateStyles();
      }}
    >
      <div
        className={cn(
          'ease-[var(--easing)] duration-[0.2s] duration-[var(--duration)] grid h-full origin-center transition-transform ease-out [transform:rotateY(var(--r-x))_rotateX(var(--r-y))]',
        )}
      >
        {children}
      </div>
    </div>
  );
};
