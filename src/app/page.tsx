"use client";
import CollectionPage from "@/components/Collection";
import BoxPage from "./boxes/page";
import Products from "./products/page";
import ShopSkill from "@/components/ShopSkill";
import Categories from "./categories/page";
import SwipperPage from "@/components/SwipperPage";
import TimerComponent from "@/components/TimerComponent";

export default function Home() {
  return (
    <>
      <main className=" container  mx-auto  my-4">
        <div className="flex gap-[30px] flex-col lg:flex-row   max-width  ">
          <SwipperPage />
          <TimerComponent />
        </div>
      </main>
      <Categories />
      <Products />
      <BoxPage />
      <CollectionPage />
      <ShopSkill />
    </>
  );
}
