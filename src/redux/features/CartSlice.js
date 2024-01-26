import { createSlice } from '@reduxjs/toolkit';
import { fetchProductsData } from '../../Api/ProductsAxiosInstance';
const items = localStorage.getItem('carts') !== null ? JSON.parse(localStorage.getItem('carts')) : [];
const totalPrice = localStorage.getItem('totalPrice') !== null ? JSON.parse(localStorage.getItem('totalPrice')) : 0;
const totalQuantity = localStorage.getItem('totalQuantity') !== null ? JSON.parse(localStorage.getItem('totalQuantity')) : 0;

const initialState = {
  carts: items,
  totalQuantity: totalQuantity,
  totalPrice: totalPrice,
  products: [], 
  filteredProducts: [],
};

const calculateTotalPriceAndQuantity = (cartItems) => {
  let totalQuantity = 0;
  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalQuantity += item.qnty;
    totalPrice += item.qnty * item.price;
  });

  return { totalQuantity, totalPrice };
};


const CartSlice = createSlice({
  name: 'cartslice',
  initialState,
  reducers: {




    // for Rnange start

    setProducts(state, action) {
      state.products = action.payload;
    },
   setFilteredProducts(state, action) {
      const { min,max } = action.payload;

      state.filteredProducts = state.products.filter(
        (product) => product.price >= min && product.price <= max
      );
    },

// for Rnange end
    addToCart(state, action) {
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp];
      }

      const { totalQuantity, totalPrice } = calculateTotalPriceAndQuantity(state.carts);
      state.totalQuantity = totalQuantity;
      state.totalPrice = totalPrice;

      localStorage.setItem('carts', JSON.stringify(state.carts.map(item => item)));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
    },
  
  



    removeToCart(state, action) {
      state.carts = state.carts.filter((item) => item.id !== action.payload);

      const { totalQuantity, totalPrice } = calculateTotalPriceAndQuantity(state.carts);
      state.totalQuantity = totalQuantity;
      state.totalPrice = totalPrice;

      localStorage.setItem('carts', JSON.stringify(state.carts.map(item => item)));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
    },

    removeSingleIteam(state, action) {
      const { id } = action.payload;

      const itemIndex = state.carts.findIndex((item) => item.id === id);
      if (itemIndex !== -1 && state.carts[itemIndex].qnty > 0) {
        state.carts[itemIndex].qnty -= 1;

        const { totalQuantity, totalPrice } = calculateTotalPriceAndQuantity(state.carts);
        state.totalQuantity = totalQuantity;
        state.totalPrice = totalPrice;

        localStorage.setItem('carts', JSON.stringify(state.carts.map(item => item)));
        localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
        localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
      }
    },

    emptyCartItem(state, action) {
      state.carts = [];

      localStorage.removeItem('carts');
      localStorage.removeItem('totalPrice');
      localStorage.removeItem('totalQuantity');
    },
   
    
   
  },
});
export const fetchAndSetProducts = () => async (dispatch) => {
  try {
    const response = await fetchProductsData();
    const { products } = response.data; // Extracting products from the object
    
    console.log('Fetched Products:', products);

    if (Array.isArray(products)) {
      dispatch(setProducts(products));
    } else {
      console.error('Fetched data is not an array.');
      // Handle this case according to your app's requirements
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export const {
  addToCart,
  fetchProducts,
  removeToCart,
  removeSingleIteam,
  emptyCartItem,
  moveCard,
  setFilteredProducts,
  filterItemsByRange,
  filter,
  setProducts
} = CartSlice.actions;

export default CartSlice.reducer;


