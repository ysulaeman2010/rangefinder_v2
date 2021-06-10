import {
  DATA_COLLECT_FAIL,
  DATA_COLLECT_SUCCESS,
  OPEN_STREAM,
} from "./dataTypes";

const initialState = {
  status: false,
  data: {},
  error: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_STREAM: {
      return {
        ...state,
        status: true,
      };
    }

    case DATA_COLLECT_SUCCESS: {
      return {
        status: true,
        data: action.payload,
        error: "",
      };
    }

    case DATA_COLLECT_FAIL: {
      return {
        status: false,
        data: {},
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default dataReducer;
