import HeaderSection from "@/components/headerSection";
import Main from "@/components/main";
import RoomSkeleton from "@/components/skeletons/roomSkeleton";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Rooms & Rates",
  description: "Choose your best room today",
};

function RoomPage() {
  return (
    <div>
      <HeaderSection
        title="Rooms & Rates"
        subTitle="Lorem ipsum dolor sit amet."
      />
      <div className="">
        <Suspense fallback={<RoomSkeleton />}>
          <Main />
        </Suspense>
      </div>
    </div>
  );
}

export default RoomPage;
