


import axios from "axios";

const productInstance = axios.create();

productInstance.interceptors.request.use(function (config) {
  // document.getElementById('overlay').style.display = 'block';
  // Removed the reference to 'request' as it was undefined
  document.getElementById('overlay').style.display = 'block';
//   console.log('Request config:', config); // Logging the request config
  return config;
}, function (error) {
  return Promise.reject(error);
});

productInstance.interceptors.response.use(function (response) {
  document.getElementById('overlay').style.display = 'none'
  
//   console.log('Response:', response); // Logging the response
  return response;
}, function (error) {
  return Promise.reject(error);
});

export const fetchProductsData = () => {
  return productInstance.get('https://dummyjson.com/products/', {
    // You can include headers here if needed
    // headers: {
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer vxbasx?/~~9(sajhx677!@>>jk788ZOP90>:"/'
    // }
  });
};

export default productInstance;
