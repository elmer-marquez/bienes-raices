import express from 'express'; //ECMA6 module syntax
import authRouter from './routes/auth.router.js';

const app = express();
const PORT = 3000;

//Routes
app.use("/auth", authRouter); // use the userRoutes module

// Enable Pug
app.set('view engine', 'pug'); // set the view engine to pug
app.set('views', './views'); // set the views directory

app.use(express.static('public')); // serve static files from the public directory

// run server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});