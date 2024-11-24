import type { HttpContext } from '@adonisjs/core/http'
import { createOrganizationValidator } from '#validators/v1/iam/organization'
import Organization from '#models/iam/organization'
import axios from 'axios'

export default class InstancesController {
  /**
   * Display a list of resource
   */
  async index({ auth, response }: HttpContext) {

  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

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
  async show({ params, response }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
