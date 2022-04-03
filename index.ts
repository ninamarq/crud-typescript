import express from 'express';
import { StatusCodes } from 'http-status-codes';
import GameRouter from './routes/games';

const app = express();

app.use(express.json());

const PORT = 3000;

app.use(GameRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando no endpoint: http://localhost:${PORT}`);
});
