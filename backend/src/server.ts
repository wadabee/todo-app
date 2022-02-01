import express from 'express';
import app from './app';
import swaggerUi from 'swagger-ui-express';
import redoc from 'redoc-express';

app.get('/docs/swagger.json', (req, res) => {
  res.sendFile('/build/swagger.json', { root: '.' });
});

app.use(
  '/docs',
  swaggerUi.serve,
  async (req: express.Request, res: express.Response) => {
    return res.send(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      swaggerUi.generateHTML(await import('../build/swagger.json'))
    );
  }
);

app.get(
  '/redoc',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  redoc({
    title: 'API Docs',
    specUrl: '/docs/swagger.json',
  })
);

app.listen(8000, () => {
  console.log('Start on port 8000.');
});
