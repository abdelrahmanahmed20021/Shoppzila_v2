 
import ProductsCard from "@/components/ProductsCard";
import { IProduct } from "@/interfaces";
import fetchData from "@/utils";

interface IProps {}

const Products = async ({}: IProps) => {
  const url = "https://shoppzila.vercel.app/api/products";
  const allProducts: IProduct[] = await fetchData(url);
  return (
    <div>
      <main className=" container mx-auto overflow-hidden">
        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <h1 className="text-xl font-bold">Featured Products</h1>
          <section>
            <div className="home__card-wrapper    pb-16 cursor-pointer">
              {allProducts?.map((product, idx) => (
                <ProductsCard key={product.subSrc} idx={idx} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Products;
