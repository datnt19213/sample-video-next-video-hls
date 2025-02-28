"use client";
import {HLSPlayer} from "@/components/video-player";
import React, {useState} from "react";

const VideoPage: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>(
    "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"
  );

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Custom Video Player</h2>

      {/* Input để nhập link video */}
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className="border rounded p-2 w-full mb-4"
        placeholder="Nhập link video (MP4, M3U8, YouTube, Vimeo,...)"
      />
      <HLSPlayer src={videoUrl} />
    </div>
  );
};

export default VideoPage;
