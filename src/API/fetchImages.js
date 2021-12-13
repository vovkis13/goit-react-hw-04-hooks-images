const axios = require('axios');
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23902018-2ad96957ecb94a5813d6bfdc3';
const TYPE = 'photo';
const ORIENT = 'horizontal';
const PER_PAGE = 12;

export default async function fetchImages(query, page) {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=${TYPE}&orientation=${ORIENT}&per_page=${PER_PAGE}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
