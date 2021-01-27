import { SET_CURRENT_PROFILE } from "../actions/types";

const initialState = {
  profile: {},
};

const booleanActionPayload = (payload) => {
  if (payload) {
    return true;
  } else {
    return false;
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        validToken: booleanActionPayload(action.payload),
        profile: action.payload,
      };

    default:
      return state;
  }
}
