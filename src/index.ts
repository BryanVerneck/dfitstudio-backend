import express from 'express';
import mongoose from 'mongoose';

import { router } from './app/router';

mongoose.connect('mongodb+srv://BryanVerneck:9Fji7sWVdHvnCSFO@dfitstudio.ve5mzpu.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    const app = express();
    const port = 3000;

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      next();
    });

    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  }).catch(() => console.log('Erro ao conectar ao MongoDB'));
