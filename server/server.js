import express from "express";
import waitlistRoutes from './routes/waitlistRoutes.js'
import propertyManagerRoutes from './routes/propertyManagerRoutes.js'
import cors from 'cors'
import axios from 'axios';

const app = express();
const port = 4000;


// middleware: fire every time receive a request. Fire BEFORE the route to the root path ('/')


const allowedOrigins = ['https://rentwallex.onrender.com'];

app.use(cors({
  origin: function (origin, callback) {
    // Check if the request origin is allowed
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

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

// Prevent cloud server from becoming inactive. Ping every 14 minutes.
// const keepServerAlive = async () => {
//   try {
//     // const response = await axios.get('https://rentwallex-server-jk0x.onrender.com/healthCheck');
//     const response = await axios.get('/healthCheck');

//     console.log('Server pinged successfully.');
//   } catch (error) {
//     console.error('Error pinging server:', error);
//   }
// }


const INTERVAL_TIME = 1 * 60 * 1000; // 14 minutes in milliseconds

// keepServerAlive()
// setInterval(keepServerAlive, INTERVAL_TIME)




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

