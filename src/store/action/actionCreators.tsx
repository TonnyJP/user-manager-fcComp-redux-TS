import { Dispatch } from "redux"
import { User } from "../Type/User"
import { Action } from "../Type/ActionType"
import { ActionType } from "./action"

export const addNewUserAction = (user: User) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CREATE_NEW_USER,
            payload: user
        })
    }
}

export const deleteUserAction = (id: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOADING
        })
        dispatch({
            type: ActionType.DELETE_USER,
            payload: { id: id }
        })
    }
}

export const updateUserAction = (user: User) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE_USER,
            payload: user
        })
    }
}

export const errorAction = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ERROR
        })
    }
}

export const loadingAction = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOADING
        })
    }
}

export const clearListAction = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CLEAR_LIST
        })
    }
}

export const setAddingUserAction = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_ADDING_USER
        })
    }
}

export const setUserUpdateAction = (id: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_USER_UPDATE,
            payload: {
                id: id
            }
        })
    }
}