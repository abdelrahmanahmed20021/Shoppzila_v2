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
import { Card, CardFooter, Image } from "@nextui-org/react";
import { ICategory } from "@/interfaces";

interface IProps {
  category: ICategory;
  index: number;
  img: any;
}

// Use const or function before the component name
const CategorySlider = ({ category, index, img }: IProps) => {
  const images = [
    // Your array of image sources
    img,
    // Add more images as needed
  ];

  return (
    <div className=" w-[100vw] cursor-pointer ">
      <Swiper
        className=" rounded-full"
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
        initialSlide={index} // Set initial slide index
      >
        {images.map((src) => (
          <SwiperSlide key={index}>
            <Card>
              <Image
                isZoomed
                removeWrapper
                alt="Card background"
                className="z-0  w-28 cursor-pointer h-28 rounded-full"
                src={src}
              />
              <CardFooter className="flex justify-center items-center">
                <p className=" text-center hover:text-[#FFA458] ">
                  {category.title}
                </p>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
