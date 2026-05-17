import { useGetCustomer } from "./redux/customerSelectors";

const Customer = () => {
  const { fullName } = useGetCustomer();

  return <h2>👋 Welcome, {fullName || "New User"}</h2>;
};

export default Customer;
