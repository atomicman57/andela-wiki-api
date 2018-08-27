import express from 'express';
import { User } from '../controllers';

const userRoutes = express.Router();
userRoutes.get('/users', User.create);


module.exports = userRoutes;