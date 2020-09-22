import React from 'react';
import axios from 'axios';
const Logout = (props) => { //we reace props from auth
    
    let request = axios.get(`/api/logout`)
    .then (request=>{
        setTimeout(()=>{
            props.history.push('/')
        },2000)

    })


    return (
        <div className="logout_container">
           <h1>
               sorry to see you going :(
           </h1>
        </div>
    );
};

export default Logout;