import CategoryPage from "@/components/Category";
import { ICategory } from "@/interfaces";
// import Loading from "./loading";
// import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch("https://shoppzila.vercel.app/api/categories");
  const data = await response.json();
  return data;
};

const Categories: React.FC = async() => {
  // const queryClient = useQueryClient();
  // const { data, isLoading } = useQuery({
  //   queryKey: ["data"],
  //   queryFn: fetchData,
  // });
  const data = await fetchData()

  
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
