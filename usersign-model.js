import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword:{
        type: String,
        required: true
    },

},{timestamp:true}); //used to not the create and updated at

const User = mongoose.model("User",userSchema);
export default User;