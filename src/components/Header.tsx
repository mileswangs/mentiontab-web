"use client";
import { cn } from "@/lib/utils";
import Button from "./Button";
import github from "@/assets/svg/github.svg";
import mentiontab from "@/assets/svg/MENTIONTAB.svg";
import twitter from "@/assets/svg/twitter.svg";
import logo from "@/assets/png/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import hamburger from "@/assets/svg/hamburger.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { extentionUrl } from "@/lib/constant";
import TryNow from "./TryNow";

const Header = () => {
  const [highlight, setHighlight] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 30) {
        setHighlight(true);
      } else {
        setHighlight(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="fixed top-4 z-1000 w-full lg:top-6">
      <div className="container box-border !max-w-[1672px] px-2 md:!px-9">
        <div
          className={cn(
            "relative flex md:h-[4rem] w-full items-center justify-between rounded-lg border border-transparent px-2 py-1.5 transition-all duration-300",
            "lg:grid-cols-[1fr_auto_1fr] lg:grid lg:rounded-2xl lg:py-[0.4375rem] lg:pr-[0.4375rem]",
            highlight && "bg-white"
          )}
        >
          <a className="flex items-center gap-2" href="/">
            <Image src={logo} alt="mentiontab" className="size-8" />
            <Image src={mentiontab} alt="mentiontab" />
          </a>
          <ul className="hidden md:flex items-center gap-8 text-gray-600">
            <li>
              <a
                href="#examples"
                className="hover:bg-gray-200 rounded-md font-bold px-3 py-2 transition-all duration-300"
              >
                Examples
              </a>
            </li>
          </ul>
          <div className="col-start-3 hidden w-full justify-end gap-1 lg:flex items-center">
            <a
              href="https://x.com/mileswangs"
              className="hover:bg-gray-200 rounded-md px-2 py-1 transition-all duration-300"
            >
              <Image src={twitter} alt="x" className="size-7" />
            </a>
            <a
              href="https://github.com/mileswangs/mentiontab"
              className="hover:bg-gray-200 rounded-md px-2 mr-2 py-1 transition-all duration-300"
            >
              <Image src={github} alt="github" className="size-7" />
            </a>
            <TryNow extentionUrl={extentionUrl}>
              <Button className="py-2.5">try it now</Button>
            </TryNow>
          </div>

          <div className="md:hidden relative">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image src={hamburger} alt="hamburger" className="size-7" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>
                  <a href="#examples">Examples</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://github.com/mileswangs/mentiontab">GitHub</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://x.com/mileswangs">twitter</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
