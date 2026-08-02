// API base URL config
/**
 * api.config.ts
 *
 * WHY:
 * Central place for backend API base URL.
 * If backend URL changes, update only this file.
 */

import { environment } from '../../../environments/environment';

export const API_BASE_URL = environment.apiUrl;