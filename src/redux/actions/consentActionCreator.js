import { ActionTypes } from '../constants/actiontypes';

export const fetchConsent = (data = []) => {
  console.warn("Action", ActionTypes.FETCH_CONSENT);
  return {
    type: ActionTypes.FETCH_CONSENT,
    data
  };
};
export const deleteConsent = (data = []) => {
  console.warn("Action", ActionTypes.FETCH_CONSENT_LIST_DELETE);
  return {
    type: ActionTypes.FETCH_CONSENT_LIST_DELETE,
    data
  };
};
export const addConsent = (data = []) => {
  console.warn("Action", ActionTypes.SET_CONSENT_LIST_ADD);
  return {
    type: ActionTypes.SET_CONSENT_LIST_ADD,
    data
  };
};
