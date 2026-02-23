import mongoose from "mongoose";

const flightDetailsSchema = mongoose.Schema(
    {

        flightsname: {
            type: String,
            required: true,
        },

        flightNumber: {
            type: Number,
            required: true
        },

        flightArrival: {
            type: Date,
            required: true,
        },

        flightDeparture: {
            type: Date,
            required: true,
        },

        from: {
            type: String,
            required: true,
        },

        to: {
            type: String,
            required: true,
        },
        
        price: {
            type: Number,
            required: true
        }

    },
);

const flightSchema = mongoose.Schema(
    {
       
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },

        flights: [flightDetailsSchema],

        trip: {
            type: String,
            enum: [ "One Way", "Round Trip" ],
            required: true,
        },
        
    },

    {
        timestamps: true

    },
    
);

const Flight = mongoose.model( "Flight", flightSchema )
export default Flight;