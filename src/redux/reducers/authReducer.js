import { ActionTypes } from "../constants/actiontypes";


const authReducer = (state = {}, action) => {
    switch (action.type)
    {
        case ActionTypes.SIGN_IN:
            return action.user;
        case ActionTypes.SIGN_OUT:
            return {};
        default:
            return state;
    }
};

export default authReducer;