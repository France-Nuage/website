/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
// import transmit from '@adonisjs/transmit/services/main'

// transmit.registerRoutes((route) => {
//   // Ensure you are authenticated to register your client
//   // route.middleware(middleware.auth())
//   // Add a throttle middleware to other transmit routes
//   // route.use(throttle)
// })

const ServicesController = () => import('#controllers/v1/services/services_controller')
const OrganizationsController = () => import('#controllers/v1/resource/organizations_controller')
const ProjectsController = () => import('#controllers/v1/resource/projects_controller')
const AuthController = () => import('#controllers/v1/iam/auth_controller')
const InstancesController = () => import('#controllers/v1/infrastructure/instances_controller')

router
  .group(() => {
    router
      .group(() => {
        router.resource('organizations', OrganizationsController)
        router.resource('projects', ProjectsController)
        router.resource('instances', InstancesController)
        router.resource('services', ServicesController)
        router.get('/auth/me', [AuthController, 'me'])
      })
      .middleware([middleware.auth()])
    router.post('/auth/register', [AuthController, 'register'])
    router.post('/auth/login', [AuthController, 'login'])
    router.post('/auth/token', [AuthController, 'generateToken'])
  })
  .prefix('api/v1')
