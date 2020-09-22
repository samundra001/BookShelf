import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getBookWithReviewer,clearBookWithReviewer} from '../../actions'
class BookView extends Component {

componentWillMount(){
    this.props.dispatch(getBookWithReviewer(this.props.match.params.id))//passes the book id
}
componentWillUnmount(){//to clear the previous things in store
    this.props.dispatch(clearBookWithReviewer)
}
renderBook = (books)=>(
    //first time it render we dont have book
    books.book ? 
    <div className="br_container">
        <div className="br_header">
            <h2>{books.book.name}</h2>
            <h5>{books.book.author}</h5>
            <div className="br_reviewer">
                <span>Review by:</span> {books.reviewer.name} {books.reviewer.lastname}
             </div>
        </div>
        <div className="br_review">
            {books.book.review}
        </div>
        <div className="br_box">
            <div className="left">
                <span>Pages:</span> {books.book.pages}
            
            <div>
                <span> Price:</span>{books.book.price}
            </div>
            </div>
            <div className="right">
                <span>Rating</span>
                <div>{books.book.rating}/5</div>
                </div>

        </div>

    </div>
    :
    null
)

    render() {
        console.log(this.props)
       let books = this.props.books;//after render we get all imformation about the book
        return (
            <div>
               {this.renderBook(books)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookView);