import { useActionCreator } from "../../store"
import { UserInput } from "../userInput/UserInput"

export const UpdateUser: React.FC = () => {
    const { updateUserAction } = useActionCreator();
    return <form className="update-user">
        <h3>Update User</h3>
        < UserInput modifyFunction={updateUserAction} buttonTitle={"Update User"} />
    </form>
}