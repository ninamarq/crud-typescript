import { Router } from 'express';
import GamesController from '../controllers/games';
import { validateTitle,
  validateGender, validateCreator } from '../middlewares/games';

const GameRouter = Router();

const controllers = new GamesController();

const validatePost = [
  validateTitle,
  validateCreator,
  validateGender
];

GameRouter.get('/', controllers.getAll);

GameRouter.get('/:id', controllers.getById);

GameRouter.post('/', validatePost, controllers.postGame);

export default GameRouter;