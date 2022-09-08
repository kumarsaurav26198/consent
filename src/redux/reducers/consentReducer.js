import { ActionTypes } from '../constants/actiontypes';

export const consentReducer = (data = [], action) => {
  switch (action.type)
  {
    case ActionTypes.FETCH_CONSENT:
      //logic for fetchConsent
      console.warn("  FETCH_CONSENT Reducers", ActionTypes.FETCH_CONSENT);
      return [data];
    case ActionTypes.FETCH_CONSENT_RECEIVED:
      //logic for FETCH_CONSENT_RECEIVED
      console.warn("  FETCH_CONSENT_RECEIVED Reducers", ActionTypes.FETCH_CONSENT_RECEIVED);
      return [...action.data];


    // case ActionTypes.ADD_TO_CONSENT_LIST:
    //   //logic for add Consent
    //   state.push(ActionTypes.payload);
    //   console.warn("Reducers", ActionTypes.ADD_TO_CONSENT_LIST);
    //   return [action.data];


    // case ActionTypes.FETCH_CONSENT_LIST_DELETE:
    //   //logic for delete Consent
    //   console.warn("Reducers", ActionTypes.FETCH_CONSENT_LIST_DELETE);
    //   return data;


    // case ActionTypes.SET_CONSENT_LIST_EDIT:
    //   //logic for EDIT
    //   console.warn("Reducers", ActionTypes.SET_CONSENT_LIST_EDIT);
    //   return data;


    // case ActionTypes.SET_CONSENT_LIST_VIEW:
    //   //logic for VIEW
    //   console.warn("Reducers", ActionTypes.SET_CONSENT_LIST_VIEW);
    //   return data;


    default:
      return data;
  }
};