"use client";
import ProductCard from "@/components/Products/ProductCard";
import RelatedProducts from "../../../components/Products/RelatedProducts";
import { Card, CardBody } from "@nextui-org/react";
import ImageGallury from "@/components/ui/ImageGallury";
import Headings from "@/components/ui/Heading";
import axios from "axios";

interface IProps {
  params: {
    id: number;
  };
}


const ProductPage =  ({ params }: IProps) => {
  const { id } = params;
  
 
  return (
    <div>
      <div className=" container overflow-hidden  mx-auto my-6">
        <section className=" ">
          <main className=" container mx-auto  overflow-hidden">
            <Headings />
            <div className="mt-12 padding-x max-width" id="discover">
              <div className="  flex  shadow-none justify-center  ">
                <Card shadow="none">
                  <CardBody className="overflow-hidden  container shadow-none py-2">
                    <div className="grid    grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center">
                      <ImageGallury />
                       
                        <ProductCard key={id} id={id} />
                     
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </main>
        </section>
        <section>
          <RelatedProducts />
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
