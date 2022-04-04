import connection from '../models/connection';
import GamesModel from '../models/games';
import IGames from '../interfaces/games';

class GamesService {
  public model: GamesModel;

  constructor() {
    this.model = new GamesModel(connection);
  }

  public async getAll(): Promise<IGames[]> {
    const games = await this.model.getAll();
    return games;
  }

  public async getById(id: number): Promise<IGames> {
    const game = await this.model.getById(id);
    return game;
  }

  public async postGame(game: IGames): Promise<IGames> {
    const gameCreated = await this.model.postGame(game);
    return gameCreated;
  }

  public async updateGame(id: number, game: IGames): Promise<void> {
    await this.model.updateGame(id, game);
  }
}

export default GamesService;