import httpClient from "utils/httpClient";

export const getAddresses = (params = {}) =>
  httpClient()
    .get(`addresses/${params.id}`, { params })
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });

export const getLands = (params = {}) =>
  httpClient()
    .get("lands", { params })
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });

export const getPriceLoggers = (params = {}) =>
  httpClient()
    .get(`addresses/${params.id}/price_loggers`, { params })
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });
