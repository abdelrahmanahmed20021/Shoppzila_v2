"use client";

import Products from "@/app/products/page";
import SwipperPage from "../SwipperPage";
import TimerComponent from "../TimerComponent";
import Categories from "../categories/page";
import BoxPage from "../boxes/page";
import CollectionPage from "../Collection";
import ShopSkill from "../ShopSkill";

interface IProps {}

const RoutesProvider = ({}: IProps) => {
  return (
    <div>
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
    </div>
  );
};

export default RoutesProvider;
