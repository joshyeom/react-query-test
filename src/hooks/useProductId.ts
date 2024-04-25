import { useQuery } from "react-query";
import axios from "axios";

const fetchProductDetails = (productId) => {
  return axios.get(`http://localhost:3000/data/${productId}`);
};

export const useProductId = (productId) => {
  return useQuery(["product-id", productId], () =>
    fetchProductDetails(productId)
  );
};
