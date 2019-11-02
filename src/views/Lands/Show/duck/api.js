import httpClient from "utils/httpClient";

export const getLand = (params = {}) =>
  httpClient()
    .get(`lands/${params.id}`)
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });

export const getHistoryPrices = (params = {}) =>
  httpClient()
    .get(`lands/${params.id}/history_prices`, { params })
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });
