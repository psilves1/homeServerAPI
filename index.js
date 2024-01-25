import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import path from 'path';

const app = express();
const port = 80;

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:4200',
}));

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'test/'); // Specify the directory where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original filename
  }
});

const upload = multer({ storage });

app.get('/', (req, res) => {
  res.json({ message: 'Hello, this is a simple Express server!' });
});

// Use upload.single middleware to handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file); // Now req.file should be defined
  res.json({ message: 'received' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
