const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({ //when they add the reviews
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    review:{
        type:String,
        default:'n/a'//not available
    },
    pages:{
        type:String,
        default:'n/a'
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    price:{
        type:String,
        default:'n/a'
    },
    ownerId:{
        type:String,
        default:true
    }
},
{
    timestamps:true //automatically crate create at and updated at by default
})

const Book = mongoose.model('Book',bookSchema)

module.exports = { Book }