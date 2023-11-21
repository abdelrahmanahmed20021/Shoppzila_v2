import React from "react";
import {Breadcrumbs, BreadcrumbItem, Button} from "@nextui-org/react";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
 

export default function Headings() {
  return (
    <Breadcrumbs>
          <BreadcrumbItem>
            <Button as={Link} href="/" variant="light">Home</Button>
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
  );
}
