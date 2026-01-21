"use client";
import { useState } from "react";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import IconItems from "../../_shared/icons";
import { BudgetIntroDialog } from "./popovers/budget-popup";
import { CalendarSheet } from "./popovers/full-page-calendar";
import { Menu, X } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

export default function Header() {
  const [openCalculator, setOpenCalculator] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);

  const [open, setOpen] = useState(false);

  const navIcons = [
    {
      icon: <IconItems type="calculator" size="lg" />,
      label: "Budgeting",
      onClick: () => setOpenCalculator(true),
    },
    {
      icon: <IconItems type="calendar" size="lg" />,
      label: "Calendar",
      onClick: () => setOpenCalendar(true),
    },
    { icon: <IconItems type="search" size="lg" />, label: "Search Activity" },
    { icon: <IconItems type="wallet" size="lg" />, label: "Payout Center" },
    { icon: <IconItems type="store" size="lg" />, label: "Marketplace" },
  ];

  return (
    <>
      <header className="bg-[#105B48] text-white border-b border-[#F4F4F5] py-2 px-4 sm:px-8 md:px-16 fixed top-0 left-0 right-0 z-50">
        <div className="flex h-12 sm:h-16 items-center justify-between">
          <Image
            src="/images/navbar-images/expert-logo.svg"
            alt="logo"
            width={200}
            height={200}
          />
          <div className="hidden md:flex items-center space-x-3 sm:space-x-6">
            {navIcons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Tooltip key={item.label}>
                  <TooltipTrigger>
                    <button
                      key={index}
                      onClick={item.onClick}
                      className="text-white hover:text-white/80 transition-colors cursor-pointer"
                      aria-label={item.label}
                    >
                      {IconComponent}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Avatar className="text-base sm:text-[23px] bg-white text-[#105B48] rounded-full h-8 w-8 sm:h-10 sm:w-10 leading-[130%] font-medium">
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-100 p-3 ml-4">
                <div className="">
                  <p className="text-base font-semibold text-[#191919]">
                    Dylan Frank
                  </p>
                  <p className="text-xs text-[#606060]">
                    dylanfran96@gmail.com
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex md:hidden">
            <button
              className="text-white hover:text-white/80 transition-colors cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {!open ? <Menu /> : <X />}
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div className="bg-[#105B48] h-[60vh] w-full mt-16 fixed top-0 z-50">
          {" "}
          <div className="w-[80%] my-6">
            {" "}
            {navIcons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="text-white hover:text-white/80 transition-colors cursor-pointer block mx-[10%] mt-5"
                  aria-label={item.label}
                >
                  <span className="flex items-center space-x-4">
                    {IconComponent} <span>{item.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-gray-100 p-3 w-[80%] rounded-xl">
              <div className="">
                <p className="text-base font-semibold text-[#191919]">
                  Dylan Frank
                </p>
                <p className="text-xs text-[#606060]">dylanfran96@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <BudgetIntroDialog
        open={openCalculator}
        onOpenChange={setOpenCalculator}
      />
      <CalendarSheet open={openCalendar} onOpenChange={setOpenCalendar} />
    </>
  );
}
