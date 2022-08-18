import { Model } from '../entity/Model';
import { Request, Response } from 'express';
import { Stock_internal } from '../entity/Stock_internal';

export const getModels = async (request: Request, response: Response) => {

  const models = await Model.getRepository().find();

  return response.json(models);
}

export const getModel = async (request: Request, response: Response) => {

  const { id } = request.params;
  const model = await Model.getRepository().findOne({
    where: {
      id_model: parseInt(id)
    }
  });

  try {
    if (model == null) {

      return response.json([]);
    }
    
    return response.json(model);

  } catch (error) {

    return response.status(400).json({ message: "Error when fetching model" });
  }
}

export const saveModel = async (request: Request, response: Response) => {

  try {
    const IDStock = await Stock_internal.getRepository().save({});
    const model = await Model.getRepository().save(request.body);
  
    await Model.getRepository().update(model.id_model, { stock_internal: { id: IDStock.id } });

    response.json(
      {
        id: model.id,
        message: "Model registered successfully"
      }
    );
  } catch (error) {

    return response.status(400).json({ message: "Erro saving, check the data and try again!" });
  }
}

export const updateModel = async (request: Request, response: Response) => {

  const { id } = request.params;

  try {
    const model = await Model.getRepository().update(id, request.body);

    if (model.affected === 1) {
      const modelUpdated = await Model.getRepository().findOne({
        where: {
          id_model: parseInt(id)
        }
      });

      return response.json(modelUpdated);
    }

  } catch (error) {

    return response.status(404).json({ message: 'Model not found' });
  }

}

export const deleteModel = async (request: Request, response: Response) => {
  const { id } = request.params;

  try {
    const model = await Model.getRepository().delete(id);

    if (model.affected === 1) {
    
      return response.json({ message: "Model removed" });
    }
  } catch (error) {

    return response.status(404).json({ message: "Model not found" });
  }

}