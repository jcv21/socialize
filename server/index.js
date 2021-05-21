import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';


// initialize the express app
const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

// Always put the routes below the cors code to prevent network errors.
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Hello to Socialize API');
});

// to remove later this is put here for development purposes
const PORT = process.env.PORT || 5000;

// Initialize Mongoose connection
mongoose
    .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);