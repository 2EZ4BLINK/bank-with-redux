import { useSelector } from "react-redux";

export const useGetCustomer = () => {
  return useSelector(({ customer }) => customer);
};
