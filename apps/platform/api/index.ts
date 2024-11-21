import { SecurityRepository } from './security';
import {
  OrganizationRepository,
  ProjectRepository,
  UserRepository,
  ServiceRepository
} from './repositories';
import type { AxiosInstance } from 'axios';

const repositories: any = (client: AxiosInstance, config: Record<any, any>) => ({
  security: SecurityRepository(client, config),
  organizations: OrganizationRepository(client, config),
  projects: ProjectRepository(client, config),
  services: ServiceRepository(client, config),
  users: UserRepository(client, config),
});

export default repositories;
