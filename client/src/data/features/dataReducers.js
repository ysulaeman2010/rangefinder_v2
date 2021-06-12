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
  CLOSE_STREAM,
} from "./dataTypes";

const initialState = {
  status: false,
  d_1: {},
  d_2: {},
  d_3: {},
  d_4: {},
  p_1: {
    time_p1: 0,
    lat_p1: 0,
    lng_p1: 0,
    dist_p1: 0,
    compass_p1: 0,
    d_alti_p1: 0,
    alti_p1: 0,
    humid_p1: 0,
    temp_p1: 0,
    press_p1: 0,
  },
  p_2: {
    time_p2: 0,
    lat_p2: 0,
    lng_p2: 0,
    dist_p2: 0,
    compass_p2: 0,
    d_alti_p2: 0,
    alti_p2: 0,
    humid_p2: 0,
    temp_p2: 0,
    press_p2: 0,
  },
  p_3: {
    time_p3: 0,
    lat_p3: 0,
    lng_p3: 0,
    dist_p3: 0,
    compass_p3: 0,
    d_alti_p3: 0,
    alti_p3: 0,
    humid_p3: 0,
    temp_p3: 0,
    press_p3: 0,
  },
  p_4: {
    time_p4: 0,
    lat_p4: 0,
    lng_p4: 0,
    dist_p4: 0,
    compass_p4: 0,
    d_alti_p4: 0,
    alti_p4: 0,
    humid_p4: 0,
    temp_p4: 0,
    press_p4: 0,
  },
  c_1: {},
  c_2: {},
  c_3: {},
  c_4: {},
  error: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_STREAM: {
      return {
        ...state,
        status: false,
        error: action.payload,
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
