import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "n_Oa_sN4-K52H0CNS-KhywzWQvfrPBe97DYf8x3DHrQ";

const fetchImages = async (query, page) => {
  const response = await axios.get(API_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};

export default fetchImages;


