"use client";

import Video from "next-video";
import {useEffect, useRef} from "react";
import Hls from "hls.js";

export const HLSPlayer = ({src}: {src: string}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (Hls.isSupported() && videoRef.current) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
    } else if (videoRef.current?.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = src;
    }
  }, [src]);

  return (
    <Video
      ref={videoRef}
      controls
      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
    />
  );
};
