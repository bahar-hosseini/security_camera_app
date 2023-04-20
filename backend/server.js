//External Modules
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();

//Internal Modules
import userRoutes from './routes/userRouter.js';

connectDB()

const app = express();
app.use(express.json());


app.get('/',(req,res)=>{
  res.send('API is running')
})

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
