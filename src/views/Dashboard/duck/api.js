import httpClient from "utils/httpClient";

export const getAddresses = (params = {}) =>
  httpClient()
    .get("addresses", { params })
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });

export const getLand = (params = {}) =>
  httpClient()
    .get("lands", { params })
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });

export const getAddressNames = params =>
  httpClient()
    .get("addresses/address_names", { params })
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });
