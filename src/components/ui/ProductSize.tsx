"use client";

import clsx from "clsx";

function ProductSize({tempSize, setTempSize,selectedSize, setSelectedSize}:any) {
  
  return (
    <div className="mx-2">
      <h1>Size : {tempSize} </h1>
      <ul className="flex gap-2 my-4">
    
    {["XS", "S", "M", "L", "XL"].map((size, index) => (
      <li key={size}>
        <button
          onClick={() => {
            setSelectedSize(index);
            setTempSize(size)
          }}
          className={clsx(
            "flex h-6 w-6 items-center justify-center rounded-full p-2 text-sm text-white  font-semibold transition-colors",
            {
              "bg-[#FFA458] text-white": selectedSize === index,
              "bg-[#D4D4D8]": selectedSize !== index,
            }
          )}
        >
          {size}
        </button>
      </li>
    ))}
  </ul>
    </div>
  );
}

export default ProductSize;
