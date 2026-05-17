import { createStore, combineReducers } from "redux";

import { accountReducer } from "../features/accounts/redux/accountSlice";
import { customerReducer } from "../features/customers/redux/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export const store = createStore(rootReducer);
