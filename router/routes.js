import express from 'express';
import { getUsers, addUser } from '../controllers/commands.js';

export const Router = express.Router();

Router.post('/addUser', (req, res) => {
  addUser(req, res);
});

Router.get('/getUSer', (req, res) => {
  getUsers(req, res);
});
