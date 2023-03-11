import React from 'react';
import { NAME } from '../constants/constants';

const Profile = () => {
  return (
    <div id="profile" className="px-8">
      <header className="uppercase font-bold mt-[30px]">Profile</header>
      <div>
        <p>
          My name is {NAME}. I learn at HIT. I like music. I am a wrestler. I am
          a footballer. I went to Howard High.
        </p>
      </div>
    </div>
  );
};

export default Profile;
