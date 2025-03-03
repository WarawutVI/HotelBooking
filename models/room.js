const mongoose =require('mongoose');




const roomSchema = mongoose.Schema({
    name: { // room number
        type: String,
        required: true
    },
    maxcount: { 
        type: Number,
        required: true
    },
    phonenumber: {
        type: String, // change Data type
        required: true
    },
    imageurls: [],
    currentbookings: [],
    type: {
        type: String,
        required: true // delete
    },
    description: {
        type: String, //delete
        required: true
    },
    rentperday: {
        type: Number,
        required: true
    },
    amount:{
        type:Number,
        require:true
    }

}, {
    timestamps: true
});



const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
