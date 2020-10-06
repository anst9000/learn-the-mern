import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initialState = {
  msg: {},
  status: null,
  id: null,
};

// Evaluate action types
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      const { msg, status, id } = action.payload;
      return { msg, status, id };
    // return {
    //   msg: action.payload.msg,
    //   status: action.payload.status,
    //   id: action.payload.id,
    // };
    case CLEAR_ERRORS:
      return initialState;
    // return {
    //   msg: {},
    //   status: null,
    //   id: null,
    // };
    default:
      return state;
  }
}
