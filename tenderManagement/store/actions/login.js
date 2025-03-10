import { find } from "lodash";

export const userLogin = ({ email, password, navigateTo }) => {
  return (dispatch, getState) => {
    const users = getState().data.users;
    const user = find(users, (user) => {
      if (user.email === email.toLowerCase() && user.password === password) {
        return user;
      }
    });
    if (!user) dispatch({ type: "SET_USER", error: "Users doesn't exist" });
    else {
      navigateTo("UserProfile");
      dispatch({ type: "SET_USER", error: "", selectedUser: user });
    }
  };
};
export const userLogout = () => {
  return (dispatch) => {
    dispatch({ type: "LOGOUT_USER" });
  };
};
