import React from 'react';

interface UserType {
    message: String;
    id: number
}

function User(props: UserType) {

    let username: string = "hiwafa";
    let age:number = 27;
    let isActive:boolean = true;
    let friends: string[] = ['Irina', 'Alina', 'Alex'];
    let connections: {
        cId: number;
        usr: string
    };
    connections = {
        cId: 99,
        usr: "Reza"
    }


    let greeting: (name: string) => string;
    greeting = function(name){
        return name;
    }

    let sayHi = (id: number): string => {
        return `id: ${id}`
    }
  
  return (
    <div>
        {props.message} - {props.id} - {username}
    </div>
  );
}

export default User;
