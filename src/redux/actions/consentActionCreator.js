import { ActionTypes } from "../constants/action-types";

export const fetchConsent = () => (dispatch) => {
  dispatch({
    type: ActionTypes.FETCH_CONSENT,
  });
  return consentMgrAPI.getConsentList(12).then((response) => {
    return dispatch({
      type: ActionTypes.FETCH_CONSENT_LIST_SUCCESS,
    });
  });
};
