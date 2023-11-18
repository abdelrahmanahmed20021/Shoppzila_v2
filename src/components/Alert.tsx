"use client";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { AlertCircleIcon } from "lucide-react";
import { IProduct } from "@/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCartAction } from "@/store/slices/cart/cartSlice";
import { RootState } from "@/store/store";
interface Iprop {
  item: IProduct;
  color: any;
  size: any;
  count: any;
}
export default function Alert({ item, color, size, count }: Iprop) {
  const dispatch = useDispatch();
 
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    // Set up a timeout to close the modal after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      onClose(); // Trigger the onClose callback to close the modal
    }, 500);

    // Clean up the timeout when the component unmounts or when the modal is closed manually
    return () => clearTimeout(timeoutId);
  }, [isOpen, onClose]);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          onClick={() => {
            dispatch(
              addItemToCartAction({
                ...item,
                color: color,
                size: size,
                count: count,
              })
            );
          }}
          className="bg-[#FFA458] border-[#FFA458] px-8 text-white hover:bg-white hover:text-[#FFA458] "
          variant="bordered"
          radius="md"
          color="warning"
          onPress={onOpen}
        >
          Add To Cart
        </Button>
      </div>
      <Modal backdrop="opaque" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="flex felx-col justify-center items-center">
                <AlertCircleIcon />
                <p>Item Added Succesfully !!!</p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
