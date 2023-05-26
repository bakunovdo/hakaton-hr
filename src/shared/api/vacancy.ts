import { Vacancy } from '~entities/vacancy/types';

import { client } from './client';
import { PaginatedResponse, PaginateRequestParams } from './types';

export const getVacancies = async (
  payload: PaginateRequestParams,
): Promise<PaginatedResponse<Vacancy>> => {
  const { data } = await client.post(`/vacancy/list`, payload);
  return data;
};

export const createVacancy = async (): Promise<Vacancy> => {
  const { data } = await client.post(`/vacancy/`);
  return data;
};

export const deleteVacancy = async (id: string): Promise<Vacancy> => {
  const { data } = await client.delete(`/vacancy/${id}`);
  return data;
};

export const editVacancy = async (id: string, payload: Vacancy): Promise<Vacancy> => {
  const { data } = await client.patch(`/vacancy/${id}`, payload);
  return data;
};
