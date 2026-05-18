import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import { accountReducer } from "../features/accounts/redux/accountSlice";
import { customerReducer } from "../features/customers/redux/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
