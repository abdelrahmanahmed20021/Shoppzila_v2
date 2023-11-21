import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";

export default function CollectionPage() {
  return (
    <div className="container mx-auto  overflow-hidden ">
     <div className="max-widht padding-x ">
     <div className="   gap-4 grid lg:grid-cols-2  md:grid-col-1 justify-center items-center  py-4  ">
      <Card >
        <CardHeader className="absolute z-10 top-1 flex-col gap-2 !items-start">
          <p className=" bg-white rounded-full px-3 py-1 uppercase text-tiny font-normal lg:font-bold">
            Elegance in Knits
          </p>
          <h4 className="bg-white rounded-bl-full rounded-tr-full p-2 lg:font-medium text-sm lg:text-large">
            The Winter Wonderland Sweater
          </h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full cursor-pointer h-full object-cover"
          src="/images/m8_collection_01.webp"
        />
      </Card>
      <Card  >
        <CardHeader className="absolute z-10 bottom-1 right-1 flex-col  !items-end">
          <div className=" flex flex-col gap-2">
            <p className="  w-fit  bg-white rounded-full px-3 py-1 uppercase text-tiny font-normal lg:font-bold">
              Elegance in Knits
            </p>
            <h4 className="bg-white  rounded-bl-full rounded-tr-full p-2 lg:font-medium text-sm lg:text-large">
              The Winter Wonderland Sweater
            </h4>
          </div>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full cursor-pointer h-full object-cover"
          src="/images/m8_collection_02.webp"
        />
      </Card>
    </div>
     </div>
    </div>
  );
}
