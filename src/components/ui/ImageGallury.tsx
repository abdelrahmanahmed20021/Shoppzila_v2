"use client";

import { Image } from "@nextui-org/react";
import { Tab } from "@headlessui/react";
import { images } from "@/constants";

interface IProps {}

const ImageGallury = ({}: IProps) => {
  return (
    <Tab.Group
      as="div"
      className="flex flex-col-reverse justify-center items-center"
    >
      {/* Image selector */}
      <div className="  mt-6  w-full ">
        <Tab.List className="grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {images.map((image) => (
            <Tab
              key={image.src}
              className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-stone-900 hover:bg-stone-50 focus:outline-none"
            >
              {({ selected }) => (
                <>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <Image
                  isZoomed
                      alt=""
                      src={image.src}
                      className={` ${
                        selected ? " opacity-30 " : " opacity-10"
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
        {images.map((image) => (
          <Tab.Panel key={image.src}>
            <Image
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
