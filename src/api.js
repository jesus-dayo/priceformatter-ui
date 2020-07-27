import axios from 'axios';

const defaultOptions = {
  baseURL: ''
};

const BASE_URL = '/api/v1';
const PRICE_FORMAT_REQUEST_BASE_URL = `${BASE_URL}/price`;

const api = axios.create(defaultOptions);

const formatter = {
  formatTrimZero: (price) => api.post(`${PRICE_FORMAT_REQUEST_BASE_URL}/formatTrimZero/`, price),
  formatZero: (price) => api.post(`${PRICE_FORMAT_REQUEST_BASE_URL}/formatZero/`, price)
};

export default {
  formatter
}
