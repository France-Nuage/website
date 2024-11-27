import { Stripe } from 'stripe'
import env from '#start/env'

export default class PaymentsController {
  private stripe

  constructor() {
    this.stripe = new Stripe(env.get('STRIPE_SECRET_KEY'))
  }

  public async index({ customer_id }: { customer_id: string }): Promise<any> {
    return this.stripe.paymentMethods.list({
      customer: customer_id,
      type: 'card',
    })
  }

  /**
   * @param customer_id
   */
  public async store(customer_id: string): Promise<any> {
    const setupIntent = await this.stripe.setupIntents.create({
      payment_method_types: ['card'],
      customer: customer_id,
    })

    return { clientSecret: setupIntent.client_secret }
  }

  /**
   * @param id
   */
  public async show(id: string): Promise<Stripe.PaymentMethod> {
    return await this.stripe.paymentMethods.retrieve(id)
  }
}
