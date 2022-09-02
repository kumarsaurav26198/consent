import { ActionTypes } from '../constants/actiontypes';

export const fetchConsent = (data = []) => {
  console.warn("Action", ActionTypes.FETCH_CONSENT);
  return {
    type: ActionTypes.FETCH_CONSENT,
    payload: data,

  };
};
export const addConsent = (data = []) => {
  console.warn("Action", ActionTypes.SET_CONSENT_LIST_ADD);
  return {
    type: ActionTypes.SET_CONSENT_LIST_ADD,
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
export const editConsent = (data = []) => {
  console.warn("Action", ActionTypes.SET_CONSENT_LIST_EDIT);
  return {
    type: ActionTypes.SET_CONSENT_LIST_EDIT,
    data
  };
};
export const viewConsent = (data = []) => {
  console.warn("Action", ActionTypes.SET_CONSENT_LIST_VIEW);
  return {
    type: ActionTypes.SET_CONSENT_LIST_VIEW,
    data
  };
};
