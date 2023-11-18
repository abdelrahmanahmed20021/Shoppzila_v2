import ProductsCard from "@/components/Products/ProductsCard";
import { IProduct } from "@/interfaces";
import fetchData from "@/utils";

interface IProps {}

const RelatedProducts = async ({}: IProps) => {
  const url = "https://shoppzila.vercel.app/api/products";
  const allProducts: IProduct[] = await fetchData(url);
  return (
    <div>
      <main className=" container mx-auto  overflow-hidden">
        <div className="mt-12 padding-x max-width" id="discover">
          <h1 className="text-4xl text-center my-4">Related Products</h1>
          <section>
            <div className="home__card-wrapper    pb-10  cursor-pointer">
              {allProducts?.slice(0, 4).map((product, idx) => (
                <ProductsCard
                  key={product.subSrc}
                  idx={idx}
                  product={product}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RelatedProducts;
