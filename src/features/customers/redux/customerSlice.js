import { CREATE_CUSTOMER, UPDATE_CUSTOMER_NAME } from "./customerActionTypes";

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export const customerReducer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case CREATE_CUSTOMER:
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case UPDATE_CUSTOMER_NAME:
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
};
