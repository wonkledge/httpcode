export const HTTP_CODE_INFORMATION = {
  CONTINUE: 100,
  SWITCHING_PROTOCOL: 101,
  PROCESSING: 102,
  EARLY_HINTS: 103,
} as const;

export const HTTP_CODE_SUCCESS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  MULTI_STATUS: 207,
  ALREADY_REPORTED: 208,
  CONTENT_DIFFERENT: 210,
  IM_USED: 226,
} as const;

export const HTTP_CODE_REDIRECTION = {
  MULTIPLE_CHOICES: 300,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  USE_PROXY: 305,
  SWITCH_PROXY: 306,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,
  TOO_MANY_REDIRECT: 310,
} as const;

export const HTTP_CODE_ERROR_CLIENT = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  REQUEST_ENTITY_TOO_LARGE: 413,
  REQUEST_URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  REQUESTED_RANGE_UNSATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  IM_A_TEAPOT: 418,
  BAD_MAPPING: 421,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_ENTITY: 422,
  LOCKED: 423,
  METHOD_FAILURE: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  RETRY_WITH: 449,
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS: 450,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  UNRECOVERABLE_ERROR: 456,
} as const;

export const HTTP_CODE_ERROR_SERVER = {
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  PROXY_ERROR: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  BANDWIDTH_LIMIT_EXCEEDED: 509,
  NOT_EXTENDED: 510,
  NETWORK_AUTHENTICATION_REQUIRED: 511,
} as const;

export const HTTP_CODE = {
  ...HTTP_CODE_INFORMATION,
  ...HTTP_CODE_SUCCESS,
  ...HTTP_CODE_REDIRECTION,
  ...HTTP_CODE_ERROR_CLIENT,
  ...HTTP_CODE_ERROR_SERVER,
} as const;

export type HTTPCodeSuccess
    = typeof HTTP_CODE_SUCCESS[keyof typeof HTTP_CODE_SUCCESS];

export type HTTPCodeRedirection
    = typeof HTTP_CODE_REDIRECTION[keyof typeof HTTP_CODE_REDIRECTION];

export type HTTPCodeInformation
    = typeof HTTP_CODE_INFORMATION[keyof typeof HTTP_CODE_INFORMATION];

export type HTTPCodeErrorClient
    = typeof HTTP_CODE_ERROR_CLIENT[keyof typeof HTTP_CODE_ERROR_CLIENT];

export type HTTPCodeErrorServer
    = typeof HTTP_CODE_ERROR_SERVER[keyof typeof HTTP_CODE_ERROR_SERVER];

export type HTTPCode = typeof HTTP_CODE[keyof typeof HTTP_CODE];

export const isHttpCodeSuccess = (data: any): data is HTTPCodeSuccess => Object.values(HTTP_CODE_SUCCESS).includes(data);

export const isHttpCodeInformation = (data: any): data is HTTPCodeInformation => Object.values(HTTP_CODE_INFORMATION).includes(data);

export const isHttpCodeRedirection = (data: any): data is HTTPCodeRedirection => Object.values(HTTP_CODE_REDIRECTION).includes(data);

export const isHttpCodeClientError = (data: any): data is HTTPCodeErrorClient => Object.values(HTTP_CODE_ERROR_CLIENT).includes(data);

export const isHttpCodeServerError = (data: any): data is HTTPCodeErrorServer => Object.values(HTTP_CODE_ERROR_SERVER).includes(data);