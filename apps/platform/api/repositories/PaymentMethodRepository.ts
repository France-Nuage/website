import { parseUri } from '../parsers/url';
import type { AllowedParams } from './ApiParams';
import type { ApiResponse } from './ApiResponse';

interface PostPaymentData {}

interface PaymentResource {
  id: string;
  name: string;
  updated_at: string;
  created_at: string;
}

type PatchPaymentData = Partial<PaymentResource> | { resultCode: string };

export const PaymentRepository = function (client, config: Record<any, any>) {
  return {
    list: async (params?: AllowedParams<any, null, null>): Promise<ApiResponse<PaymentResource[]>> => {
      const apiCallParams = params ? parseUri(params) : '';
      return client(`/payments${apiCallParams}`);
    },
    get: async (paymentId: string, params?: AllowedParams<null, null, null>): Promise<ApiResponse<PaymentResource>> => {
      const apiCallParams = params ? parseUri(params) : '';
      return client(`/payments/${paymentId}${apiCallParams}`);
    },
    post: async (body: PostPaymentData): Promise<ApiResponse<PaymentResource>> => {
      return client(`/payments`, { method: 'POST', body: body });
    },
    patch: async (paymentId: string, body: PatchPaymentData): Promise<ApiResponse<PaymentResource>> => {
      return client(`/payments/${paymentId}`, { method: 'PUT', body });
    },
    delete: async (body: Array<string>): Promise<ApiResponse<any>> => {
      return client(`/payments`, { method: 'DELETE', body });
    }
  };
};