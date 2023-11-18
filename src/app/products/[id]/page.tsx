import ProductCard from "@/components/Products/ProductCard";
import { IProduct } from "@/interfaces";
import fetchData from "@/utils";
import RelatedProducts from "./RelatedProducts";

interface IProps {
  params: {
    id: number;
  };
}

const page = async ({ params }: IProps) => {
  const { id } = params;

  const url = `https://shoppzila.vercel.app/api/product/${id}`;
  const product: IProduct[] = await fetchData(url);

  return (
    <div className=" container mx-auto my-6">
      <section>
        {product?.map((item, idx) => (
          <ProductCard key={idx} item={item} />
        ))}
      </section>
      <section>
        <RelatedProducts />
      </section>
    </div>
  );
};

export default page;
