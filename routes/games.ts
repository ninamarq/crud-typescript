import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const GameRouter = Router();

GameRouter.get('/', (req, res) => res.status(StatusCodes.OK).json('opa bao?'));

export default GameRouter;