"use client";
import CategoryPage from "@/components/Category";
import { ICategory } from "@/interfaces";
import fetchData from "@/utils";
// import Loading from "./loading";
import { useQuery, useQueryClient } from "react-query";

 

const Categories = () => {
  const url="https://shoppzila.vercel.app/api/categories"
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn:()=> fetchData(url),
  });
  // const data = await fetchData()

  const category: ICategory[] = data;
  return (
    <main className=" container mx-auto overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <h1 className="text-2xl font ">Explore Popular Categories</h1>
        <div className=" flex py-6 gap-0 overflow-hidden">
          {category?.map((el, idx) => (
            <CategoryPage key={idx} index={idx} category={el} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Categories;
