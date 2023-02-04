import { Store } from '../entity/Store';
import { Request, Response } from "express"
import { getRepository } from "typeorm"

export async function Save(request: Request, response: Response) {
  const storeRepository = getRepository(Store);

  const savedStore = storeRepository.save(request.body);

  return response.status(200).json(savedStore);

}

export async function getAll(request: Request, response: Response) {
  const storeRepository = getRepository(Store);

  const allStores = await storeRepository.find();

  return response.json(allStores);
}