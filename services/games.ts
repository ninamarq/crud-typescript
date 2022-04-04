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
}

export default GamesService;