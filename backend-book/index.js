import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURI } from './config.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();

app.use(express.json());

app.use(cors());
//custom cors


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURI)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    })
    .catch((err) => {
        console.log(err);
    })