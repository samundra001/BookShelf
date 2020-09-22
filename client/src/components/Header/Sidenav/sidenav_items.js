import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import {connect} from 'react-redux';

const SideNavItems = ({user}) => { //get user information from auth which is in redux store

    const items = [
        {
            type:'navItem',
            icon:'home',
            text:'Home',
            link:'/',
            restricted:false
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'My Profile',
            link:'/user',
            restricted:true
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'Add Admins',
            link:'/user/register',
            restricted:true
        },
        {
            type:'navItem',
            icon:'fal fa-sign-in',
            text:'Login',
            link:'/login',
            restricted:false,
            exclude:true // if user is logged in 
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'My reviews',
            link:'/user/user-reviews',
            restricted:true
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'Add reviews',
            link:'/user/add',
            restricted:true
        },
        {
            type:'navItem',
            icon:'fal fa-sign-out',
            text:'Logout',
            link:'/user/logout',
            restricted:true // only show when the user is logged in 
        }
    ]

    const element = (item,i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                <FontAwesome name={item.icon}/>
                {item.text}
                </Link>
        </div>
    )

const showItems=()=>(
    user.login? //we get it from props 
    items.map((item,i)=>{
        if(user.login.isAuth){ //we show everthing except the login which has exclude
           return !item.exclude ?
            element(item,i)
            :
            null
        }else{
            return !item.restricted ?
            element(item,i)
            :
            null
        }
    
    })
    :null
)

    return (
        <div>
            {showItems()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
       user: state.user
    }
}
export default connect(mapStateToProps)(SideNavItems);