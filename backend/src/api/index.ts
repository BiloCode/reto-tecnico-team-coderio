import { Router } from 'express';
import timezone_router from './routers/timezone_router';

export default () => {
  const app = Router();

  //Routers
  timezone_router(app);

  return app;
}