"use client";
import { getAllSurah } from "@/api/quran";
import Card from "@/components/Card";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllSurah().then((res) => setData(res.data));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {data &&
          data.map((item, index) => (
            <Link href={`quran/surah/${item.nomor}`}>
              <Card key={index} {...item} />
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Home;
