import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest, res: NextResponse) => {
  const data = [
    {
      title: "Decorative seam sneakers",
      slug: "Rounded toe. Flat. Decorative seams. Laces. Contrasting panel.",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/m8_c_01.jpg",
    },
    {
      title: "Shoulder bag with printed logo",
      slug: "Small. Crossbody bag. Logo print. Long adjustable strap.",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/m8_c_02.jpg",
    },
    {
      title: "Acetate frame sunglasses",
      slug: "The resulting material has the same properties as standard PC in overall flexibility",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/m8_c_03.jpg",
    },
    {
      title: "Raffia earrings",
      slug: "Large. Raffia details. Beaded detail. Festival Season.",
      src: "https://miniture.novaworks.net/wp-content/uploads/2023/10/m8_c_04.jpg",
    },
  ];

  return new NextResponse(JSON.stringify(data));
};
