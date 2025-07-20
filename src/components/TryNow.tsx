"use client";
import Image, { StaticImageData } from "next/image"; // 或使用普通 <img> 标签
import { useState } from "react";
import step1 from "@/assets/png/step1.png";
import step2 from "@/assets/png/step2.png";
import step3 from "@/assets/png/step3.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function TryNow({
  extentionUrl,
  children,
}: {
  extentionUrl: string;
  children: React.ReactNode;
}) {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild className="">
        <a href={extentionUrl} download>
          {children}
        </a>
      </DialogTrigger>
      <DialogContent className="">
        <StepGuide close={() => setOpenDialog(false)} />
      </DialogContent>
    </Dialog>
  );
}

type Step = {
  title: string;
  description: string;
  image: string | StaticImageData;
};

const steps: Step[] = [
  {
    title: "First",
    description:
      "Open the Chrome browser and go to the extensions page: chrome://extensions",
    image: step1,
  },
  {
    title: "Second",
    description: "Enable 'Developer mode' in the top right corner of the page.",
    image: step2,
  },
  {
    title: "Finally",
    description:
      "Unzip the downloaded package, then click 'Load unpacked' and select the extracted mentiontab folder.",
    image: step3,
  },
];

function StepGuide({ close }: { close?: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];

  const isLast = currentStep === steps.length - 1;

  return (
    <div className="w-full  mx-auto p-6 rounded-xl text-center ">
      {/* 标题 */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h2>

      {/* 步骤导航 */}
      <div className="flex justify-center items-center gap-2 mb-6 text-sm font-medium">
        {steps.map((s, idx) => (
          <StepIndicator
            key={idx}
            active={idx === currentStep}
            onClick={() => {
              setCurrentStep(idx);
            }}
          >
            {s.title}
          </StepIndicator>
        ))}
      </div>

      {/* 描述 */}
      <p className="text-gray-700 mb-6">{step.description}</p>

      {/* 图片 */}
      <div className="mb-6">
        <Image
          src={step.image}
          alt={step.title}
          className="rounded-xl border border-gray-200"
        />
      </div>

      {/* 操作按钮 */}
      <button
        onClick={() => (isLast ? close?.() : setCurrentStep((p) => p + 1))}
        className="w-2/5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        {isLast ? "Finish" : "Next Step"}
      </button>
    </div>
  );
}

function StepIndicator({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <span
      onClick={onClick}
      className={`px-3 py-1 cursor-pointer rounded-full ${
        active ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-600"
      }`}
    >
      {children}
    </span>
  );
}
