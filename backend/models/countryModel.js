import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
});

const flightSchema = new mongoose.Schema({
    airline: { 
        type: String, 
        required: true 
    },
    airlineCode: { 
        type: String, 
        required: true 
    },
    flightNumber: { 
        type: String, 
        required: true 
    },
    dep: { 
        type: String, 
        required: true 
    },
    arr: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    fromAirport: { 
        type: String, 
        required: true 
    },
    toAirport: { 
        type: String, 
        required: true 
    }
});

const citySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    airport: { 
        type: String, 
        required: true 
    },
    hotels: [hotelSchema],
    flights: [flightSchema]
});

const countrySchema = new mongoose.Schema({
    code: { 
        type: String, 
        required: true 
    },
    country: { 
        type: String, 
        required: true 
    },
    cities: [citySchema]
});

export default mongoose.model("Country", countrySchema);
