import { AxiosInstance } from 'axios';

import { parseUri } from '../parsers/url';
import { AllowedParams } from './ApiParams';
import { ApiResponse } from './ApiResponse';

interface PostUserData {}

interface UserResource {
  id: string;
  name: string;
  establishmentIdentifier: string;
  updatedAt: string;
  createdAt: string;
}

type PatchUserData = Partial<UserResource> | { resultCode: string };

const UserRepository = function (client, config: Record<any, any>) {
  return {
    list: async (params?: AllowedParams<any, null, null>): Promise<ApiResponse<any>> => {
      try {
        const apiCallParams = params ? parseUri(params) : '';
        return await client.get(`/users${apiCallParams}`);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    get: async (userId: string, params?: AllowedParams<null, null, null>): Promise<ApiResponse<UserResource>> => {
      try {
        const apiCallParams = params ? parseUri(params) : '';
        return await client.get(`/users/${userId}${apiCallParams}`);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    post: async (body: PostUserData): Promise<ApiResponse<UserResource>> => {
      try {
        return await client.post(`/users`, body);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    patch: async (userId: string, body: PatchUserData): Promise<ApiResponse<UserResource>> => {
      try {
        return await client.put(`/users/${userId}`, body);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    delete: async (ids: Array<string>): Promise<ApiResponse<any>> => {
      try {
        return await Promise.all(ids.map(async (id: string) => await client.delete(`/users/${id}`)))
      } catch (e) {
        throw new Error(e.message)
      }
    }
  };
};

export default UserRepository;
