import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true, 
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true, 
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true, 
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            require: true, 
            min: 2,
        },
        picturePath: {
            type: String,
            default: "",
        },
        friends: {
            type: Array,
            default: []
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number,
    }, 
    {timestamps: true} // this will give us automatic updates and dates of when its created or modified
);

const User = mongoose.model("User", userSchema);
export default User;