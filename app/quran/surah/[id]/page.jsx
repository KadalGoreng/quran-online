"use client";
import { detailSurah } from "@/src/api/quran";
import Button from "@/components/Button";
import CardDetail from "@/components/CardDetail";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Page = ({ params }) => {
  const { id } = params;

  const [surah, setSurah] = useState([]);
  const [play, setPlay] = useState(false);
  const [currentPlay, setCurrentPlay] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const audioRef = useRef(null);

  const onPlay = (audioUrl) => {
    if (audioRef.current && audioRef.current.src == audioUrl && play) {
      audioRef.current.pause();
      setCurrentPlay(audioUrl);
      setPlay(false);
    } else {
      audioRef.current.src = audioUrl;
      audioRef.current.play();
      setCurrentPlay(audioUrl);
      setPlay(true);
    }
  };

  const getDetailSurah = async () => {
    const detail = await detailSurah(id);
    setSurah(detail.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getDetailSurah();
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleAudioEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleAudioEnded);
      }
    };
  }, []);

  const handleAudioEnded = () => {
    setPlay(false);
  };

  return (
    <div className="container min-h-screen mx-auto lg:max-w-7xl">
      {surah.length !== 0 && (
        <div className="text-center p-4 text-[24px] font-bold">
          {surah.namaLatin} - {surah.nama}
        </div>
      )}
      <div
        dangerouslySetInnerHTML={{ __html: surah.deskripsi }}
        className="text-center mb-4"
      />
      <audio ref={audioRef} />
      <div>
        {!isLoading ? (
          surah?.ayat?.map((item) => (
            <CardDetail
              key={item.nomorAyat}
              {...item}
              play={play}
              audioCurrent={currentPlay}
              onPlay={onPlay}
            />
          ))
        ) : (
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
        <div className="flex justify-between">
          {surah.suratSebelumnya ? (
            <Button
              name={surah.suratSebelumnya.namaLatin}
              url={surah.suratSebelumnya.nomor}
            />
          ) : (
            <div></div>
          )}
          {surah.suratSelanjutnya && (
            <Button
              name={surah.suratSelanjutnya.namaLatin}
              url={surah.suratSelanjutnya.nomor}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
