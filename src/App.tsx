import React from 'react';
import './App.css';
import { AddUserForm } from './components/addUserForm/AddUserForm';
import { useSelector } from 'react-redux';
import { RootState, useActionCreator } from './store';
import { UserList } from './components';
import { UpdateUser } from './components/updateUser/UpdateUser';

function App() {
  const { users, isUpdating, isAddingUser } = useSelector((state: RootState) => state.userReducer);
  const { setAddingUserAction, clearListAction } = useActionCreator();

  const onSetAddingUser = () => {
    setAddingUserAction()
  }

  const onClearList = () => {
    clearListAction()
  }

  return <div className='App'>
    <header className='App-header'>
      <h1>User Manager</h1>
    </header>
    {!isAddingUser && <button className='home-add-user-btn' onClick={onSetAddingUser}>Add User</button>}
    {isAddingUser && <AddUserForm />}
    <div className='user-list-container'>
      <UserList />
    </div>
    {isUpdating && <UpdateUser />}
    {users.length > 0 && <button className="clear-list-btn top-space" onClick={onClearList}>Clear List</button>}
  </div>
}

export default App;
