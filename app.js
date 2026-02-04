import express from 'express';
import userRoutes from './routes/users.routes.js';

const app = express();

// body parser (JSON)
app.use(express.json());


// Base Route
app.get('/', (req, res) => {
  res.send('User Management API is running');
});

// User Routes
app.use('/api/users', userRoutes);

export default app;