import { combineReducers } from "redux";
import { Action } from "../Type/ActionType";
import { StateType } from "../Type/State";
import { User } from "../Type/User";
import { ActionType } from "../action/action";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const initialSTate: StateType = {
  users: [],
  isError: false,
  isLoading: false,
  isUpdating: false,
  isAddingUser: false,
  inModification: {
    id: "",
  },
};
const userReducer = (
  state: StateType = initialSTate,
  action: Action
): StateType => {
  switch (action.type) {
    case ActionType.CREATE_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        isAddingUser: false,
      };
    case ActionType.DELETE_USER:
      const newUserList = state.users.filter(
        (user: User) => user.id !== action.payload.id
      );
      return {
        ...state,
        users: [...newUserList],
      };
    case ActionType.UPDATE_USER:
      const newUserLs = state.users.filter(
        (user: User) => user.id !== action.payload.id
      );
      return {
        ...state,
        isUpdating: false,
        users: [...newUserLs, action.payload],
      };
    case ActionType.ERROR:
      return { ...state, isError: true, isLoading: false, isUpdating: false };
    case ActionType.LOADING:
      return { ...state, isError: false, isLoading: true, isUpdating: false };
    case ActionType.SET_USER_UPDATE:
      return {
        ...state,
        isUpdating: true,
        inModification: { id: action.payload.id },
      };
    case ActionType.SET_ADDING_USER:
      return {
        ...state,
        isAddingUser: true,
      };
    case ActionType.CLEAR_LIST:
      return {
        ...state,
        isError: false,
        isLoading: false,
        isUpdating: false,
        isAddingUser: false,
        users: [],
      };
    default:
      return state;
  }
};

export const reducers = combineReducers({
  userReducer: userReducer,
});

export type RootState = ReturnType<typeof reducers>;

export const typedSelector: TypedUseSelectorHook<RootState> = useSelector;
