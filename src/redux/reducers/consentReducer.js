import { ActionTypes } from '../constants/actiontypes';

export const consentReducer = (data = [], { type, payload }) => {
  switch (type)
  {
    case ActionTypes.FETCH_CONSENT:
      //logic for fetchConsent
      console.warn("Reducers", ActionTypes.FETCH_CONSENT);
      return [action.data];
    case ActionTypes.FETCH_CONSENT_LIST_DELETE:
      //logic for delete Consent

      console.warn("Reducers", ActionTypes.FETCH_CONSENT_LIST_DELETE);

      return 1 - 1;
    case ActionTypes.SET_CONSENT_LIST_ADD:
      //logic for add Consent

      console.warn("Reducers", ActionTypes.SET_CONSENT_LIST_ADD);

      return 1;
    default:
      return data;
  }
};