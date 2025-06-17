import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  })
);

app.get('/', (req, res) => {
  res.send('Hello World from Vercel Serverless Express!');
});

export default serverless(app);
