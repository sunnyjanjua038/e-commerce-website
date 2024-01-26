import { useDispatch, useSelector } from 'react-redux';
import {setFilteredProducts } from '../redux/features/CartSlice';
import toast from 'react-hot-toast';
import { useState } from 'react';

export const SidebarLogic = () => {
    const [selectedRange, setSelectedRange] = useState(30);
    const dispatch = useDispatch();
  
    const handleRangeFilterClicked = () => {
      dispatch(setFilteredProducts({ min: 30, max: selectedRange }));
    toast.success('Filtered by range');
    
     
    };
     
    const handleRangeChange = (value) => {
      setSelectedRange(Number(value));
    };
  
  return {
    selectedRange,
    handleRangeFilterClicked,
    handleRangeChange
  };
};
