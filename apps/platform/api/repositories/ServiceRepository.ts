import type { AxiosInstance } from 'axios';

import { parseUri } from '../parsers/url';
import type { AllowedParams } from './ApiParams';
import type { ApiResponse } from './ApiResponse';

interface PostServiceData {}

interface ServiceResource {
  id: string;
  name: string;
  updated_at: string;
  created_at: string;
}

type PatchServiceData = Partial<ServiceResource> | { resultCode: string };

export const ServiceRepository = function (client: AxiosInstance, config: Record<any, any>) {
  return {
    list: async (params?: AllowedParams<any, null, null>): Promise<ApiResponse<ServiceResource[]>> => {
      try {
        const apiCallParams = params ? parseUri(params) : '';
        return await client.get(`/services${apiCallParams}`);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    get: async (serviceId: string, params?: AllowedParams<null, null, null>): Promise<ApiResponse<ServiceResource>> => {
      try {
        const apiCallParams = params ? parseUri(params) : '';
        return await client.get(`/services/${serviceId}${apiCallParams}`);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    post: async (body: PostServiceData): Promise<ApiResponse<ServiceResource>> => {
      try {
        return await client.post(`/services`, body);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    patch: async (serviceId: string, body: PatchServiceData): Promise<ApiResponse<ServiceResource>> => {
      try {
        return await client.patch(`/services/${serviceId}`, body);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    delete: async (body: Array<string>): Promise<ApiResponse<any>> => {
      try {
        return await client.delete(`/services`, body);
      } catch (e) {
        throw new Error(e.message)
      }
    }
  };
};
