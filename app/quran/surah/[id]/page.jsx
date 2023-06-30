"use client";
import { detailSurah } from "@/api/quran";
import CardDetail from "@/components/CardDetail";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { id } = params;

  const [surah, setSurah] = useState([]);

  useEffect(() => {
    detailSurah(id).then((res) => setSurah(res.data));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="text-center p-4 text-[24px] font-bold">
        {surah.namaLatin} - {surah.nama}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: surah.deskripsi }}
        className="text-center mb-4"
      />

      <div>
        {surah.ayat &&
          surah.ayat.map((item, index) => <CardDetail {...item} />)}
      </div>
    </div>
  );
};

export default Page;
