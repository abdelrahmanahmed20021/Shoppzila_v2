import { FooterColumn } from "@/interfaces";

export const colorList = ["#F31260", "#18C964", "#58646D", "#FFA458"];

export const navLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Shop", url: "/about" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "Contact Us", url: "/contact" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Quick links",
    links: ["My account", "Shopping Cart", "Wishlist", "Product Compare"],
  },
  {
    title: "Information",
    links: [
      "Privacy policy",
      " Refund policy",
      "Shipping & Return",
      "Term & conditions",
    ],
  },
];
