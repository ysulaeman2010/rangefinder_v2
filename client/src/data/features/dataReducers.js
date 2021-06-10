import {
  DATA_D1_COLLECT_SUCCESS,
  DATA_D2_COLLECT_SUCCESS,
  DATA_D3_COLLECT_SUCCESS,
  DATA_D4_COLLECT_SUCCESS,
  DATA_C1_COLLECT_SUCCESS,
  DATA_C2_COLLECT_SUCCESS,
  DATA_C3_COLLECT_SUCCESS,
  DATA_C4_COLLECT_SUCCESS,
  DATA_P1_COLLECT_SUCCESS,
  DATA_P2_COLLECT_SUCCESS,
  DATA_P3_COLLECT_SUCCESS,
  DATA_P4_COLLECT_SUCCESS,
  OPEN_STREAM,
} from "./dataTypes";

const initialState = {
  status: false,
  d_1: {},
  d_2: {},
  d_3: {},
  d_4: {},
  p_1: {},
  p_2: {},
  p_3: {},
  p_4: {},
  c_1: {},
  c_2: {},
  c_3: {},
  c_4: {},
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

    case DATA_D1_COLLECT_SUCCESS: {
      return {
        ...state,
        status: true,
        d_1: action.payload,
        error: "",
      };
    }

    case DATA_D2_COLLECT_SUCCESS: {
      return {
        ...state,
        status: true,
        d_2: action.payload,
        error: "",
      };
    }

    case DATA_D3_COLLECT_SUCCESS: {
      return {
        ...state,
        status: true,
        d_3: action.payload,
        error: "",
      };
    }

    case DATA_D4_COLLECT_SUCCESS: {
      return {
        ...state,
        status: true,
        d_4: action.payload,
        error: "",
      };
    }

    case DATA_P1_COLLECT_SUCCESS: {
      return {
        ...state,
        status: true,
        p_1: action.payload,
        error: "",
      };
    }

    case DATA_P2_COLLECT_SUCCESS: {
      return {
        ...state,
        status: true,
        p_2: action.payload,
        error: "",
      };
    }

    case DATA_P3_COLLECT_SUCCESS: {
      return {
        ...state,
        status: true,
        p_3: action.payload,
        error: "",
      };
    }

    case DATA_P4_COLLECT_SUCCESS: {
      return {
        ...state,
        status: true,
        p_4: action.payload,
        error: "",
      };
    }

    case DATA_C1_COLLECT_SUCCESS: {
      return {
        ...state,
        status: true,
        c_1: action.payload,
        error: "",
      };
    }

    case DATA_C2_COLLECT_SUCCESS: {
      return {
        ...state,
        status: true,
        c_2: action.payload,
        error: "",
      };
    }

    case DATA_C3_COLLECT_SUCCESS: {
      return {
        ...state,
        status: true,
        c_3: action.payload,
        error: "",
      };
    }

    case DATA_C4_COLLECT_SUCCESS: {
      return {
        ...state,
        status: true,
        c_4: action.payload,
        error: "",
      };
    }

    default:
      return state;
  }
};

export default dataReducer;
