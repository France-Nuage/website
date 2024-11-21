import { AxiosInstance } from 'axios';

import { parseUri } from '../parsers/url';
import { AllowedParams } from './ApiParams';
import { ApiResponse } from './ApiResponse';

interface PostOrganizationData {}

interface OrganizationResource {
  id: string;
  name: string;
  phone: string;
  fax: string;
  email: string;
  updated_at: string;
  created_at: string;
}

type PatchOrganizationData = Partial<OrganizationResource> | { resultCode: string };

const OrganizationRepository = function (client: AxiosInstance) {
  return {
    list: async (params?: AllowedParams<any, null, null>): Promise<ApiResponse<OrganizationResource[]>> => {
      try {
        const apiCallParams = params ? parseUri(params) : '';
        return await client.get(`/organizations${apiCallParams}`);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    get: async (
      organizationId: string,
      params?: AllowedParams<null, null, null>,
    ): Promise<ApiResponse<OrganizationResource>> => {
      try {
        const apiCallParams = params ? parseUri(params) : '';
        return await client.get(`/organizations/${organizationId}${apiCallParams}`);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    post: async (body: PostOrganizationData): Promise<ApiResponse<OrganizationResource>> => {
      try {
        return await client.post(`/organizations`, body);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    patch: async (organizationId: string, body: PatchOrganizationData): Promise<ApiResponse<OrganizationResource>> => {
      try {
        return await client.put(`/organizations/${organizationId}`, body);
      } catch (e) {
        throw new Error(e.message);
      }
    },
  };
};

export default OrganizationRepository;
