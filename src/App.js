import { AccountOperations, BalanceDisplay } from "./features/accounts";
import { CreateCustomer, Customer } from "./features/customers";
import { useGetAccount } from "./features/accounts/redux/accountSelectors";
import { useGetCustomer } from "./features/customers/redux/customerSelectors";

const App = () => {
  const accountData = useGetAccount();
  const customerData = useGetCustomer();

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {customerData?.fullName ? (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      ) : (
        <CreateCustomer />
      )}
    </div>
  );
};

export default App;
