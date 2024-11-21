import { SecurityRepository } from './security';
import {
  OrganizationRepository,
  ProjectRepository,
  UserRepository,
} from './repositories';
import { AxiosInstance } from 'axios';

const repositories: any = (client: AxiosInstance, config: Record<any, any>) => ({
  organizations: OrganizationRepository(client, config),
  projects: ProjectRepository(client, config),
  users: UserRepository(client, config),
});

export default repositories;
