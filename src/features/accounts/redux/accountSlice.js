import {
  ACCOUNT_REQUEST_LOAN,
  ACCOUNT_PAY_LOAN,
  ACCOUNT_WITHDRAW,
  ACCOUNT_DEPOSIT,
  ACCOUNT_CONVERTING_CURRENCY,
} from "./accountActionTypes";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

export const accountReducer = (state = initialStateAccount, action) => {
  switch (action.type) {
    case ACCOUNT_DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case ACCOUNT_WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case ACCOUNT_REQUEST_LOAN:
      if (state.load > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case ACCOUNT_PAY_LOAN:
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    case ACCOUNT_CONVERTING_CURRENCY:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
