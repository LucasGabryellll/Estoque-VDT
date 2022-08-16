import { Router, Request, Response} from 'express';

import { 
  getProviders, 
  saveProvider, 
  getProvider, 
  updateProvider,
  deleteProvider
} from './controller/ProviderController';

const routes = Router();

routes.get('/', (request: Request, response : Response) => {
  
  return response.json({ message: "Hello World" });
});

/**
 * Rotas para a tabela do Provider
 */
routes.get('/provider', getProviders);
routes.get('/provider/:id', getProvider);
routes.post('/provider', saveProvider);
routes.put('/provider/:id', updateProvider);
routes.delete('provider/:id', deleteProvider);

export default routes;