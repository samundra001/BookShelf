import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { auth } from '../actions'
 //{Auth(Home,null)} here home is composedclass
export default function(ComposedClass,reload){
  class AuthenticationCheck extends Component{ // we ll return this class when we wil call the auth
    //it returns the routes we want to render if we have valid token it returns route with props user want to access or kick user out
  
    state={
        loading:true //takes few time to go to server and check the token / while doing this we want to show loading
   
    }
///we check if user is auth we render if not we reload and kick the user back
// auth also injects props of user {..this.props}=passing the properties from routes user=""api/auth call vayepaxi return hunne
//main idea of composedcomponent here is to do smt before rendering and then pass data inside the props
    componentWillMount(){
      this.props.dispatch(auth())
    }

    componentWillReceiveProps(nextProps){
        this.setState({loading:false})
 //2.login //3.user //1.home is null
        if(!nextProps.user.login.isAuth){ //reload===true it goes to the infinte loop
           if(reload){
            this.props.history.push('/login');
           }
        }else{
            if(reload===false)
            {
            // //user is auth we are pushing to user itself to user 
            this.props.history.push('/user')
            }
        }
    }

    render(){
        
        if(this.state.loading){
            return <div className="loader">Loading...</div>
        }
        return(
          <div>
              <ComposedClass {...this.props} user={this.props.user}/> 
               </div>

        )
    }

  }

  const mapStateToProps = (state) => {
      return {
         user:state.user
      }
  }

  return  connect(mapStateToProps)(AuthenticationCheck)


}