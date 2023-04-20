import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

const users = [
  {
    name: 'Yana',
    email: 'yana@example.com',
    password: bcrypt.hashSync('qazwsx', 10),
    isAdmin: true,
  },
  {
    name: 'Bahar',
    email: 'bahar@example.com',
    password: bcrypt.hashSync('qazwsx', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('qazwsx', 10),
  },
];

export default users;
