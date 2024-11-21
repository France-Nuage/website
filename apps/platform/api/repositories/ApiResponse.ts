// Represent the API response object from Laravel
export interface ApiResponse<T> {
  config: Record<string, unknown>;
  data: {
    data: T;
  };
  headers: Record<string, unknown>;
  request: Record<string, unknown>;
  status: number;
  statusText?: string;
}
