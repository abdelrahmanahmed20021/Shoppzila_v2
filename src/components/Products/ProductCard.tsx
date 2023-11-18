"use client";

import { Button } from "@nextui-org/button";
import ProductSize from "../ui/ProductSize";
import CircleColor from "../ui/CircleColor";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Card,
  CardBody,
  Image,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import { IProduct } from "@/interfaces";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCartAction } from "@/store/slices/cart/cartSlice";
import Alert from "../Alert";

interface IProps {
  item: IProduct;
}

const ProductCard = ({ item }: IProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
  const dispatch = useDispatch();

  return (
    <div>
      <section className=" container flex flex-col  justify-start ">
        <Breadcrumbs>
          <BreadcrumbItem>
            <Button variant="light">Home</Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button variant="light">Shop</Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button variant="light" color="warning">
              {item.name}
            </Button>
          </BreadcrumbItem>
        </Breadcrumbs>
        <div className="  flex flex-col items-center justify-center">
          <Card className=" gap-10" shadow="none">
            <CardBody className="overflow-visible shadow-none py-2">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                
              <Image
                  alt="Shoe"
                  className="  object-cover"
                  width={500}
                  height={400}
                  src={item.src}
                />

                <div className="flex-1 gap-4">
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

                  <div className="mt-6 flex gap-6">
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

                    <Alert
                      item={item}
                      color={tempColor}
                      size={tempSize}
                      count={count}
                    />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
