import { CREATE_CUSTOMER, UPDATE_CUSTOMER_NAME } from "./customerActionTypes";

export const createCustomer = (fullName, nationalID) => {
  return {
    type: CREATE_CUSTOMER,
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
};

export const updateName = (fullName) => {
  return { type: UPDATE_CUSTOMER_NAME, payload: fullName };
};
