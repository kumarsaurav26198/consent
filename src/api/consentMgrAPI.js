import axios from "axios";
const consentMgrAPI = axios.create({
  baseURL: `https://62dbc602d1d97b9e0c53b578.mockapi.io/fakedata`,
});
export default {
  getConsents(campaignId) {
    return consentMgrAPI.get(`/api/consents/${campaignId}`);
  },
};
