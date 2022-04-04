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

  public async updateGame(id: number, game: IGames) {
    const { title, gender, creator } = game;
    await this.connection
      .execute<ResultSetHeader>(`
      UPDATE crud_typescript.games
      SET title=?, gender=?, creator=?
      WHERE id=?`, [title, gender, creator, id]);
  }

  public async deleteGame(id: number) {
    await this.connection
      .execute<ResultSetHeader>(`
      DELETE FROM crud_typescript.games
      WHERE id=?`, [id]);
  }
}
