import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest, res: NextResponse) => {
  const data = [
    {
      title: "Jackets & Coat",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/m7_cat_01.jpg",
    },
    {
      title: "Dress",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/m7_cat_02.jpg",
    },
    {
      title: "Women shoes",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/m7_cat_03.jpg",
    },
    {
      title: "Women bags",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/m7_cat_04.jpg",
    },
    {
      title: "Accessories",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/m7_cat_05.jpg",
    },
    {
      title: "Fine Jewellery",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/m7_cat_06.jpg",
    },
    {
      title: "Jackets & Coat",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/m7_cat_01.jpg",
    },
    {
      title: "Dress",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/m7_cat_02.jpg",
    },
    {
      title: "Women shoes",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/m7_cat_03.jpg",
    },
  ];

  return new NextResponse(JSON.stringify(data));
};
