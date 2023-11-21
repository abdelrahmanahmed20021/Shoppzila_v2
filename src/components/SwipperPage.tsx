"use client";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button, Card, CardBody, Image } from "@nextui-org/react";

// Use const or function before the component name
const SwipperPage = () => {
  return (
    <div className="lg:w-[65%] w-full cursor-pointer ">
      <Swiper
        className=" rounded-xl"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Card>
            <CardBody className="absolute z-10 top-1 flex-col w-[90%] lg:w-[50%]  gap-2 !items-start">
              <p className="text-[10px] font-normal px-3 py-1 capitalize  ">
                EmpowerHer Suits
              </p>
              <h4 className=" px-3 font-normal  lg:font-extrabold   text-[15px] lg:text-[30px]">
                Classic Elegance <br /> for Women
              </h4>
              <p className="text-sm px-3 py-1   hidden sm:flex">
                Naming a collection of womens suit jackets <br />
                can help convey the style and identity of your brand.
              </p>
              <Button
                radius="full"
                className="text-[white] bg-[#FFA458] w-12 h-5 lg:w-28 lg:h-12  "
              >
                Shop now
              </Button>
            </CardBody>
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0  w-fit cursor-pointer h-full object-cover lg:h-[450px] rounded-lg"
              src="/images/carousel/m8_slide_01.webp"
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <CardBody className="absolute z-10 top-1 flex-col w-[90%] lg:w-[50%]  gap-2 !items-start">
              <p className="text-[10px] font-normal px-3 py-1 capitalize  ">
                EmpowerHer Suits
              </p>
              <h4 className=" px-3 font-normal  lg:font-extrabold   text-[15px] lg:text-[30px]">
                Classic Eleganc <br /> for Women
              </h4>
              <p className="text-sm px-3 py-1   hidden sm:flex">
                Naming a collection of womens suit jackets <br />
                can help convey the style and identity of your brand.
              </p>
              <Button
                radius="full"
                className="text-[white] bg-[#FFA458] w-12 h-5 lg:w-28 lg:h-12 "
              >
                Shop now
              </Button>
            </CardBody>
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0  w-fit cursor-pointer h-full object-cover lg:h-[450px] rounded-lg"
              src="/images/carousel/m8_slide_02.webp"
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <CardBody className="absolute z-10 top-1 flex-col w-[90%] lg:w-[50%]  gap-2 !items-start">
              <p className="text-[10px] font-normal px-3 py-1 capitalize  ">
                EmpowerHer Suits
              </p>
              <h4 className=" px-3 font-normal  lg:font-extrabold   text-[15px] lg:text-[30px]">
                Classic Eleganc <br /> for Women
              </h4>
              <p className="text-sm px-3 py-1   hidden sm:flex">
                Naming a collection of womens suit jackets <br />
                can help convey the style and identity of your brand.
              </p>
              <Button
                radius="full"
                className="text-[white] bg-[#FFA458] w-12 h-5 lg:w-28 lg:h-12  "
              >
                Shop now
              </Button>
            </CardBody>
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0  w-fit cursor-pointer h-full object-cover lg:h-[450px] rounded-lg"
              src="/images/carousel/m8_slide_03.webp"
            />
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwipperPage;
