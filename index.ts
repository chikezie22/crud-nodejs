import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
const app = express();

// boder express
app.use(bodyParser.json());
app.use('/users', usersRoutes);

// Swagger setup
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Users API',
      version: '1.0.0',
      description: 'Simple API to manage users',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Local Server', // 👈 this replaces "default"
      },
    ],
  },
  apis: ['./routes/*.ts'], // points to your route files
};

const swaggerSpec = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.redirect('/users');
});

app.listen(5000, () => {
  console.log('running at port 5000');
});
