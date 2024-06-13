import { useActionCreator } from "../../store";
import { UserInput } from "../userInput/UserInput";

export const AddUserForm: React.FC = () => {
    const { addNewUserAction } = useActionCreator()
    return (<>
        <form className='create-new-user'>
            <h2>New User</h2>
            <UserInput modifyFunction={addNewUserAction} buttonTitle={"Add User"} />
        </form>
    </>)
}