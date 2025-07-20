"use client";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/gradient-hero-prerender.avif";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <div
      className={cn(
        "relative flex flex-wrap md:h-[44rem] justify-start md:mx-6 gap-4 pt-12 overflow-hidden ",
        "rounded-2xl justify-between gap-6 px-10 pt-24 items-start"
      )}
    >
      <Image
        src={heroBg}
        alt="hero"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-50 flex flex-col gap-4 md:max-w-[40%]">
        <h1 className="text-[5rem] text-white font-semibold leading-none -tracking-4 text-balance ">
          Let ChatGPT see your tabs
        </h1>
        <p className="text-lg text-white font-medium leading-tight text-balance">
          MentionTab lets ChatGPT access exactly what you're seeing — even
          private, logged-in pages. No subscriptions. 100% open-source and
          privacy-first.
        </p>
        <div className="flex gap-4 mt-4">
          <Button>Try it now</Button>
          <Button
            variant="light"
            onClick={() => {
              window.location.href = "#examples";
            }}
          >
            View examples
          </Button>
        </div>
      </div>
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        className="w-full md:w-[52%] object-cover z-10 rounded-2xl"
      />
    </div>
  );
}
