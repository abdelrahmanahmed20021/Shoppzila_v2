"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";

// Use const or function before the component name
const SwipperPage = () => {
  return (
    <div className="lg:w-[65%] w-full cursor-pointer">
      <Swiper
        className=""
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true} // Add autoplay options
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Card>
            <CardBody className="absolute z-10 top-1 flex-col w-[50%] p-6 gap-2 !items-start">
              <p className="text-tinyrounded-full px-3 py-1 uppercase  ">
                EmpowerHer Suits
              </p>
              <h4 className=" rounded-bl-full rounded-tr-full   px-3  font-extrabold text-[30px]">
                Classic Elegance <br /> for Women
              </h4>
              <p className="text-sm px-3 py-1  font-thin hidden sm:flex">
              Naming a collection of womens suit jackets <br />
              can help convey the style and identity of your brand.


              </p>
             <Button radius="full"   className="text-[white] bg-[#FFA458] px-4 py-1" >Shop now</Button>
            </CardBody>
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0  w-fit cursor-pointer h-full object-cover"
              src="/images/carousel.png"
            />
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <CardHeader className="absolute z-10 top-1 flex-col gap-2 !items-start">
              <p className="text-tiny  bg-white rounded-full px-3 py-1 uppercase font-bold">
                Elegance in Knits
              </p>
              <h4 className="bg-white  rounded-bl-full rounded-tr-full   px-3     font-medium text-large">
                The Winter Wonderland Sweater
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0  w-fit cursor-pointer h-full object-cover"
              src="/images/carousel-3.png"
            />
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <CardHeader className="absolute z-10 top-1 flex-col gap-2 !items-start">
              <p className="text-tiny  rounded-full px-3 py-1 uppercase ">
                EmpowerHer Suits
              </p>
              <h4 className="bg-white  rounded-bl-full rounded-tr-full   px-3     font-medium text-large">
                The Winter Wonderland Sweater
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0  w-fit cursor-pointer h-full object-cover"
              src="/images/carousel.png"
            />
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwipperPage;