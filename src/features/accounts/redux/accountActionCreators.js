import {
  ACCOUNT_REQUEST_LOAN,
  ACCOUNT_PAY_LOAN,
  ACCOUNT_DEPOSIT,
  ACCOUNT_WITHDRAW,
} from "./accountActionTypes";

export const withdraw = (amount) => {
  return { type: ACCOUNT_WITHDRAW, payload: amount };
};

export const deposit = (amount) => {
  return { type: ACCOUNT_DEPOSIT, payload: amount };
};

export const requestLoan = (amount, purpose) => {
  return { type: ACCOUNT_REQUEST_LOAN, payload: { amount, purpose } };
};

export const payLoan = (payload) => {
  return { type: ACCOUNT_PAY_LOAN };
};
