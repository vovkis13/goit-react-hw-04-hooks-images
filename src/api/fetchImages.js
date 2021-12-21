const axios = require('axios');
const getImages = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '23902018-2ad96957ecb94a5813d6bfdc3',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export default async function fetchImages(q = '', page = 1) {
  const params = { q, page };
  try {
    const { data } = await getImages('', { params });
    return data;
  } catch (e) {
    console.error(e);
  }
}
