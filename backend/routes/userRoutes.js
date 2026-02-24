import express from 'express';
import  { registerUser, authUser, logoutUser, getUserProfile } from '../controllers/userControllers.js'
import { admin, protect } from '../middlewares/authMiddleware.js'

const router = express.Router();

router.route("/").post(registerUser)
router.post("/login", authUser )
router.post("/logout", logoutUser)
router.get("/profile/:email", getUserProfile);

export default router