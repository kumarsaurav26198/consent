import { ActionTypes } from "../constants/action-types";

export const campaignReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CAMPAGIN_LIST:
      return [...action.response.data];
    case ActionTypes.FETCH_CAMPAGIN_LIST_FAILAURE:
      return state;
    default:
      return state;
  }
};
export const getCampaignReducer = (state) => state.campaignReducer;
