import { useEffect, useState } from "react"
import { fetchProductsData } from "../Api/ProductsAxiosInstance";
const MainProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProductsData()
          .then((response) => {
            if (response && response.data && Array.isArray(response.data.products)) {
              console.log("products data", response.data.products);
              setProducts(response.data.products);
            } else {
              console.error('Invalid data received or empty products array:', response.data);
            }
          })
          .catch((error) => {
            console.error('Error fetching product data:', error);
          });
      }, []);
      return products
      ;
}
export default MainProducts