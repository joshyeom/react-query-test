import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchProductDetails = (productId) => {
  return axios.get(
    `http://localhost:3000/data`
  );
};

export const useProductId = (productId) => {
  const queryClient = useQueryClient();
  return useQuery(
    ["product-id", productId],
    () => fetchProductDetails(productId),
    {
      initialData: () => {
        const product = queryClient
          .getQueryData("get-product")
          ?.data?.items.find((p) => p.id === productId);

        if (product) {
          return {
            data: product,
          };
        } else return undefined;
      },
    }
  );
};