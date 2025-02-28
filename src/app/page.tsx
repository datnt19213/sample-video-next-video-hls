"use client";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full h-24 p-6 flex items-center justify-center">
      <button
        onClick={() => router.push("/videos")}
        className="border border-gray-200 bg-white h-10 px-4 py-2 rounded-lg hover:bg-[#27272A] hover:text-white text-[#27272A] transition-all"
      >
        Go
      </button>
    </div>
  );
}
