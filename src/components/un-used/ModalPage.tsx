"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Badge,
  Image,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import { IProduct } from "@/interfaces";
import { RootState } from "@/store/store";
import ShopingCartItem from "../ShopingCartItem";
import { ShoppingBasket, ShoppingCart } from "lucide-react";

export default function ModalPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  const cart: IProduct[] = useSelector(
    (state: RootState) => state.cart.cartItem
  );

  const calculateTotalSalary = () => {
    return cart.reduce((total, item) => {
      // Assuming each item has 'price' and 'qty' properties
      return total + item.price * item.count;
    }, 0);
  };

  return (
    <div className="flex flex-col  gap-2">
      <Button variant="light" onPress={onOpen}>
        <Badge
          content={cart.length}
          color="warning"
          className="mt-2"
          shape="circle"
        >
          <ShoppingCart fill="#A2745C" className=" mt-3 text-[#A2745C]" />
        </Badge>
      </Button>

      <RadioGroup
        orientation="horizontal"
        value={modalPlacement}
        onValueChange={setModalPlacement}
      ></RadioGroup>
      <Modal
        className=" min-h-[90vh] "
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="outside"
        
      >
        <ModalContent className="relative  ">
          {(onClose) => (
            <>
              <div className="absolute">
                <Image
                  width={300}
                  height={300}
                  alt="second banner"
                  className="  my-20 -z-50  w-[400px] h-[400px] opacity-10"
                  src="/assets/no-product.png"
                  style={{
                    transition: "all 0.3s ease-in-out 0s",
                    transformOrigin: "center center",
                  }}
                />
              </div>
              <ModalHeader className="flex  gap-1">
                Shopping Cart List  <ShoppingBasket/>
              </ModalHeader>
              {cart.map((product) => (
                <ModalBody key={product.name}>
                  <ShopingCartItem product={product} />
                </ModalBody>
              ))}
              <ModalFooter className="flex absolute bottom-0 left-0 ">
                <div className="flex justify-between items-center">
                  <h1>Total Salary :</h1>
                  <p>${calculateTotalSalary()}</p>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
