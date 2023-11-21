"use client";
import { Button } from "@nextui-org/button";
import ProductSize from "../ui/ProductSize";
import CircleColor from "../ui/CircleColor";
import { IProduct } from "@/interfaces";
import { useEffect, useState } from "react";
import Alert from "../Alert";
import { useQuery } from "react-query";
import fetchData, { axiosData } from "@/utils";
import Loading from "../Loaders/ProductLoader";

interface IProps {
  id: number;
}

const ProductCard = ({ id }: IProps) => {
  const [tempColor, setTempColor] = useState<string>("#F31260");
  const [selectedColor, setSelectedColor] = useState(0);

  const [selectedSize, setSelectedSize] = useState(3);
  const [tempSize, setTempSize] = useState<string>("L");

  const [count, setCount] = useState<number>(1);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const url = `/api/product/${id}`;
  const { data, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => await fetchData(url),
  });
  const product: IProduct[] = data; // Ensure product is an array
  
  // Ensure product is an array

  return (
    <div className="mx-auto ">
      <div className="flex-1 gap-4">
        {isLoading && <Loading />}
        {data &&
          product?.map((item, idx) => (
            <div key={idx}>
              <h2 className="text-lg font-bold capitalize">{item.name}</h2>
              <div className="mb-6 mt-2 flex gap-3">
                <span className="font-bold">${item.price}</span>
                <span className="text-default-600 line-through">
                  ${item.price + Math.ceil(item.price * 0.2)}{" "}
                </span>
                <span className="text-success">20% off</span>
              </div>
              <hr />
              <p className="text-sm text-default-500"> {item.desc}</p>
            </div>
          ))}
        <div className=" flex m-2 gap-2">
          <CircleColor
            tempColor={tempColor}
            setTempColor={setTempColor}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>
        <ProductSize
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          tempSize={tempSize}
          setTempSize={setTempSize}
        />

        <div className="mt-6 flex flex-col lg:flex-row  gap-6">
          <div className="flex items-center w-[150px] justify-between border-[1px] gap-4">
            <Button
              variant="light"
              size="sm"
              isIconOnly
              onClick={handleDecrease}
              type="button"
            >
              -
            </Button>
            <div>{count}</div>
            <Button
              variant="light"
              size="sm"
              isIconOnly
              onClick={handleIncrease}
              type="button"
              className=" "
            >
              +
            </Button>
          </div>
          {product?.map((item, idx) => (
            <div key={idx}>
              <Alert
                item={item}
                color={tempColor}
                size={tempSize}
                count={count}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
