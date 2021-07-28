import ActionTypes from "../redux/actionsTypes";
import { IUsers } from "./types";

interface IActionGetUser {
  type: typeof ActionTypes.getUser;
  users: IUsers;
}

interface IActionLogOut {
  type: typeof ActionTypes.logOut;
}

interface IActionUpdateUser {
  type: typeof ActionTypes.updateUser;
  users: IUsers;
}
interface IActionSuccessfulLogin {
  type: typeof ActionTypes.successfulLogin;
  successfulLogin: object | boolean | string;
}

interface IActionSuccessfulCreate {
  type: typeof ActionTypes.successfulCreate;
  successfulCreate: object | boolean | string;
}

interface IActionSuccessfulEditProfile {
  type: typeof ActionTypes.successfulEditProfile;
  successfulEditProfile: object | boolean | string;
}
export type UsersTypes =
  | IActionGetUser
  | IActionLogOut
  | IActionUpdateUser
  | IActionSuccessfulLogin
  | IActionSuccessfulCreate
  | IActionSuccessfulEditProfile;
