import { useGetAccount } from "./redux/accountSelectors";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

const BalanceDisplay = () => {
  const userAccount = useGetAccount();

  return <div className="balance">{formatCurrency(userAccount.balance)}</div>;
};

export default BalanceDisplay;
