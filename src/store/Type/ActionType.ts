import { ActionType } from "../action/action";
import { User } from "./User";

export type CreateNewUserActionT = {
  type: ActionType.CREATE_NEW_USER;
  payload: User;
};

export type DeleteUserActionT = {
  type: ActionType.DELETE_USER;
  payload: {
    id: string;
  };
};

export type UpdateUserActionT = {
  type: ActionType.UPDATE_USER;
  payload: User;
};

export type LoadingState = {
  type: ActionType.LOADING;
};

export type ErrorState = {
  type: ActionType.ERROR;
};

export type ClearList = {
  type: ActionType.CLEAR_LIST;
};

export type SetAddingUser = {
  type: ActionType.SET_ADDING_USER;
};

export type SetUserUpdate = {
  type: ActionType.SET_USER_UPDATE;
  payload: {
    id: string;
  };
};
export type Error1 = { type: "@@redux/INITb.k.u.l.3.6" };
export type Error2 = { type: "@@redux/PROBE_UNKNOWN_ACTIONp.2.3.d.y.s" };

//export type Error3 = { type: "@@redux/INITb.k.u.l.3.6" };
export type Error3 = {
  type: "@@redux/INIT";
};

export type Action =
  | CreateNewUserActionT
  | DeleteUserActionT
  | UpdateUserActionT
  | LoadingState
  | ErrorState
  | ClearList
  | SetUserUpdate
  | Error1
  | Error2
  | Error3
  | SetAddingUser;
