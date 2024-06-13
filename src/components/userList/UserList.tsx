import { useSelector } from "react-redux"
import { RootState, useActionCreator } from "../../store"
import { User } from "../../store/Type/User"
import { DisplaySingleUser } from "../DisplaySingleUser/DisplaySingleUser"

export const UserList: React.FC = () => {
    const { users } = useSelector((state: RootState) => state.userReducer);
    const { deleteUserAction, setUserUpdateAction } = useActionCreator();

    const onUserDelete = (id: string) => {
        deleteUserAction(id)
    }
    const onSetUserUpdate = (id: string) => {
        setUserUpdateAction(id)
    }

    return <>{users.length > 0 && <table className="user-list">
        <caption><h2>User List</h2></caption>
        <tbody>
            <tr>
                <th><h3>Name</h3></th>
                <th><h3>Email</h3></th>
                <th><h3>Admin</h3></th>
                <th><h3>Group</h3></th>
                <th></th>
                <th></th>
            </tr>
            {users.map((user: User) => {
                const props = { user, onDelete: () => onUserDelete(user.id), onUpdate: () => onSetUserUpdate(user.id) }
                return <DisplaySingleUser key={user.id as string}
                    {...props}
                />
            })}
        </tbody>
    </table>}</>
}