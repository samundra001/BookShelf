import React from 'react';
import Header from '../components/Header/Header'

const Layout = (props) => {
    console.log(props)
    return (
        <div>
           <Header/>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default Layout;