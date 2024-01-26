

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import MainProducts from '../Api/Products';
import { addToCart } from '../redux/features/CartSlice';

export const getViewClass = (view) => {
  return view === 'list'
      ? 'col-lg-12 list-view-element' 
      : view === 'kanban'
      ? 'col-lg-4 col-md-6 col-sm-6 ' 
      : 'col-lg-6 col-md-6 col-sm-6 '; 
  };


export const useHomeLogic = () => {
  const [view, setView] = useState('grid');
  const dispatch = useDispatch();
  const produtss = MainProducts();

  const send = (e) => {
    dispatch(addToCart(e));
    toast.success('Item added to your cart');
  };

  const changeView = (newView) => {
    setView(newView);
  };

  return {
    view,
    changeView,
    send,
    produtss,
   
  };
};


