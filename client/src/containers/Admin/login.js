import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser} from '../../actions'


class Login extends Component {

    state={ //we need to make control statement validation comes from server here do it in my project
        email:'',
        password:'',
       
        error:'',
        success:false
    }

    handleInputEmail = (event) =>{ //updating the state each time user hits the key
        this.setState({email:event.target.value})

    }
    handleInputPassword = (event) =>{
        this.setState({password:event.target.value})

    }

 

    componentWillReceiveProps(nextProps){//this gives the ability previous property/state and next/present property/sate 
        if(nextProps.user.login.isAuth){ //THEN REDIRECT USER if password and email is correct push to the user // if not correct push error message which in down the button here
            this.props.history.push('/user')
        }

     }

    submitForm = (e)=>{
            e.preventDefault();
            this.props.dispatch(loginUser(this.state))// we need action to check in server
    }

    render() {
        let user= this.props.user;
        return (
            <div className="rl_container">
                <form onSubmit = {this.submitForm}>
                  <h2>Login Here</h2>  
                  <div className="form_element">
                      <input
                            type="email"
                            placeholder="enter your mail"
                            value = {this.state.email}
                            onChange={this.handleInputEmail}/>

                      
                    </div>


                  <div className="form_element">
                      <input
                            type="password"
                            placeholder="enter your password"
                            value={this.state.password}
                            onChange={this.handleInputPassword}/>
                  </div>
                      
                  <button type="submit">Log in</button>
                  <div className="error">
                  {
                      user.login ?
                      <div>
                          {user.login.message}
                      </div>
                      :
                      null
                  }
                  </div>
                </form>
                
            </div>
        );
    }
}
const mapStateToProps = (state) => {
  
    return {
       user:state.user
    }
}

export default connect(mapStateToProps)(Login);