import {ImportError} from './import-error';

export interface ImportResult<T> {
  message: string;
  errors: ImportError[];
  data: T[];
}
