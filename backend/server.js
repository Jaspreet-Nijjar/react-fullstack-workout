require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts');

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/', (req, res) => {
  res.json({ mssge: 'Welcome to the app' });
});

app.listen(process.env.PORT, () => {
  console.log('listening on', process.env.PORT);
});
