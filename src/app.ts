import express from 'express';
import users from './controllers/users';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/users', users)

export default app;
