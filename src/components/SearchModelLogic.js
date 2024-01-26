import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/CartSlice';
import { fetchProductsData } from '../Api/ProductsAxiosInstance';
import _debounce from 'lodash/debounce';
export const useSearchModalLogic = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  
  const debouncedSearch = _debounce(async (query) => {
        if (query.length >= 4) {
      try {
        const filtered = products.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filtered);
      } catch (error) {
        console.error('Error during debounced search:', error);
      }
    } else {
      setSearchResults([]);
    }
  }, 2000);
  const handleSearch = (e) => {
    const query = e.target.value.trim();
    setSearchInput(query);
    setIsSearchPerformed(false);
    debouncedSearch(query);
  };
  const handleItemClick = (product) => {
    setSelectedItem(product);
    setSearchInput('');
    setSearchResults([]);
    setIsSearchPerformed(true);
  };
  const handleAddToCart = () => {
    if (selectedItem) {
      dispatch(addToCart(selectedItem));
      console.log('Adding item to cart:', selectedItem);
    }
  };
  useEffect(() => {
    fetchProductsData()
      .then((response) => {
        if (response && response.data && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          console.error('Invalid data received or empty products array:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);
  return {
       searchInput,
    searchResults,
    selectedItem,
    isSearchPerformed,
    handleSearch,
    handleItemClick,
    handleAddToCart,
  };
};
