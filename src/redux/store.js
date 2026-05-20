import { configureStore } from "@reduxjs/toolkit";

import accountSlice from "../features/accounts/redux/accountSlice";
import customerSlice from "../features/customers/redux/customerSlice";

export const store = configureStore({
  reducer: {
    account: accountSlice,
    customer: customerSlice,
  },
});
