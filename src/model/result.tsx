import { Deal } from "./deals";

export interface Result {
    loading: boolean,
    success: boolean,
    error: boolean,
    data: Deal,
    errorData: any,
  };