"use client";

import { Tab } from "@headlessui/react";
import img1 from "../../../public/images/cards/1.jpg";
import img2 from "../../../public/images/cards/2.jpg";
import img3 from "../../../public/images/cards/3.jpg";
import img4 from "../../../public/images/cards/4.jpg";
import img5 from "../../../public/images/cards/5.jpg";
import img6 from "../../../public/images/cards/6.jpg";
import img7 from "../../../public/images/cards/7.jpg";
import img8 from "../../../public/images/cards/8.jpg";
import img9 from "../../../public/images/cards/9.jpg";
import img10 from "../../../public/images/cards/10.jpg";
import Image from "next/image";

interface IProps {}

const ImageGallury = ({}: IProps) => {
  const images = [
    { src: img1, alt: "img1" },
    { src: img2, alt: "img2" },
    { src: img3, alt: "img3" },
    { src: img4, alt: "img4" },
    { src: img5, alt: "img5" },
    { src: img6, alt: "img6" },
    { src: img7, alt: "img7" },
    { src: img8, alt: "img8" },
    { src: img9, alt: "img9" },
    { src: img10, alt: "img10" },
  ];
  return (
    <Tab.Group
      as="div"
      className="flex flex-col-reverse justify-center items-center"
    >
      {/* Image selector */}
      <div className="  mt-6  w-full ">
        <Tab.List className="grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {images.map((image,index) => (
            <Tab
              key={index}
              className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-stone-900 hover:bg-stone-50 focus:outline-none"
            >
              {({ selected }) => (
                <>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <Image
                       width={200}
                       height={200}
                      alt=""
                      src={image.src}
                      className={` ${
                        selected ? " opacity-100 " : " opacity-50"
                      }  h-full w-full object-cover object-center `}
                    />
                  </span>
                  <span
                    className={`${
                      selected
                        ? "ring-sky-500 "
                        : "ring-transparent bg-slate-400 opacity-10"
                    }
                  "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                `}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="aspect-w-1 aspect-h-1 w-full ">
        {images.map((image,index) => (
          <Tab.Panel key={index}>
            <Image
            width={200}
            height={200}
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover object-center sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ImageGallury;
