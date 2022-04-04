import { Router } from 'express';
import GamesController from '../controllers/games';

const GameRouter = Router();

const controllers = new GamesController();

GameRouter.get('/', controllers.getAll);

GameRouter.get('/:id', controllers.getById);

export default GameRouter;