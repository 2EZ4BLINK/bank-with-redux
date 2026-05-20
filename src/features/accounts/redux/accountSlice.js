// import {
//   ACCOUNT_REQUEST_LOAN,
//   ACCOUNT_PAY_LOAN,
//   ACCOUNT_WITHDRAW,
//   ACCOUNT_DEPOSIT,
//   ACCOUNT_CONVERTING_CURRENCY,
// } from "./accountActionTypes";
import { createSlice } from "@reduxjs/toolkit";
import {
  ACCOUNT_CONVERTING_CURRENCY,
  ACCOUNT_DEPOSIT,
} from "./accountActionTypes";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

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
    });
  };

  return convertAmount;
};

export default accountSlice.reducer;

// Old way
// export const accountReducer = (state = initialStateAccount, action) => {
//   switch (action.type) {
//     case ACCOUNT_DEPOSIT:
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };
//     case ACCOUNT_WITHDRAW:
//       return {
//         ...state,
//         balance: state.balance - action.payload,
//       };
//     case ACCOUNT_REQUEST_LOAN:
//       if (state.load > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case ACCOUNT_PAY_LOAN:
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     case ACCOUNT_CONVERTING_CURRENCY:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     default:
//       return state;
//   }
// };
