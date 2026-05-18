import {
  ACCOUNT_REQUEST_LOAN,
  ACCOUNT_PAY_LOAN,
  ACCOUNT_DEPOSIT,
  ACCOUNT_WITHDRAW,
  ACCOUNT_CONVERTING_CURRENCY,
} from "./accountActionTypes";

export const withdraw = (amount) => {
  return { type: ACCOUNT_WITHDRAW, payload: amount };
};

export const deposit = (amount, currency) => {
  if (currency === "USD") return { type: ACCOUNT_DEPOSIT, payload: amount };

  const convertAmount = async (dispatch, getState) => {
    dispatch({
      type: ACCOUNT_CONVERTING_CURRENCY,
    });
    const res = await fetch(
      `https://api.frankfurter.dev/v2/rate/${currency}/USD`,
    );
    const data = await res.json();
    const convertedValue = amount * data.rate;

    dispatch({
      type: ACCOUNT_DEPOSIT,
      payload: convertedValue,
      isLoading: true,
    });
  };

  return convertAmount;
};

export const requestLoan = (amount, purpose) => {
  return { type: ACCOUNT_REQUEST_LOAN, payload: { amount, purpose } };
};

export const payLoan = (payload) => {
  return { type: ACCOUNT_PAY_LOAN };
};
