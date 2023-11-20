"use client";

import { Fragment, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import { Dialog, Transition } from "@headlessui/react";
import { IProduct } from "@/interfaces";

import ShopingCartItem from "./ShopingCartItem";
import { Button } from "@nextui-org/button";
import { X } from "lucide-react";

interface IProps {
  open: any;
  setCartSliderIsOpen: any;
  cart: IProduct[];
}
const CartSlider = ({ open, setCartSliderIsOpen, cart }: IProps) => {
  const calculateTotalSalary = () => {
    return cart.reduce((total, item) => {
      // Assuming each item has 'price' and 'qty' properties
      return total + item.price * item.count;
    }, 0);
  };

  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 cursor-pointer"
          onClose={setCartSliderIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            
                            Shopping cart 
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <Button
                               variant="light"
                              className="-m-2 p-2 "
                              onClick={() => setCartSliderIsOpen(false)}
                            >
                              <X/>
                            </Button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root relative">
                            <div className="absolute">
                              <Image
                                width={300}
                                height={300}
                                alt="second banner"
                                className="  my-20 -z-50  w-[400px] h-[400px] opacity-80"
                                src="/assets/no-product.png"
                                 
                              />
                            </div>
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cart.map((product) => (
                                <li key={product.name}>
                                  <ShopingCartItem product={product} />
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>{calculateTotalSalary()} $</p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default CartSlider;
