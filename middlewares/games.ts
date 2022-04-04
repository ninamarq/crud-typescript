import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export function validateTitle(req: Request, res: Response, next: NextFunction) {
  const { title } = req.body;
  if (!title) {
    return res.status(StatusCodes.NOT_FOUND).json({
      message: "Título do jogo não encontrado!",
    });
  }
  if (title.length < 2) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Título muito pequeno, mínimo de 2 caracteres",
    });
  }
  next();
}

export function validateGender(req: Request, res: Response, next: NextFunction) {
  const { gender } = req.body;
  if (!gender) {
    return res.status(StatusCodes.NOT_FOUND).json({
      message: "Gênero do jogo não encontrado!",
    });
  }  
  next();
}

export function validateCreator(req: Request, res: Response, next: NextFunction) {
  const { creator } = req.body;
  if (!creator) {
    return res.status(StatusCodes.NOT_FOUND).json({
      message: "Criador/Produtor do jogo não encontrado!",
    });
  }  
  next();
}
