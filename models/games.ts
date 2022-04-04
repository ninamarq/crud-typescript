import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  public async postGame(game: IGames): Promise<IGames> {
    const { title, gender, creator } = game;
    const [result] = await this.connection
      .execute<ResultSetHeader>(`INSERT INTO crud_typescript.games (title, gender, creator)
      VALUES (?, ?, ?)`, [title, gender, creator]);
    const { insertId } = result;
    return { id: insertId, ...game };
  }
}
