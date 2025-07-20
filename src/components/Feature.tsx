import heroBg from "@/assets/gradient-hero-prerender.avif";
import Image from "next/image";

export default function Feature({
  title,
  description,
  video,
}: {
  title: string;
  description: string;
  video: string;
}) {
  return (
    <div className="flex flex-col gap-6 items-center md:px-14 box-border w-full">
      <div className="flex flex-col gap-4 w-full items-center">
        <h2 className="text-[3rem] leading-[3.375rem] font-semibold">
          {title}
        </h2>
        <p className="text-xl text-gray-600 md:text-1.5xl/[1.6875rem] text-balance ">
          {description}
        </p>
      </div>
      <div className="flex flex-col justify-end relative w-full h-[36rem] rounded-2xl">
        <Image
          src={heroBg}
          alt="hero"
          className="absolute rounded-2xl  inset-0 h-full w-full object-cover"
        />
        <video
          src={video}
          autoPlay
          loop
          muted
          controls
          className="relative self-center  h-[92%] object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
