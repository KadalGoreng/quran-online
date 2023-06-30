import React from "react";

const Card = (props) => {
  const { nomor, namaLatin, nama, arti, jumlahAyat, tempatTurun } = props;

  return (
    <div className="flex justify-between bg-slate-100 p-5 rounded-md hover:bg-slate-200 truncate">
      <div className="flex flex-col">
        <div className="flex gap-2">
          <span className="font-semibold">
            {nomor}. {namaLatin}
          </span>
          <span className="font-light text-slate-400">({arti})</span>
        </div>
        <div>
          <span className="font-light text-slate-400">{tempatTurun}</span>
          <span className="font-light text-slate-400 dot-before ">
            {jumlahAyat} ayat
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <span>{nama}</span>
      </div>
    </div>
  );
};

export default Card;
