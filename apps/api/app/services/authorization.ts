import User from '#models/user'
import Binding from '#models/iam/binding'
import Role from '#models/iam/role'
import Policy from '#models/iam/policy'

const filterPolicyKey = {
  organization: 'organizationId',
  folder: 'folderId',
  project: 'projectId',
}

export default {
  check: async function (
    permissions: Array<String>,
    user: User,
    resource: { type: 'organization' | 'folder' | 'project'; id?: string }
  ) {
    const bindings = await Binding.query()
      .where('memberId', user.id)
      .preload('policy', (policyQuery) => {
        policyQuery.where(filterPolicyKey[resource.type], resource.id)
      })
      .preload('role', (roleQuery) => {
        roleQuery.preload('permissions')
      })

    const permissionsBinding = bindings
      .map((_) => _.role.permissions)
      .flat()
      .map((_) => {
        return `${_.permissionServiceId}.${_.permissionTypeId}.${_.permissionVerbId}`
      })

    return permissionsBinding.some((r) => permissions.includes(r))
  },
  assign: async function (
    user: User,
    role: Role,
    resource: { type: 'organization' | 'folder' | 'project'; id?: string }
  ) {
    const policy = Policy.query().where(filterPolicyKey[resource.type], resource.id)
    return await Binding.create({
      roleId: role.id,
      memberId: user.id,
      policyId: policy.id,
    })
  },
}
