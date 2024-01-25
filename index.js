import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import cors from 'cors'

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:4200',
  }));

app.get('/', (req, res) => {
    res.json({ message: 'Hello, this is a simple Express server!' });
});

app.post('/upload', (req, res) => {
    console.log(req.file);
    res.json({ message: 'recieved' });
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
