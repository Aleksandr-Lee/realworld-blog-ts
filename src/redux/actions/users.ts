import ActionTypes from "../actionsTypes";
import { IUsers } from "../../types/types";
import { UsersTypes } from "../../types/usersTypes";

export const actionGetUser = (users: IUsers): UsersTypes => ({
  type: ActionTypes.getUser,
  users,
});

export const actionLogOut = (): UsersTypes => ({
  type: ActionTypes.logOut,
});

export const actionUpdateUser = (users: IUsers): UsersTypes => ({
  type: ActionTypes.updateUser,
  users,
});

export const actionSuccessfulLogin = (
  successfulLogin: object | boolean | string
): UsersTypes => ({
  type: ActionTypes.successfulLogin,
  successfulLogin,
});

export const actionSuccessfulCreate = (
  successfulCreate: object | boolean | string
): UsersTypes => ({
  type: ActionTypes.successfulCreate,
  successfulCreate,
});

export const actionSuccessfulEditProfile = (
  successfulEditProfile: object | boolean | string
): UsersTypes => ({
  type: ActionTypes.successfulEditProfile,
  successfulEditProfile,
});
