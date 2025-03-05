import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './src/routes';
dotenv.config();

const app = express();
app.use(cors());

import { port } from './src/configs/env';

app.use(json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello MongoDB!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
