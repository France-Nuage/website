import { AxiosInstance } from 'axios';

import { parseUri } from '../parsers/url';
import { AllowedParams } from './ApiParams';
import { ApiResponse } from './ApiResponse';

interface PostProjectData {}

interface ProjectResource {
  id: string;
  name: string;
  updated_at: string;
  created_at: string;
}

type PatchProjectData = Partial<ProjectResource> | { resultCode: string };

const ProjectRepository = function (client, config: Record<any, any>) {
  return {
    list: async (params?: AllowedParams<any, null, null>): Promise<ApiResponse<ProjectResource[]>> => {
      try {
        const apiCallParams = params ? parseUri(params) : '';
        return await client.get(`/projects${apiCallParams}`);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    get: async (projectId: string, params?: AllowedParams<null, null, null>): Promise<ApiResponse<ProjectResource>> => {
      try {
        const apiCallParams = params ? parseUri(params) : '';
        return await client.get(`/projects/${projectId}${apiCallParams}`);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    post: async (body: PostProjectData): Promise<ApiResponse<ProjectResource>> => {
      try {
        return await client.post(`/projects`, body);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    patch: async (projectId: string, body: PatchProjectData): Promise<ApiResponse<ProjectResource>> => {
      try {
        return await client.patch(`/projects/${projectId}`, body);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    delete: async (body: Array<string>): Promise<ApiResponse<any>> => {
      try {
        return await client.delete(`/projects`, body);
      } catch (e) {
        throw new Error(e.message)
      }
    }
  };
};

export default ProjectRepository;
