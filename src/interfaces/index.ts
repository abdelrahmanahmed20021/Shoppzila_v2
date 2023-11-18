export interface ICategory {
  title: string;
  src: string;
}

export interface IProduct {
  name: string;
  price: number;
  src: string;
  subSrc: string;
  desc?: string;
  qty: number;
  color: string;
  size: string;
  count: number;
  // count: number;
}
export interface IBox {
  title: string;
  slug: string;
  src: string;
}
export interface FooterColumn {
  title: string;
  links: string[];
}
