"use client";

import IconItems from "@/components/_shared/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

export function BudgetIntroDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={() => onOpenChange(false)}
    >
      <Card
        className="mt-12mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-white border-none pt-0 pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <Image
            src="/images/popovers/media.png"
            alt="budget"
            width={500}
            height={500}
          />
        </div>

        <div className="space-y-4 sm:space-y-5 bg-white px-4 sm:px-5 py-5 sm:py-6 text-black">
          <Feature
            title="Set up annual budgets by account category"
            description="Allocate funds across income and expense lines with full visibility."
            icon="setting-4"
          />
          <Feature
            title="Track actuals vs budget in real time"
            description="See how your community is performing against plan, month by month."
            icon="trend-up"
          />
          <Feature
            title="Adjust figures and forecast with ease"
            description="Edit amounts, apply percentage changes, or roll forward last year's data—all in one place."
            icon="align-bottom"
          />

          <Button className="w-full rounded-full bg-black py-5 sm:py-6 text-white hover:bg-black/90 font-medium">
            Create Budget
          </Button>
        </div>
      </Card>
    </div>
  );
}

function Feature({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center space-x-3">
        <Image
          src={`/images/popovers/${icon}.svg`}
          alt="icon"
          width={24}
          height={24}
        />
        <div className="">
          {" "}
          <p className="text-base font-semibold text-[#191919]">{title}</p>
          <p className="text-xs text-[#606060]">{description}</p>
        </div>
      </div>
    </div>
  );
}
