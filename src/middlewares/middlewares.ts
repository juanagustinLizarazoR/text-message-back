import { v4 } from 'uuid';
import { TextItem, TextOutDto } from '../dto';
import { MiddlewareFunction } from './types';

const response: TextOutDto = { textArray: [] };
export const textPostMiddleware: MiddlewareFunction = (req, res, next) => {
  const { value } = req.body;

  if (value) {
    const id = v4();
    response.textArray.push({ id, value });
  }
  res.json(response);
};
export const textGetMiddleware: MiddlewareFunction = (req, res, next) => {
  res.json(response);
};

export const textDeleteMiddleware: MiddlewareFunction = (req, res, next) => {
  const { id } = req.params;
  if (id) {
    response.textArray = response.textArray.filter((item) => item.id !== id);
  }
  res.json(response);
};
export const textPutMiddleware: MiddlewareFunction = (req, res, next) => {
  const { id } = req.params;
  const newValue = req.body;
  if (id && newValue !== undefined && response.textArray) {
    response.textArray = response.textArray.map((item) => {
      if (item.id === id) {
        return newValue as TextItem;
      }
      return item;
    });
  }
  res.json(response);
};
