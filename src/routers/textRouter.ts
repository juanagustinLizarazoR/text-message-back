import express from 'express';
import {
  textDeleteMiddleware,
  textGetMiddleware,
  textPostMiddleware,
  textPutMiddleware,
} from '../middlewares';

export const textRouter = express.Router();
textRouter.get('/', textGetMiddleware);
textRouter.post('/', textPostMiddleware);
textRouter.put('/:id', textPutMiddleware);
textRouter.delete('/:id', textDeleteMiddleware);
