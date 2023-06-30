import Image from "next/image";
import React from "react";

const CardDetail = (props) => {
  const { nomorAyat, teksArab, teksLatin, teksIndonesia } = props;

  return (
    <div className="p-4 bg-slate-100 rounded-md my-4">
      <span>{nomorAyat}</span>
      <div className="flex justify-between">
        <button>
          <Image src="/play.svg" width={15} height={10} />
        </button>
        <span className="text-right my-3">{teksArab}</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-amber-600 font-medium">{teksLatin}</span>
        <span className="text-slate-400">{teksIndonesia}</span>
      </div>
    </div>
  );
};

export default CardDetail;
