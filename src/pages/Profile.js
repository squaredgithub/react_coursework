import React, { useContext } from 'react';
import ChangeProfile from '../components/ChangeProfile';
import { AppContext } from '../App';

const Profile = () => {
  const {username} = useContext(AppContext);

  return (
    <div>
        Profile, user is: { username }
         <ChangeProfile /> 
        </div>
  )
}

export default Profile