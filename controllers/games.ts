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
}

export default GamesController;