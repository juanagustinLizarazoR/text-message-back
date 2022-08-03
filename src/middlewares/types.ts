import { NextFunction, Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { TextInDto, TextOutDto } from '../dto';

export type ExpressDictionary = {
  id?: string;
};

export type ExpressRequest = Request<
  ExpressDictionary,
  any,
  TextInDto,
  core.Query,
  Record<string, any>
>;
export type ExpressResponse = Response<TextOutDto, Record<string, any>>;
export type MiddlewareFunction = (
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction,
) => void;
