import { useQuery } from "react-query";
import axios from "axios";

const fetchProducts = () => {
  return axios.get(
    "http://localhost:3000/data"
  );
};

const fetchUsers = () => {
  return axios.get(
    "http://localhost:3001/data"
  );
};

export const ParallelQuery = () => {
  const productsData = useQuery("parallel-get-product", fetchProducts);
  const usersData = useQuery("parallel-get-users", fetchUsers);

  console.log(productsData, usersData)
  return <div>
    {JSON.stringify(productsData)}
    {JSON.stringify(usersData)}
  </div>;
};