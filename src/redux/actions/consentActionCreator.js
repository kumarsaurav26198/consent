import { ActionTypes } from '../constants/actiontypes';

export const fetchConsent = () => {
  console.warn("Action", ActionTypes.FETCH_CONSENT);
  return {
    type: ActionTypes.FETCH_CONSENT,
  };
};
export const addConsent = () => {
  console.warn("Action", ActionTypes.ADD_TO_CONSENT_LIST);
  return {
    type: ActionTypes.ADD_TO_CONSENT_LIST,
  };
};
export const deleteConsent = () => {
  console.warn("Action", ActionTypes.FETCH_CONSENT_LIST_DELETE);
  return {
    type: ActionTypes.FETCH_CONSENT_LIST_DELETE,
  };
};
export const editConsent = () => {
  console.warn("Action", ActionTypes.SET_CONSENT_LIST_EDIT);
  return {
    type: ActionTypes.SET_CONSENT_LIST_EDIT,
  };
};
export const viewConsent = () => {
  console.warn("Action", ActionTypes.SET_CONSENT_LIST_VIEW);
  return {
    type: ActionTypes.SET_CONSENT_LIST_VIEW,
  };
};
