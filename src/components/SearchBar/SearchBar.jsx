import s from "./SearchBar.module.css"
import toast from 'react-hot-toast';
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSubmit }) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const searchQuery = event.target.searchQuery.value.trim();
      if (!searchQuery) {
        toast.error('Please enter a search term!');
        return;
      }
      onSubmit(searchQuery);
    };
  

 return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.input_form}>
          <button type="submit" className={s.button}>
             <FaSearch size={20} className={s.search_icon} />
          </button>
          <input
            className={s.input} 
            type="text"
           autoComplete="off"
           name="searchQuery"
            autoFocus 
            placeholder="Search images and photos"

          />
        </div>
      </form>
    </header>
  );
};


export default SearchBar;