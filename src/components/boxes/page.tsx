"use client";
import { useEffect, useState } from "react";
import BoxCard from "@/components/BoxCard";
import { IBox } from "@/interfaces";
import fetchData from "@/utils";

interface IProps {}

const BoxPage: React.FC<IProps> = () => {
  const [boxes, setBoxes] = useState<IBox[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const url = "/api/boxes";
        const boxesData: IBox[] = await fetchData(url);
        setBoxes(boxesData);
      } catch (error) {
        console.error("Error fetching boxes:", error);
      }
    };

    fetchDataAsync();
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render

  return (
    <main className="container mx-auto overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10 cursor-pointer">
              {boxes?.map((box, idx) => (
                <BoxCard key={box.src} idx={idx} box={box} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default BoxPage;
