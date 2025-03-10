import { defaultUsers } from "../dummyData";

export const initialState = {
  users: defaultUsers,
  selectedUser: {},
  loginErrorMessage: "",
};

export default data = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        selectedUser: action.selectedUser,
        loginErrorMessage: action.error,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        selectedUser: {},
      };
    default: {
      return state;
    }
  }
};
