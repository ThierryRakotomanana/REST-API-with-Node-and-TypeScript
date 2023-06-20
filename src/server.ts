import express, { Express, Request, Response } from 'express';
const port = 8000
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Application works!');
});

app.listen(8000, () => {
  console.log(`Application started on port ${port}! : http://localhost:8000`);
});