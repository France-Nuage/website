import { parseUri } from '../../parsers/url';
import type { AllowedParams } from './../ApiParams';
import type { ApiResponse } from './../ApiResponse';

interface PostUserData {}

interface UserResource {
  id: string;
  name: string;
  establishmentIdentifier: string;
  updatedAt: string;
  createdAt: string;
}

type PatchUserData = Partial<UserResource> | { resultCode: string };

export const UserRepository = function (client: any, config: Record<any, any>) {
  return {
    list: async (params?: AllowedParams<any, null, null>): Promise<ApiResponse<any>> => {
      const apiCallParams = params ? parseUri(params) : '';
      return client(`/users${apiCallParams}`);
    },
    get: async (userId: string, params?: AllowedParams<null, null, null>): Promise<ApiResponse<UserResource>> => {
      const apiCallParams = params ? parseUri(params) : '';
      return client(`/users/${userId}${apiCallParams}`);
    },
    post: async (body: PostUserData): Promise<ApiResponse<UserResource>> => {
      return client(`/users`, { method: 'POST' , body});
    },
    patch: async (userId: string, body: PatchUserData): Promise<ApiResponse<UserResource>> => {
      return client(`/users/${userId}`, { method: 'PUT' , body });
    },
    delete: async (ids: Array<string>): Promise<Awaited<any>[]> => {
      return Promise.all(ids.map(async (id: string) => await client(`/users/${id}`, { method: 'DELETE' })))
    }
  };
};
