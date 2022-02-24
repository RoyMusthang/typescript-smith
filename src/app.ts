import express from 'express';
import dotenv from 'dotenv';
import users from './controllers/users';
import login from './controllers/login';
import product from './controllers/product';
import domainError from './controllers/domain-error';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/users', users);
app.use('/login', login);
app.use('/products', product);

app.use('/', domainError)
export default app;
