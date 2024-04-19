import express from "express";
import waitlistRoutes from './routes/waitlistRoutes.js'
import propertyManagerRoutes from './routes/propertyManagerRoutes.js'
import cors from 'cors'
import axios from 'axios';

const app = express();
const port = 4000;


// middleware: fire every time receive a request. Fire BEFORE the route to the root path ('/')


const allowedOrigins = ['https://rentwallex.onrender.com'];

app.use(cors());

app.use(express.json())

app.use((req, res, next) => {
  console.log("Path detected:")
  console.log(req.path, req.method)
  console.log("Request Origin:", req.get('origin'));
  next()
})

app.use('/api/waitlist', waitlistRoutes)
app.use('/api/propertymanagers', propertyManagerRoutes)


app.use('/healthCheck', (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now()
  };
  try {
    res.status(200).send(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(503).send();
  }
})





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

