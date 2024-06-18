import React from "react";
import { User } from "../../store/Type/User";
import { Action, Dispatch } from "redux";
import { InputElement } from "../inputElement/InputElement";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

type UserInputT = {
    modifyFunction: (user: User) => (dispatch: Dispatch<Action>) => void;
    buttonTitle: string;
    btnClass: string
}

export const UserInput: React.FC<UserInputT> = (props) => {
    const { inModification, users } = useSelector((state: RootState) => state.userReducer);

    const userInUpdate = users.find((user: User) => user.id === inModification.id);

    const [name, setName] = React.useState<string>(userInUpdate ? userInUpdate.name : "");
    const [email, setEmail] = React.useState<string>(userInUpdate ? userInUpdate.email : "");
    const [group, setGroup] = React.useState<string>(userInUpdate ? userInUpdate.group : "");
    const [isAdmin, setIsAdmin] = React.useState<boolean>(userInUpdate ? userInUpdate.admin : false);

    const onUpdateUser = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setEmail("");
        setName("");
        setGroup("");
        setIsAdmin(false)
        props.modifyFunction({
            name: name,
            email: email,
            admin: isAdmin,
            group: group,
            id: userInUpdate ? userInUpdate.id : new Date().toISOString(),
        })
    }


    const onNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setName(e.currentTarget.value)
    }

    const onEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setEmail(e.currentTarget.value)
    }

    const onGroupeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setGroup(e.currentTarget.value)
    }

    const onIsAdminCHanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsAdmin(e.currentTarget.checked)
    }

    return (
        <>
            <InputElement type="text" value={name} name="name" onChanged={onNameChanged} />

            <InputElement type="email" value={email} name="email" onChanged={onEmailChanged} />

            <InputElement type="checkbox" value={isAdmin} name="admin" onChanged={onIsAdminCHanged} />

            <InputElement type="text" value={group} name="group" onChanged={onGroupeChanged} />

            <button className={`${props.btnClass} left-space`} onClick={onUpdateUser}>{props.buttonTitle}</button>
        </>
    )
}