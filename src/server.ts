import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Express } from 'express';
import morgan from 'morgan';
import { textRouter } from './routers';

const app: Express = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(morgan('combined'));
app.use('/text', textRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log('server connected');
});
