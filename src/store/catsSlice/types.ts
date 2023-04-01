import { ICatItem } from "@services/models";

/* --- STATE --- */
export interface CatsState {
  cats: ICatItem[];
  limit: number;
  page: number;
  loading: boolean;
  error?: CatsErrorType | null;
}

export const enum CatsErrorType {
  RESPONSE_ERROR = 1,
}
