"use client";

import { useEffect, useState } from "react";
import ProductsCard from "@/components/Products/ProductsCard";
import { IProduct } from "@/interfaces";
import fetchData from "@/utils";
import MainLoader from "@/components/Loaders/loading";

interface IProps {}

const Products: React.FC<IProps> = ({}) => {
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = "/api/products";
        const products: IProduct[] = await fetchData(url);
        setAllProducts(products);
      } catch (error) {
        setLoading(true);
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <main className="container mx-auto overflow-hidden">
        <div className="mt-12 padding-x max-width" id="discover">
          <h1 className="text-4xl p-4">Featured Products</h1>
          <section>
            {loading ? (
              <MainLoader />
            ) : (
              <div className="home__card-wrapper cursor-pointer">
                {allProducts.map((product, idx) => (
                  <ProductsCard
                    key={product.subSrc}
                    idx={idx}
                    product={product}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Products;
