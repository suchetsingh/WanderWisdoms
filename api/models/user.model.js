import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture:{
      type:String,
      default:"https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png"
    },
    isAdmin: {
      type:Boolean,
      default:false,
    }
  },
  { timestamps: true }
);

const User=mongoose.model("User",userSchema);

export default User;
