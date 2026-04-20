import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running!');
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT http://localhost:${PORT}`);
})