const mongoose = require('mongoose');


const articleSchema = ({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    markdown:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Article',articleSchema); 