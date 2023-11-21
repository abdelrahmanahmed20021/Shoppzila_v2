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
      <main className=" container mx-auto ">
        <div className="mt-12 padding-x max-width" id="discover">
          <div className="flex gap-[30px] flex-col justify-center items-center  lg:flex-row  mb-12 ">
            <SwipperPage />
            <TimerComponent />
          </div>
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
