import express from "express";
import waitlistRoutes from './routes/waitlistRoutes.js'

const app = express();
const port = 4000;


// middleware: fire every time receive a request. Fire BEFORE the route to the root path ('/')
app.use(express.json())
app.use((req, res, next) => {
  console.log("Path detected:")
  console.log(req.path, req.method)
  next()
})

app.use('/api/waitlist', waitlistRoutes)



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

