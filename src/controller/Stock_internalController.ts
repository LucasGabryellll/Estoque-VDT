import { Stock_internal } from "../entity/Stock_internal";
import { Request, Response } from 'express';

export const getStock = async (request: Request, response: Response) => {

  const stock = await Stock_internal.getRepository().find();

  return response.json(stock);
}

export const saveStock = async (request: Request, response: Response) => {

  try {
    const stock = await Stock_internal.getRepository().save(request.body);

    response.json(
      {
        id: stock.id,
        message: "Stock internal registered successfully"
      }
    );
  } catch (error) {

    return response.status(400).json({ message: "Erro saving, check the data and try again!" });
  }
}

export const updateStock = async (request: Request, response: Response) => {

  const { id } = request.params;
 
  try {
    const stock = await Stock_internal.getRepository().update(id, request.body);
    if (stock.affected === 1) {
      const stockUpdated = await Stock_internal.getRepository().findOne({
        where: {
          id: parseInt(id)
        }
      });

      return response.json(stockUpdated);
    }

  } catch (error) {

    return response.status(404).json({ message: 'Model not found' });
  }
}

export const deleteStock = async (request: Request, response: Response) => {

  const { id } = request.params;

  try {
    const stock = await Stock_internal.getRepository().delete(id);

    if (stock.affected === 1) {
      return response.json({ message: "Stock removed" });
      
    }
  } catch (error) {

    return response.status(404).json({ message: "Stock not found" });
  }
}