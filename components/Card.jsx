import React from "react";

const Card = (props) => {
  const { nomor, namaLatin, nama, arti, jumlahAyat, tempatTurun } = props;

  return (
    <div className="flex justify-between bg-slate-100 p-5 rounded-md hover:bg-slate-200">
      <div className="flex flex-col truncate">
        <div className="flex gap-2 items-center">
          <span className="font-semibold text-amber-600">
            {nomor}. {namaLatin}
          </span>
          <span className="font-light text-slate-500 text-[14px]">
            ({arti})
          </span>
        </div>
        <div className="font-light text-slate-400">
          <span>{tempatTurun}</span>
          <span className="dot-before ">{jumlahAyat} ayat</span>
        </div>
      </div>
      <div className="flex items-center">
        <span className="font-semibold">{nama}</span>
      </div>
    </div>
  );
};

export default Card;
