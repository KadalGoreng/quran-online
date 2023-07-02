import axios from "axios";

const baseUrl = "https://api.myquran.com";

const getAllCity = async () => {
  const result = await axios.get(`${baseUrl}/v1/sholat/kota/semua`);
  return result.data;
};

const getJadwalShalat = async (payload) => {
  const { kota, tahun, bulan } = payload;
  const result = await axios.get(
    `${baseUrl}/v1/sholat/jadwal/${kota}/${tahun}/${bulan}`
  );
  return result.data;
};

export { getAllCity, getJadwalShalat };
