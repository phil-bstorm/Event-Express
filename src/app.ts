import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mainRouter from './routers';

const { NODE_ENV, PORT } = process.env;

//! Mise en place de la Web API
const app = express();

//! App middleware
//? Logger
app.use(morgan('tiny'));

//? Cors
app.use(cors());

//? Body parser
app.use(express.json());

//! Routing
app.use('/api', mainRouter);

//! Démarrage de la Web API
app.listen(PORT, () => {
  console.log(`Web API is running on port ${PORT} (${NODE_ENV})`);
});
