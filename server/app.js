import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import categoriesRoutes from './routes/categories.routes.js';
import videosRoutes from './routes/videos.routes.js';

const app = express();

app.use(cors())
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api', categoriesRoutes);
app.use('/api', videosRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

export default app;
