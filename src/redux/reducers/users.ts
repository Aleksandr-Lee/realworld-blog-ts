import actionTypes from "../actionsTypes";
import { IUsers } from "../../types/types";
import { UsersTypes } from "../../types/usersTypes";

interface StateInitial {
  users: boolean | IUsers;
  isAuth: boolean;
  successfulLogin: object | boolean | string;
  successfulCreate: object | boolean | string;
  successfulEditProfile: object | boolean | string;
}

const initialState: StateInitial = {
  users: false,
  isAuth: false,
  successfulLogin: false,
  successfulCreate: false,
  successfulEditProfile: false,
};

const usersReducer = (
  state = initialState,
  action: UsersTypes
): StateInitial => {
  switch (action.type) {
    case actionTypes.getUser:
      return {
        ...state,
        users: action.users,
        isAuth: true,
      };
    case actionTypes.logOut:
      localStorage.removeItem("token");
      return {
        ...state,
        users: false,
        isAuth: false,
      };
    case actionTypes.updateUser:
      return {
        ...state,
        users: action.users,
      };
    case actionTypes.successfulLogin:
      return {
        ...state,
        successfulLogin: action.successfulLogin,
      };
    case actionTypes.successfulCreate:
      return {
        ...state,
        successfulCreate: action.successfulCreate,
      };
    case actionTypes.successfulEditProfile:
      return {
        ...state,
        successfulEditProfile: action.successfulEditProfile,
      };
    default:
      return state;
  }
};

export default usersReducer;
