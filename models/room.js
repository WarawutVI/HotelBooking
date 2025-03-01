const mongoose =require('mongoose');




const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    maxcount: {
        type: Number,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    imageurls: {
        type: Array,
        default: []
    },
    currentbookings: {
        type: Array,
        default: []
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    collection: 'rooms'  
});


const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
