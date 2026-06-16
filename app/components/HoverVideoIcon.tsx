'use client';

import { useRef, useEffect } from 'react';

export default function HoverVideoIcon({ iconPath }: { iconPath: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const parentCard = video.closest('.quality-card');

    if (!parentCard) {
      console.warn("HoverVideoIcon could not find a parent with the class '.quality-card'");
      return;
    }

    const handleMouseEnter = () => {
      video.play().catch((err) => {
        console.log("Playback interrupted:", err);
      });
    };

    const handleMouseLeave = () => {
      video.pause();
      video.currentTime = 0;
    };

    parentCard.addEventListener('mouseenter', handleMouseEnter);
    parentCard.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      parentCard.removeEventListener('mouseenter', handleMouseEnter);
      parentCard.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={`${iconPath}`}
      muted
      playsInline
      className="w-7 h-7 bg-white object-contain transition-transform duration-300 group-hover:scale-110"
    />
  );
}