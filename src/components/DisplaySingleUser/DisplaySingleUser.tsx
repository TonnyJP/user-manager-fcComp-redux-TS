
import { User } from "../../store/Type/User";
import React from "react";

export type DisplaySingleUserT = {
    user: User,
    onDelete: (id: string) => void,
    key: string
    onUpdate: () => void
}
export const DisplaySingleUser: React.FC<DisplaySingleUserT> = (props) => {
    const { id, name, email, admin, group } = props.user;

    return <tr className="single-user">
        <td>{name}</td>
        <td>{email}</td>
        <td>{admin ? "true" : "false"}</td>
        <td>{group}</td>
        <td><button onClick={props.onUpdate}>Update</button></td>
        <td><button onClick={() => props.onDelete(id as string)}>Delete</button></td>
    </tr>
}