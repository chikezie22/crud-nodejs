import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users';
const app = express();

// boder express
app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('Hello Chioma Lillian how are u');
});

app.listen(5000, () => {
  console.log('running at port 5000');
});
