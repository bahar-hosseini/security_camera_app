//External Modules
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//Internal Modules
import connectDB from './config/db.js';
import User from './models/userModel.js'
import users from './data/users.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id;

    console.log('Data imported successfully');
    process.exit();
    
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);
}
}

const destroyData = async () => {
  try {
    await User.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

process.argv[2] === '-d' ? destroyData() : importData();