import { Router, Request, Response } from 'express';

import {
  getProviders,
  saveProvider,
  getProvider,
  updateProvider,
  deleteProvider
} from './controller/ProviderController';

import {
  getModels,
  saveModel,
  getModel,
  updateModel,
  deleteModel
} from './controller/ModelController';

import {
  getEquipments,
  getEquipment,
  saveEquipment,
  updateEquipment,
  deleteEquipment
} from './controller/EquipmentController';

import {
  getStock,
  saveStock,
  deleteStock,
  updateStock
} from './controller/Stock_internalController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {

  return response.json({ message: "Hello World" });
});

/**
 * Rotas para a tabela do Provider
 */
routes.get('/provider', getProviders);
routes.get('/provider/:id', getProvider);
routes.post('/provider', saveProvider);
routes.put('/provider/:id', updateProvider);
routes.delete('/provider/:id', deleteProvider);

/**
 * Rotas para a tabela do Model
 */
routes.get('/model', getModels);
routes.get('/model/:id', getModel);
routes.post('/model', saveModel);
routes.put('/model/:id', updateModel);
routes.delete('/model/:id', deleteModel);

/**
 * Rotas para a tabela de Equipment
 */
routes.get('/equipment', getEquipments);
routes.get('/equipment/:id', getEquipment);
routes.post('/equipment', saveEquipment);
routes.put('/equipment/:id', updateEquipment);
routes.delete('/equipment/:id', deleteEquipment);

/**
 * 
 */
routes.get('/stockIn', getStock);
routes.post('/stockIn', saveStock);
routes.put('/stockIn/:id', updateStock);
routes.delete('/stockIn/:id', deleteStock);

export default routes;