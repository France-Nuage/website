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
import transmit from '@adonisjs/transmit/services/main'

transmit.registerRoutes((route) => {
  // Ensure you are authenticated to register your client
  // route.middleware(middleware.auth())
  // Add a throttle middleware to other transmit routes
  // route.use(throttle)
})

const OrganizationsController = () =>
  import('#controllers/v1/iam/organizations_controller')
const ProjectsController = () => import('#controllers/v1/iam/projects_controller')
const AuthController = () => import('#controllers/v1/iam/auth_controller')

router
  .group(() => {
    router
      .group(() => {
        router.resource('organizations', OrganizationsController)
        router.resource('projects', ProjectsController)
        router.get('/auth/me', [AuthController, 'me'])
      })
      .middleware([middleware.auth()])
    router.post('/auth/register', [AuthController, 'register'])
    router.post('/auth/login', [AuthController, 'login'])
    router.post('/auth/token', [AuthController, 'generateToken'])
  })
  .prefix('api/v1')
