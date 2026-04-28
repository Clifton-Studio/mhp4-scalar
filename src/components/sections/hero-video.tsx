"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";

interface HeroVideoProps {
  compact?: boolean;
}

export function HeroVideo({ compact = false }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayback = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play();
      return;
    }

    video.pause();
  };

  return (
    <section className="relative overflow-hidden">
      <div className={cn("bordered-div-padding !pt-0", compact && "hero-video-compact")}>
        <div className="mx-auto w-full max-w-[1000px] overflow-hidden rounded-[24px] border p-1 shadow-lg md:rounded-[40px]">
          <button
            type="button"
            className="aspect-4/3 w-full cursor-pointer overflow-hidden rounded-[20px] bg-black text-left md:rounded-[36px]"
            onClick={togglePlayback}
            aria-label="Pause or play the demo video"
          >
            <video
              ref={videoRef}
              src="/videos/homepage/todoist-no-bg.mp4"
              title="Maestro demo"
              className="h-full w-full object-contain"
              autoPlay
              loop
              muted
              playsInline
            />
          </button>
        </div>
      </div>
    </section>
  );
}
