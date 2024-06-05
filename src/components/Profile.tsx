import React from 'react';


interface ProfileTypes {
    message: string;
    age?: number;
    isMen: boolean
}

function Profile(props: ProfileTypes) {

    let obj: {
        readonly phone: number;
        text: string
    }

    obj = {
        phone: 9999,
        text: "How are you?"
    }

    // obj.phone = 3938484; // we can not use this, while it is readonly
    obj.text = "How is it going?"

    return (
        <div>
            {props.message} - {props.isMen && "Sex: Men"} - {obj.text}
        </div>
    );
}

export default Profile;
