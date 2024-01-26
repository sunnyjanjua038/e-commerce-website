import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { addToCart, removeToCart, removeSingleIteam, emptyCartItem } from '../redux/features/CartSlice';

export const useCartDetailsLogic = () => {
  const { carts, totalQuantity, totalPrice } = useSelector((state) => state.allCart); 
  const dispatch = useDispatch();
  const [OffcanvasOpen , setOfcanvasOpen] = useState(true)
  const handleOffCanves=()=>{
  setOfcanvasOpen(false)
  }
  const handleIncrement = (e) => {
    dispatch(addToCart(e));
  };

  const handleDecrement = (e) => {
    dispatch(removeToCart(e));
    toast.success('Item removed from your Cart');
  };

  const handleSingleDecrement = (e) => {
    dispatch(removeSingleIteam(e));
  };

  const handleEmptyCart = () => {
    dispatch(emptyCartItem());
    toast.success('Your cart is Empty');
  };
  return {
    carts,
    totalQuantity,
    totalPrice,
    handleIncrement,
    handleDecrement,
    handleSingleDecrement,
    handleEmptyCart,
    handleOffCanves
  };
};
