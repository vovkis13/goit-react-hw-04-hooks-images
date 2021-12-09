import { useState } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import fetchImages from '../../API/fetchImages';
import Searchbar from '../Searchbar/';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import Modal from '../Modal';
import s from './App.module.css';

export default function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(0);
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [largeURL, setLargeURL] = useState('');

  const handleSubmit = async e => {
    const tempQuery = e.target[1].value;
    if (!tempQuery) return;
    e.preventDefault();
    setLoading(true);
    const res = await fetchImages(tempQuery, 1);
    setPage(1);
    setTotal(res.total);
    setQuery(tempQuery);
    setCollection(res.hits);
    setLoading(false);
  };

  const handleLoadMore = async e => {
    e.preventDefault();
    setLoading(true);
    const res = await fetchImages(query, page + 1);
    setPage(prevPage => prevPage + 1);
    setCollection(prevCollection => [...prevCollection, ...res.hits]);
    setLoading(false);
  };

  const handleImageMaximize = e => setLargeURL(e.target.dataset.large);

  const handleCloseModal = () => setLargeURL('');

  return (
    <div className={s.app}>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery collection={collection} onMaximize={handleImageMaximize} />
      {loading && (
        <div className={s.loaderWrapper}>
          <Loader type="Rings" color="#00BFFF" height={120} width={120} />
        </div>
      )}
      {collection.length > 0 && total > collection.length && (
        <Button handleClick={handleLoadMore} />
      )}
      {largeURL && <Modal imageURL={largeURL} closeModal={handleCloseModal} />}
    </div>
  );
}
