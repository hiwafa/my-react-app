import React from 'react';

interface UserType {
    message: String;
    id: number
}

function User(props: UserType) {
  
  return (
    <div>
        {props.message} - {props.id}
    </div>
  );
}

export default User;
