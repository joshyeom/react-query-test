import { useQuery } from "react-query";
import axios from "axios";

const fetchProducts = () => {
  return axios.get("http://localhost:3000/data");
};

export const useProductName = (onSuccess, onError) => {
  return useQuery("get-product", fetchProducts, {
    onSuccess: onSuccess,
    onError: onError,
    select: (data) => {
      const productName = data.data?.items
        .map((p) => p);
      return productName;
    },
  });
};
