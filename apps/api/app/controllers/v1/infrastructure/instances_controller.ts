import type { HttpContext } from '@adonisjs/core/http'
import axios from 'axios'

export default class InstancesController {
  /**
   * Display a list of resource
   */
  async index({ response, params, request }: HttpContext) {
    return response.notImplemented({
      params: params,
      request: request,
    })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ response }: HttpContext) {
    let data = {
      newid: '289',
    }

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://proxmox-cluster.france-nuage.fr/api2/json/nodes/pve-node2/qemu/105/clone',
      headers: {
        'CF-Access-Client-Id': '',
        'CF-Access-Client-Secret': '',
        'Authorization': '',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    }

    try {
      await axios.request(config)
      return response.created()
    } catch (e) {
      return response.badRequest()
    }
  }

  /**
   * Show individual record
   */
  async show({ response, params, request }: HttpContext) {
    return response.notImplemented({
      params: params,
      request: request,
    })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ response, params, request }: HttpContext) {
    return response.notImplemented({
      params: params,
      request: request,
    })
  }

  /**
   * Delete record
   */
  async destroy({ response, params, request }: HttpContext) {
    return response.notImplemented({
      params: params,
      request: request,
    })
  }
}








// import { createMachine } from "xstate";
//
// export const machine = createMachine({
//   context: {},
//   id: "status",
//   initial: "Init",
//   states: {
//     Init: {
//       on: {
//         created: {
//           target: "Created",
//         },
//       },
//       description:
//         "The initial state where the status is not yet created. The only transition from this state is to the Created state.",
//     },
//     Created: {
//       on: {
//         running: {
//           target: "Running",
//         },
//         stop: {
//           target: "Stop",
//         },
//         restart: {
//           target: "Restart",
//         },
//         delete: {
//           target: "Delete",
//         },
//       },
//       description:
//         "The created state where the status is set up. It can transition to Running, Stop, or Restart.",
//     },
//     Running: {
//       on: {
//         stop: {
//           target: "Stop",
//         },
//         restart: {
//           target: "Restart",
//         },
//         delete: {
//           target: "Delete",
//         },
//       },
//       description:
//         "The running state where the status is actively executing. It can transition to Stop, Restart, or remain in Running.",
//     },
//     Stop: {
//       on: {
//         delete: {
//           target: "Delete",
//         },
//         restart: {
//           target: "Restart",
//         },
//       },
//       description:
//         "The stop state where the status is halted. It cannot transition to any other state.",
//     },
//     Restart: {
//       on: {
//         running: {
//           target: "Running",
//         },
//         stop: {
//           target: "Stop",
//         },
//         delete: {
//           target: "Delete",
//         },
//       },
//       description:
//         "The restart state where the status is reset and can transition to Running or Stop.",
//     },
//     Delete: {
//       type: "final",
//       description:
//         "The restart state where the status is reset and can transition to Running or Stop.",
//     },
//   },
// }).withConfig({});
