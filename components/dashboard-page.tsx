"use client";

import HomeHeader from "@/components/navbar/navigation-header";
import DashboardSection from "@/components/dashboard/dasboard-section";
import { FeaturedListings } from "@/components/listings";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <HomeHeader />

      {/* Main Content */}
      <main className="py-3 md:py-6 px-4 md:px-16 space-y-6">
        <h1 className="text-[#191919] text-xl font-semibold leading-[100%]">
          Welcome, Ahmed
        </h1>
        <DashboardSection />

        {/* Listings */}
        <FeaturedListings />
      </main>
    </div>
  );
}
