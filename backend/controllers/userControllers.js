import asyncHandler from '../middlewares/asyncHandler.js'
import User from '../models/userModel.js'
import { generateToken } from "../utils/generateToken.js";

const registerUser = asyncHandler ( async ( req, res ) => {
    const { name, email, phone, password } = req.body
    const userExist = await User.findOne({email})
    if ( userExist ){
        return res.status(400)
        .json({ message: " User already Exists" })
    }

    const user = await User.create({
        name,
        email,
        phone,
        password,
    })
    if (user){
        
        generateToken(res,user._id)

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
        })
    }
    else{
        res.status(400)
        throw new Error(" Invalid User Data ")   
    }

})

const authUser = asyncHandler (async ( req, res ) => {
    const { email, password } = req.body
    const user = await User.findOne({email})
    if( user && ( await user.matchPassword(password))){

        generateToken(res, user._id)

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
        
    }
    else{
        res.status(401)
        throw new Error(" Invalid Email and Password")
    }

})

const logoutUser = asyncHandler( async( req, res ) => {
    res.cookie( "jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    })
    res.status(200).json({ message: " Logged Out Successfully "})
})

const getUserProfile = asyncHandler(async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    // country: user.country || ""
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


export { registerUser, authUser, logoutUser, getUserProfile }
