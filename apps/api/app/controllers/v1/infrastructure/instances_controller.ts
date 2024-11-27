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
