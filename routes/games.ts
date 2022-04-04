import { Router } from 'express';
import GamesController from '../controllers/games';
import { validateTitle,
  validateGender, validateCreator } from '../middlewares/games';

const GameRouter = Router();

const controllers = new GamesController();

const validateBody = [
  validateTitle,
  validateCreator,
  validateGender
];

GameRouter.get('/', controllers.getAll);

GameRouter.get('/:id', controllers.getById);

GameRouter.post('/', validateBody, controllers.postGame);

export default GameRouter;