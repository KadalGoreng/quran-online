"use client";
import React, { useEffect, useRef, useState } from "react";
import { getAllCity, getJadwalShalat } from "@/src/api/jadwalshalat";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { month } from "@/src/utils/constant";
import Image from "next/image";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Page = () => {
  const [city, setCity] = useState();
  const [time, setTime] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [jadwalShalat, setJadwalShalat] = useState();
  const [payload, setPayload] = useState({
    kota: "1433",
    tahun: "2023",
    bulan: "07",
  });

  const handleDownload = () => {
    const pdf = new jsPDF();
    const jadwalShalat = document.getElementById("jadwalShalat");
    html2canvas(jadwalShalat).then((res) => {
      pdf.addImage(res.toDataURL(), "JPEG", 15, 15, 180, 0);
      pdf.save("jadwalShalat.pdf");
    });
  };

  const getCity = async () => {
    setIsLoading(true);
    const city = await getAllCity();
    setCity(city);
    setIsLoading(false);
  };

  const getYear = new Date().getFullYear();

  const getJadwal = async (payload) => {
    setIsLoading(true);
    const jadwal = await getJadwalShalat(payload);
    setJadwalShalat(jadwal.data);
    setIsLoading(false);
  };

  const handleOnSelect = (item) => {
    setPayload({
      kota: item.id,
      tahun: getYear,
      bulan: `0${new Date().getMonth() + 1}`,
    });
  };

  const timeNow = () => {
    const date = new Date();
    setTime(date.toLocaleTimeString());
  };

  useEffect(() => {
    getCity();
    getJadwal(payload);
    setInterval(() => {
      timeNow();
    }, 1000);
  }, [payload]);

  const formatCityName = (name) => {
    let newFormat = "";
    for (let i = 0; i < name.length; i++) {
      if (i !== 0 && name[i - 1] !== " ") {
        newFormat += name[i].toLowerCase();
      } else {
        newFormat += name[i];
      }
    }
    return newFormat;
  };

  return (
    <div className="container mx-auto min-h-screen lg:max-w-7xl">
      <div className="text-right">{time}</div>

      {city ? (
        <>
          <ReactSearchAutocomplete
            items={city}
            placeholder="Cari Kota..."
            fuseOptions={{ keys: ["lokasi"] }}
            resultStringKeyName="lokasi"
            onSelect={handleOnSelect}
            showIcon={false}
            styling={{
              height: "40px",
              borderRadius: "6px",
              padding: "16px",
              background: "rgb(241 245 249)",
              boxShadow: "none",
              placeholderColor: "#a9a9a9",
              zIndex: 2,
              fontSize: "12px",
            }}
          />
          <button
            className="p-2 bg-[#326219] text-white rounded-md text-[14px] mt-3 font-semibold"
            onClick={handleDownload}
          >
            Unduh Jadwal
          </button>
        </>
      ) : (
        <input
          type="text"
          className="w-full rounded-md h-10 p-4 text-[12px]"
          placeholder="Cari Kota..."
        />
      )}
      <div id="jadwalShalat" className="my-3">
        {jadwalShalat && (
          <div className="bg-[#617d4f] rounded-md text-center p-6 text-[20px] text-white font-semibold">
            <p>Jadwal Shalat {formatCityName(jadwalShalat.lokasi)}</p>
            <p>
              {month[new Date().getMonth()]} {getYear}
            </p>
          </div>
        )}
        <div className="overflow-x-auto my-3 rounded-lg">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-[#617d4f] text-white text-[14px]">
                <th className="p-3">Tanggal</th>
                <th className="p-3">Imsyak</th>
                <th className="p-3">Subuh</th>
                <th className="p-3">Terbit</th>
                <th className="p-3">Dhuha</th>
                <th className="p-3">Dzuhur</th>
                <th className="p-3">Ashar</th>
                <th className="p-3">Maghrib</th>
                <th className="p-3">Isya</th>
              </tr>
            </thead>
            <tbody>
              {jadwalShalat?.jadwal?.map((item, index) => (
                <tr
                  className={`text-center text-[14px] ${
                    index % 2 === 0 ? `bg-slate-100` : `bg-slate-200`
                  }  border-b-2`}
                  key={index}
                >
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">{item.imsak}</td>
                  <td className="p-3">{item.subuh}</td>
                  <td className="p-3">{item.terbit}</td>
                  <td className="p-3">{item.dhuha}</td>
                  <td className="p-3">{item.dzuhur}</td>
                  <td className="p-3">{item.ashar}</td>
                  <td className="p-3">{item.maghrib}</td>
                  <td className="p-3">{item.isya}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
    </div>
  );
};

export default Page;
