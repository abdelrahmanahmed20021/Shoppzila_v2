import ProductCard from "@/components/Products/ProductCard";
import RelatedProducts from "../../../components/Products/RelatedProducts";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  Image,
} from "@nextui-org/react";

interface IProps {
  params: {
    id: number;
  };
}

const ProductPage = ({ params }: IProps) => {
  const { id } = params;

  return (
    <div className=" container mx-auto my-6">
      <section className=" container flex flex-col  justify-start ">
        <Breadcrumbs>
          <BreadcrumbItem>
            <Button variant="light">Home</Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button variant="light">Shop</Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button variant="light" color="warning">
              productName
            </Button>
          </BreadcrumbItem>
        </Breadcrumbs>
        <div className="  flex flex-col items-center justify-center">
          <Card className=" gap-10" shadow="none">
            <CardBody className="overflow-visible shadow-none py-2">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                <Image
                  alt="Shoe"
                  className="  object-cover"
                  width={500}
                  height={400}
                  src="/images/cards/1.jpg"
                />

                <ProductCard id={id} />
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
      <section></section>
      <section>
        <RelatedProducts />
      </section>
    </div>
  );
};

export default ProductPage;
