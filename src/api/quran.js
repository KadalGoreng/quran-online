import axios from "axios";

const baseUrl = "https://equran.id";

const getAllSurah = async () => {
  const result = await axios.get(`${baseUrl}/api/v2/surat`);
  return result.data;
};

const detailSurah = async (id) => {
  const result = await axios.get(`${baseUrl}/api/v2/surat/${id}`);
  return result.data;
};

export { getAllSurah, detailSurah };
