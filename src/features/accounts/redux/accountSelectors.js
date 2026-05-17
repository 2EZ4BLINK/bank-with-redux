import { useSelector } from "react-redux";

export const useGetAccount = () => {
  return useSelector(({ account }) => account);
};
