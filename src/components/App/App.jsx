import { useState } from 'react';
import Loader from 'react-loader-spinner';
import fetchImages from '../../api/fetchImages';
import Searchbar from '../Searchbar/';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import Modal from '../Modal';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './App.module.css';

export default function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(0);
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [largeURL, setLargeURL] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const tempQuery = e.target[1].value;
    if (!tempQuery) {
      setCollection([]);
      return;
    }
    setLoading(true);
    try {
      const { total, hits } = await fetchImages(tempQuery, 1);
      setPage(1);
      setTotal(total);
      setQuery(tempQuery);
      setCollection(hits);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const { hits } = await fetchImages(query, page + 1);
      setPage(prevPage => prevPage + 1);
      setCollection(prevCollection => [...prevCollection, ...hits]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
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
      {!loading && collection.length > 0 && total > collection.length && (
        <Button handleClick={handleLoadMore} />
      )}
      {largeURL && (
        <Modal
          imageURL={largeURL}
          forAlt={query}
          closeModal={handleCloseModal}
        />
      )}
    </div>
  );
}
