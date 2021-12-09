const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23902018-2ad96957ecb94a5813d6bfdc3';
const TYPE = 'photo';
const ORIENT = 'horizontal';
const PER_PAGE = 12;

export default function fetchImages(query, page) {
  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=${TYPE}&orientation=${ORIENT}&per_page=${PER_PAGE}`,
  )
    .then(res => res.json())
    .catch(console.log);
}
