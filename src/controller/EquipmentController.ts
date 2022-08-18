import { Equipment } from '../entity/Equipment';
import { Model } from '../entity/Model';
import { Stock_internal } from '../entity/Stock_internal';
import { Request, Response } from 'express';

export const getEquipments = async (request: Request, response: Response) => {

  const equipments = await Equipment.getRepository().find();

  return response.json(equipments);
}

export const getEquipment = async (request: Request, response: Response) => {

  const { id } = request.params;
  const equipment = await Equipment.getRepository().findOne({
    where: {
      id_equip: parseInt(id)
    }
  });

  try {
    if (equipment == null) {

      return response.json([])
    }

    return response.json(equipment);
  } catch (error) {

    return response.status(400).json({ message: "Error when fetching model" });
  }
}

export const saveEquipment = async (request: Request, response: Response) => {

  try {
    const equipment = await Equipment.getRepository().save(request.body);

    const IDmodel = request.body.model.id_model;

    const model = await Model.getRepository().findOne({
      where: {
        id_model: parseInt(IDmodel)
      }
    });

    const quantCurrent = await Stock_internal.getRepository().findOne({
      where: {
        id: model.stock_internal.id
      }
    });

    const updateQuantStock = quantCurrent.quant_in_stock + 1;

    await Stock_internal.getRepository().update(model.stock_internal.id, { quant_in_stock: updateQuantStock });

    response.json(
      {
        id: equipment.id,
        message: "Equipment registered successfully"
      }
    );
  } catch (error) {
    return response.status(400).json({ message: "Erro saving, check the data and try again!" })
  }

}

export const updateEquipment = async (request: Request, response: Response) => {

  const { id } = request.params;

  try {
    const equipment = await Equipment.getRepository().update(id, request.body);

    if (equipment.affected === 1) {
      const equipmentUpdated = await Equipment.getRepository().findOne({
        where: {
          id_equip: parseInt(id)
        }
      });

      return response.json(equipmentUpdated);
    }

  } catch (error) {
    return response.status(404).json({ message: 'Equipment not found' });

  }

}

export const deleteEquipment = async (request: Request, response: Response) => {

  const { id } = request.params;
  try {
    const equipment = await Equipment.getRepository().delete(id);

    if (equipment.affected === 1) {

      return response.json({ message: "Equipment removed" });
    }

    return response.status(404).json({ message: "Model not found" });

  } catch (error) {
    return response.status(404).json({ message: "Model not found" });
  }
}