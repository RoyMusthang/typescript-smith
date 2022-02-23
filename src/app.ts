import express from 'express';
import users from './controllers/users';
import login from './controllers/login';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/users', users);
app.use('/login', login);

export default app;
