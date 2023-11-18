import { FooterColumn } from "@/interfaces";

export default async function fetchData(url: string) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}




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
  }
];
