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
      <main className=" container mx-auto overflow-hidden">
        <div className="mt-12 padding-x max-width" id="discover">
          <section>
            <div className="flex gap-[30px] flex-col lg:flex-row  ">
              <SwipperPage />
              <TimerComponent />
            </div>
          </section>
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
