import { Router } from 'express';
import client_router from './routers/client_router';
import timezone_router from './routers/timezone_router';

export default () => {
  const app = Router();

  //Routers
  timezone_router(app);
  client_router(app);

  return app;
}