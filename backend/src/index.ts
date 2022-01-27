import express from 'express';
import { RegisterRoutes } from '../build/routes';
import swaggerUi from 'swagger-ui-express';
import redoc from 'redoc-express';

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CROS対応（というか完全無防備：本番環境ではだめ絶対）
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  }
);

RegisterRoutes(app);

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

app.listen(3000, () => {
  console.log('Start on port 3000.');
});
