import type { AxiosInstance } from 'axios';

import { parseUri } from '../parsers/url';
import type { AllowedParams } from './ApiParams';
import type { ApiResponse } from './ApiResponse';

interface PostServerData {}

interface ServerResource {
  id: string;
  name: string;
  establishmentIdentifier: string;
  updatedAt: string;
  createdAt: string;
}

type PatchServerData = Partial<ServerResource> | { resultCode: string };

export const ServerRepository = function (client, config: Record<any, any>) {
  return {
    list: async (params?: AllowedParams<any, null, null>): Promise<ApiResponse<any>> => {
      const apiCallParams = params ? parseUri(params) : '';
      return client(`/servers${apiCallParams}`);
    },
    get: async (serverId: string, params?: AllowedParams<null, null, null>): Promise<ApiResponse<ServerResource>> => {
      const apiCallParams = params ? parseUri(params) : '';
      return client(`/servers/${serverId}${apiCallParams}`);
    },
    post: async (body: PostServerData): Promise<ApiResponse<ServerResource>> => {
      return client(`/servers`, { method: 'POST' , body});
    },
    patch: async (serverId: string, body: PatchServerData): Promise<ApiResponse<ServerResource>> => {
      return client(`/servers/${serverId}`, { method: 'PUT' , body });
    },
    delete: async (ids: Array<string>): Promise<Awaited<any>[]> => {
      return Promise.all(ids.map(async (id: string) => await client(`/servers/${id}`, { method: 'DELETE' })))
    }
  };
};
