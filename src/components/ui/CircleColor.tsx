"use client";

import { colorList } from "@/constants";
import clsx from "clsx";

 
const CircleColor = ({tempColor, setTempColor,selectedColor, setSelectedColor}: any) => {
  
  return (
    <div>
      <h1> Color :{
      tempColor==="#F31260"?"Red":
      tempColor==="#18C964"?"Green":
      tempColor==="#58646D"?"Gray":
      tempColor==="#FFA458"?"Orange":""
      } </h1>
      <div className=" flex  items-center  gap-2">
        {colorList.map((color, index) => (
          <span
            key={color}
            className={clsx(
              " flex rounded-full justify-center items-center bg-slate-600 text-white   cursor-pointer",
              {
                "h-8 w-8": selectedColor === index,
                "h-6 w-6": selectedColor !== index,
              }
            )}
            style={{ backgroundColor: color }}
            onClick={() => {
              setTempColor(color);
              setSelectedColor(index);
            }}
          >
            {selectedColor === index ? " ✔" : ""}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CircleColor;
