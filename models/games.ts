import { Pool } from 'mysql2/promise';
import IGames from '../interfaces/games';

export default class GamesModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IGames[]> {
    const [games] = await this.connection
      .execute('SELECT * FROM games');
    return games as IGames[];
  }
}