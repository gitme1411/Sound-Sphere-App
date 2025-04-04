export const ENDPOINT = {
  GET_EXAMPLE: '/example',
  POST_EXAMPLE: '/example',
  PUT_EXAMPLE: '/example',
  DELETE_EXAMPLE: '/example',
  PATCH_EXAMPLE: '/example',
  GET_EXAMPLE_ID: (id: string) => `/example/${id}`,
  GET_EXAMPLE_QUERY: (query: string) => `/example?query=${query}`,
  GET_EXAMPLE_ID_QUERY: (id: string, query: string) =>
    `/example/${id}?query=${query}`,
  POST_EXAMPLE_ID: (id: string) => `/example/${id}`,
  PUT_EXAMPLE_ID: (id: string) => `/example/${id}`,
  DELETE_EXAMPLE_ID: (id: string) => `/example/${id}`,
  PATCH_EXAMPLE_ID: (id: string) => `/example/${id}`,
  GET_EXAMPLE_ID_QUERY_ID: (id: string, query: string) =>
    `/example/${id}?query=${query}`,
};
