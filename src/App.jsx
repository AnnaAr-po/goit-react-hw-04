
import { useState, useEffect } from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchImages from "./services/api";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
        setError(null);
      } catch (err) {
        console.error("Error details:", err);
        setError("Failed to fetch images. Try again!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (query === newQuery) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

 const loadMore = () => setPage((prev) => prev + 1);
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {page < totalPages && !isLoading && <LoadMoreBtn handleLoadMore={loadMore} />}
      <ImageModal
        isOpen={isModalOpen}
        image={selectedImage}
        onClose={closeModal}
      />
    </div>
  );
};

export default App;