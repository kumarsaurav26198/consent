import { ActionTypes } from "../constants/action-types";

export const fetchCampaign = () => (dispatch) => {
  dispatch({
    type: ActionTypes.FETCH_CAMPAGIN_LIST,
  });
  return consentMgrAPI.getCampaignList().then((response) => {
    return dispatch({
      type: ActionTypes.FETCH_CAMPAGIN_LIST_SUCCESS,
    });
  });
};
