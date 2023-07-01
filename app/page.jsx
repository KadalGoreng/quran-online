"use client";
import { getAllSurah } from "@/api/quran";
import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getSurah = () => {
    getAllSurah().then((res) => setData(res.data));
    setIsLoading(false);
  };

  useEffect(() => {
    getSurah();
  }, []);

  const surahFilter = data
    .map(
      (item) =>
        item.namaLatin.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
        item
    )
    .filter(Boolean);

  return (
    <div className="container mx-auto">
      <div className="mb-4">
        <input
          type="text"
          className="w-full rounded-md h-10 p-4 bg-slate-100"
          placeholder="Cari Surat..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {isLoading && (
        <div className="grid justify-center items-center h-[80vh]">
          <Image
            alt="loading"
            src="/loading.svg"
            className="animate-spin"
            width={30}
            height={30}
          />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {data &&
          !isLoading &&
          surahFilter.map((item) => (
            <Link href={`quran/surah/${item.nomor}`} key={item.nomor}>
              <Card {...item} />
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Home;
