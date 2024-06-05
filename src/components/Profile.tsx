import React from 'react';


interface ProfileTypes {
    message: string;
    age?: number;
    isMen: boolean
}

function Profile(props: ProfileTypes) {

    // let obj: {
    //     readonly phone: number;
    //     text: string
    // }
   
    interface objType {
        readonly phone: number;
        text: string
    }
    let obj: objType;
    obj = {
        phone: 9999,
        text: "How are you?"
    }

    // obj.phone = 3938484; // we can not use this, while it is readonly
    obj.text = "How is it going?"




    interface funcTYpe {
        (info: string, aktiv: boolean): string
    }

    let myFunc: funcTYpe = function (info, aktiv){
        let prsn = new Person("Muhammad", "Wafa");
        prsn.display("Called: ")
        return info;
    }


    interface A{
        display(value: string): void
    }

    class Person implements A {

        constructor(private firstName: string, private lastName: string){

        }

        display(value: string): void {
            console.log(value, this.firstName, this.lastName)
        }
    }



    return (
        <div>
            {props.message} - {props.isMen && "Sex: Men"} - {obj.text}
            <br />
            {myFunc("A test info", true)}
        </div>
    );
}

export default Profile;
