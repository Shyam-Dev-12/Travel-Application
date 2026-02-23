import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Country from "./models/countryModel.js";
import { countryData } from "./data/countryData.js";

dotenv.config();
connectDB();

  // Import Data
const importData = async () => {
  try {
    await Country.deleteMany();               
    await Country.insertMany(countryData);    

    console.log(" Country data imported successfully!");
    process.exit();
  } catch (error) {
    console.error(` Error importing data: ${error.message}`);
    process.exit(1);
  }
};

  // Delete Data
const destroyData = async () => {
  try {
    await Country.deleteMany();               

    console.log(" Country data deleted successfully!");
    process.exit();
  } catch (error) {
    console.error(` Error deleting data: ${error.message}`);
    process.exit(1);
  }
};

// Command Handler
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
