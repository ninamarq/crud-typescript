import { Pool } from 'mysql2/promise';
import IGames from '../interfaces/games';

export default class GamesModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IGames[]> {
    const [games] = await this.connection
      .execute('SELECT * FROM crud_typescript.games;');
    return games as IGames[];
  }

  public async getById(id: number): Promise<IGames> {
    const [result] = await this.connection
      .execute(`SELECT * FROM crud_typescript.games
      WHERE id = ?;`, [id]);
      const [game] = result as IGames[];
      return game;
  }
}
