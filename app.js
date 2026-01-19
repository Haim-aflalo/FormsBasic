import express from 'express';
import { Router } from './router/routes.js';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/user', function (req, res) {
  res.sendFile(
    'C:/Users/INTERNET/Desktop/Html/FormsBasic/client/register.html',
  );
});

app.use('/user', Router);

app.listen(3000, () => {
  console.log('server run');
});
