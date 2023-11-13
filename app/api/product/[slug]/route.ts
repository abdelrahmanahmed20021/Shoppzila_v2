import { NextRequest, NextResponse } from "next/server";

import { paginate } from "@/func/Paginate";

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;
  const data = [
    {
      name: "Classic BLACK Shirt Jacket",
      price: "299.00",
      desc: "Product categories and tags work in much the same way as normal categories and tags you have when writing posts in WordPress. They can be created, edited, and selected at any time.",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_01_1-700x700.jpg",
      subSrc:
        "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_01_2-700x700.jpg",
    },
    {
      name: "Vision Patterned Long Sleeve",
      price: "99.99",
      desc: "Product categories and tags work in much the same way as normal categories and tags you have when writing posts in WordPress. They can be created, edited, and selected at any time.",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_02_1-700x700.jpg",
      subSrc:
        "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_02_2-700x700.jpg",
    },
    {
      name: "Classic Patterned Long Sleeve",
      price: "129.99",
      desc: "Product categories and tags work in much the same way as normal categories and tags you have when writing posts in WordPress. They can be created, edited, and selected at any time.",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_03_1-700x700.jpg",
      subSrc:
        "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_03_2-700x700.jpg",
    },
    {
      name: "Shirt Neck Regular Long Sleeve",
      price: "139.99",
      desc: "Product categories and tags work in much the same way as normal categories and tags you have when writing posts in WordPress. They can be created, edited, and selected at any time.",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_04_1-700x700.jpg",
      subSrc:
        "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_04_2-700x700.jpg",
    },
    {
      name: "Turtle Neck Regular Long Sleeve",
      price: "137.99",
      desc: "Product categories and tags work in much the same way as normal categories and tags you have when writing posts in WordPress. They can be created, edited, and selected at any time.",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_05_1-700x700.jpg",
      subSrc:
        "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_05_2-700x700.jpg",
    },
    {
      name: "Modest Front Buttoned Plaid Long Sleeve",
      price: "239.00",
      desc: "Product categories and tags work in much the same way as normal categories and tags you have when writing posts in WordPress. They can be created, edited, and selected at any time.",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_06_1-700x700.jpg",
      subSrc:
        "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_06_2-700x700.jpg",
    },
    {
      name: "Vision Plaid Long Sleeve",
      price: "125.00",
      desc: "Product categories and tags work in much the same way as normal categories and tags you have when writing posts in WordPress. They can be created, edited, and selected at any time.",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_07_1-700x700.jpg",
      subSrc:
        "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_07_2-700x700.jpg",
    },
    {
      name: "Classic Hooded Regular Long Sleeve",
      price: "432.00",
      desc: "Product categories and tags work in much the same way as normal categories and tags you have when writing posts in WordPress. They can be created, edited, and selected at any time.",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_08_1-700x700.jpg",
      subSrc:
        "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_08_2-700x700.jpg",
    },
  ];

  if (Number(slug) < data.length) {
    return new NextResponse(JSON.stringify(paginate(data, 1, Number(slug))));
  }
  return new NextResponse(JSON.stringify({ message: "Not Found" }));
};
