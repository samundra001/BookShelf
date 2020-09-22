import React from 'react';
//props from auth ko <composedclass user=""() //which is in redux store comes form redux store
const User = (props) => {
  let user = props.user.login;
    return (
        <div className="user_container">
            <div className="avatar">
                <img alt="avatar" src="/images/avatar.png"/>
                <div className = "nfo">
                    <div><span>Name:</span>{user.name} </div>
                    <div><span>Lastname:</span>{user.lastname}</div>
                    <div><span>Email:</span>{user.email}</div>
                </div>
            </div>
            
        </div>
    );
};

export default User;