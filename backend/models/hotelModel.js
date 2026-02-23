import mongoose from 'mongoose' 

const hotelSchema = mongoose.Schema(
    {

        user: {
           type: mongoose.Schema.Types.ObjectId,
           required: true,
           ref: "User",
        },

        hotelName: {
            type: String,
            required: true,
        },

        hotelAddress: {
            type: String,
            required: true,
        },

        checkIn: {
            type: Date,
            required: true
        },

        checkOut: {
            type: Date,
            required: true
        },

        price: {
            type: Number,
            required: true
        },

        bookingId: {
            type: String,
            required: true
        },

        dateOfBooking: {
            type: Date,
            default: Date.now,
        },

        rooms: {
            type: Number,
            required: true
        },

        paidAmount: {
            type: Number,
            required: true
        },

        paymentStatus: {
            type: String,
            enum: [ "Pending", "Paid", "Failed" ],
            default: "Pending",
        }

    },

    {
        timestamps: true
    },

)

const Hotel = mongoose.model("Hotel", hotelSchema)
export default Hotel