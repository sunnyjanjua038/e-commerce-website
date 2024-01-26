import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, fetchAndSetProducts } from '../redux/features/CartSlice';
import toast from 'react-hot-toast';

export const useRangeLogic = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.allCart.filteredProducts);

  useEffect(() => {
    dispatch(fetchAndSetProducts({ min: 30, max: 1600 }));
  }, [dispatch]);

  const send = (product) => {
    dispatch(addToCart(product));
    toast.success('Item added to your cart');
  };

  return {
    filteredProducts,
    send,
  };
};
