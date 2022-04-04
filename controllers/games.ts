import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import GamesService from '../services/games';

class GamesController {
  constructor(private gameService = new GamesService()) {}

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const games = await this.gameService.getAll();
      return res.status(StatusCodes.OK).json(games);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const game = await this.gameService.getById(id);
      return res.status(StatusCodes.OK).json(game);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  public postGame = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title, gender, creator } = req.body;
      const game = await this.gameService.postGame({ title, gender, creator });
      return res.status(StatusCodes.OK).json(game);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  public updateGame = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { title, gender, creator } = req.body;
      await this.gameService.updateGame(Number(id), { title, gender, creator });
      res.status(StatusCodes.NO_CONTENT).end();
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

export default GamesController;