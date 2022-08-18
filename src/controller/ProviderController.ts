import { Provider } from '../entity/Provider';
import { Request, Response } from 'express';

export const getProviders = async (request: Request, response: Response) => {

  const providers = await Provider.getRepository().find();

  return response.json(providers);
}

export const getProvider = async (request: Request, response: Response) => {

  const { id } = request.params;
  const provider = await Provider.getRepository().findOne({
    where: {
      id: parseInt(id)
    }
  });

  try {
    return response.json(provider);
  } catch (error) {
    return response.status(400).json({ erro: "Error when fetching  Providers" })
  }
};

export const saveProvider = async (request: Request, response: Response) => {

  try {
    const provider = await Provider.getRepository().save(request.body);

    response.json(
      {
        id: provider.id,
        sucess: "Provider registered successfully"
      }
    );
  } catch (error) {

    return response.status(400).json({ erro: "Erro saving, check the data and try again!" });
  }
};

export const updateProvider = async (request: Request, response: Response) => {
  const { id } = request.params;

  try {
    const provider = await Provider.getRepository().update(id, request.body);

    if (provider.affected === 1) {
      const providerUpdated = await Provider.getRepository().findOne({
        where: {
          id: parseInt(id)
        }
      });

      return response.json(providerUpdated);
    }
  } catch (error) {

    return response.status(404).json({ message: 'Provider not found!' });
  }

}

export const deleteProvider = async (request: Request, response: Response) => {
  const { id } = request.params;

  try {
    const provider = await Provider.getRepository().delete(id)

    if (provider.affected === 1) {
      const providerRemoved = await Provider.getRepository().findOne({
        where: {
          id: parseInt(id)
        }
      });

      return response.json({ message: "Provider removed" });
    }
  } catch (error) {

    return response.status(404).json({ message: "Provider not found!" });
  }

}