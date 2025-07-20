import { cn } from "@/lib/utils";

export default function Button({
  children,
  onClick,
  variant = "dark",
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <button
      className={cn(
        "px-3.5 py-[15px] bg-black text-white font-bold rounded-md cursor-pointer hover:bg-gray-800 transition-all duration-300 ",
        variant === "light" && "bg-white text-black hover:bg-gray-100",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
