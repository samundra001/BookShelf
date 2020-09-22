import axios from 'axios';



export function getBooks(
    limit = 10,
    start = 0,
    order='asc',
    list='' //loodmore click garepaxi it get all previuos state
){
    const request = axios.get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
    .then(response=>{
        if(list){
            return [...list,...response.data]
        }else{
            return response.data

        }
        }
        
        )
    return{
        type:'GET_BOOKS',
        payload:request
    }
}

export function getBookWithReviewer(id){
    //here we need to make two request one for book and one for user information 
    //here we use reduxThunk to delay here return (dispatch) is holding project and whenever we get data it is send to the reducers
    //(({data})) destructuring the data
    const request = axios.get(`/api/getBook?id=${id}`)
    

    return (dispatch)=>{
        request.then(({data})=>{ //we need owner id 
            let book = data;

           axios.get(`/api/getReviewer?id=${book.ownerId}`)
           .then(({data}) => {
               let response = {
                   book,
                   reviewer:data
               }
              console.log(response) 
            //redux thunk is delaying
            dispatch({
                type:'GET_BOOK_W_REVIWER',
                payload: response
            })
           
        })

      
        })
    }
}

export function clearBookWithReviewer(){ // to clear previous state in store after all renders
    return{
        type:'CLEAR_BOOK_W_REVIEWER',
        payload:{
            book:{},
            reviewer:{}
        }
    }
}

export function addBook(book){ //we recieve the book info and pass it post
    const request = axios.post('/api/book',book)
     .then(response=>response.data);
     return{
         type:'ADD_BOOK',
         payload:request
     }
}

export function clearNewBook(){
    return{
        type:'CLEAR_NEWBOOK',
        payload:{}
    }
}

export function getUserPosts(userId){//we need query of ownerid which is equal to the userId since we are using the auth middleware we have access to the this.props.user.login.id we pass while dispatching the action
    const request = axios.get(`/api/user_posts?user=${userId}`)
            .then(response=>response.data)
    return{
        type:'GET_USER_POSTS',
        payload:request
    }
}

export function getBook(id){
    const request = axios.get(`/api/getBook?id=${id}`)
    .then(response=>response.data)

    return{
        type:'GET_BOOK',
        payload:request
    }
}

export function updateBook(data){
    const request = axios.post(`/api/book_update`,data)
    .then(response => response.data)

    return{
        type:'UPDATE_BOOK',
        payload:request
    }
}

export function deleteBook(id){
    const request = axios.delete(`/api/delete_book?id=${id}`)
    .then(response => response.data)

    return{
        type:'DELETE_BOOK',
        payload:request
    }
}

export function clearBook(){
    return{
        type:'CLEAR_BOOK',
        payload:{
            book:null,
            updateBook:false,
            postDeleted:false
        }
    }
}

//*===========USER==========*//

export function loginUser({email,password}){
    const request = axios.post('/api/login',{email,password})
    .then(response=>response.data)
 
    return{
        type:'USER_LOGIN',
        payload:request
    }
}



export function auth(){
    const request = axios.get('/api/auth')
    .then (response => response.data);

    return{
        type:'USER_AUTH',
        payload:request
    }
}


export function getUsers(){
    const request = axios.get(`/api/users`)
    .then (response => response.data)

    return {
        type:'GET_USER',
        payload:request
    }

}
export function userRegister(user,userList){
    const request = axios.post(`/api/register`,user)
    
    return(dispatch) =>{//we are not sending reponse from promise we are destructing response and 
       request.then(({data})=>{
           let users = data.success ? [...userList,data.user]:userList;//if some error send prevous user only // or you can do validation in the frontend instead
           let response ={
               success:data.success,
               users // we are sending new user and previous user
           }
           dispatch({
               type:'USER_REGISTER',
               payload:response
           })
       })
    }
}










