import { ActionTypes } from "../constants/action-types";

export const consentReduser = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CONSENT_LIST_SUCCESS:
      return [...action.response.data];
    case ActionTypes.FETCH_CONSENT_LIST_FAILURE:
      return state;
    default:
      return state;
  }
};

export const getConsentReduser = (state) => state.consentReduser;
