import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { IProduct } from "@/interfaces";
import { useDispatch } from "react-redux";
import { removeItemFromCartAction } from "@/store/slices/cart/cartSlice";
import { Trash } from "lucide-react";

interface IProps {
  product: IProduct;
}

export default function ShopingCartItem({ product }: IProps) {
  const dispatch = useDispatch();

  const handleRemoveItem = (itemToRemove: IProduct) => {
    dispatch(removeItemFromCartAction(itemToRemove));
  };

  return (
    <Card
      className="border-none bg-background/80 text-slate-950 dark:bg-default-100/70 overflow-hidden  font-light text-sm  max-w-[610px]"
      shadow="lg"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              height={300}
              shadow="md"
              src={product.src}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold ">{product.name}</h3>
                <p className="flex items-center gap-2">
                  <span>
                    Color :{" "}
                    {product.color === "#F31260"
                      ? "Red"
                      : product.color === "#18C964"
                      ? "Green"
                      : product.color === "#58646D"
                      ? "Gray"
                      : product.color === "#FFA458"
                      ? "Orange"
                      : ""}{" "}
                  </span>
                  <span
                    className={
                      " flex  w-[15px] h-[15px] rounded-full  cursor-pointer"
                    }
                    style={{ backgroundColor: product.color }}
                  ></span>
                </p>
                <p className=" ">Size : {product.size}</p>

                <div className=" flex justify-between  items-center gap-4">
                  <p className=" ">
                    count : {product.count}x{product.price} $
                  </p>

                  <Button
                    isIconOnly
                    color="danger"
                    onClick={() => handleRemoveItem(product)}
                  >
                    <Trash />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
