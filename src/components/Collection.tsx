import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

export default function CollectionPage() {
  return (
    <div className=" container mx-auto    gap-4 grid lg:grid-cols-8  md:grid-col-1 justify-center items-center  overflow-hidden py-4 lg:px-36 md:px-20 ">
    <Card className="col-span-12 sm:col-span-4 h-[500px]">
      <CardHeader className="absolute z-10 top-1 flex-col gap-2 !items-start">
        <p className="text-tiny  bg-white rounded-full px-3 py-1 uppercase font-bold">Elegance in Knits</p>
        <h4 className="bg-white  rounded-bl-full rounded-tr-full   px-3     font-medium text-large">The Winter Wonderland Sweater</h4>
      </CardHeader>
      <Image
      isZoomed
        removeWrapper
        alt="Card background"
        className="z-0 w-full cursor-pointer h-full object-cover"
        src="/images/m8_collection_01.webp"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[500px]">
    <CardHeader className="absolute z-10 bottom-1 right-1 flex-col  !items-end">
       <div className=" flex flex-col gap-2">
       <p className="text-tiny w-fit  bg-white rounded-full px-3 py-1 uppercase font-bold">Elegance in Knits</p>
        <h4 className="bg-white  rounded-bl-full rounded-tr-full   px-3  marker:  font-medium text-large">The Winter Wonderland Sweater</h4>
     
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
  );
}
