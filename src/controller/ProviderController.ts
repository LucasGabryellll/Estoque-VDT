import { Provider } from '../entity/Provider';
import { Request, Response } from 'express';

export const getProviders = async (request: Request, response: Response) => {

  const providers = await Provider.getRepository().find();

  return response.json(providers);
};

export const getProvider = async (request: Request, response: Response) => {

  const { id } = request.params;
  const provider = await Provider.getRepository().findOne({
    where: {
      id: parseInt(id)
    }
  });

  return response.json(provider);
};

export const saveProvider = async (request: Request, response: Response) => {

  const provider = await Provider.getRepository().save(request.body);

  try {
    response.json(
      {
        id: provider.id,
        sucesso: "Fornecedor cadastrado com sucesso"
      }
    );
  } catch (error) {
    return response.status(400).json({ erro: "Verifique os dados e tente novamente" });
  }
};

export const updateProvider = async (request: Request, response: Response) => {
  const { id } = request.params;

  const provider = await Provider.getRepository().update(id, request.body);

  if (provider.affected === 1) {
    const providerUpdated = await Provider.getRepository().findOne({
      where: {
        id: parseInt(id)
      }
    });

    return response.json(providerUpdated);
  }

  return response.status(404).json({ message: 'Provider not found!'})
}

export const deleteProvider = async (request: Request, response: Response) => {
  const { id } = request.params;

  const provider = await Provider.getRepository().delete(id)

  if (provider.affected === 1) {
    const providerRemoved = await Provider.getRepository().findOne({
      where: {
        id: parseInt(id)
      }
    });

    return response.json({ message: "Provider removed" });
  }

  return response.status(404).json({ message: "Provider not found!" })
}