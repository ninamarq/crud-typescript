import express from 'express';
import GameRouter from './routes/games';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

const PORT = 3000 || process.env.PORT;

app.use(GameRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando no endpoint: http://localhost:${PORT}`);
});
