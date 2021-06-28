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
  DATA_ARR_P1,
  DATA_ARR_P2,
  DATA_ARR_P3,
  DATA_ARR_P4,
  DATA_RESET_P1,
  DATA_RESET_P2,
  DATA_RESET_P3,
  DATA_RESET_P4,
  API_GET_SUCCESS,
  API_ERROR,
  API_GET_BYID_SUCCESS,
} from "./dataTypes";

const initialState = {
  status: false,
  fetch_status: false,
  d_1: {},
  d_2: {},
  d_3: {},
  d_4: {},
  p_1: {
    time: 0,
    lat: 0,
    lng: 0,
    dist: 0,
    compass: 0,
    d_alti: 0,
    alti: 0,
    humid: 0,
    temp: 0,
    press: 0,
  },
  p_2: {
    time: 0,
    lat: 0,
    lng: 0,
    dist: 0,
    compass: 0,
    d_alti: 0,
    alti: 0,
    humid: 0,
    temp: 0,
    press: 0,
  },
  p_3: {
    time: 0,
    lat: 0,
    lng: 0,
    dist: 0,
    compass: 0,
    d_alti: 0,
    alti: 0,
    humid: 0,
    temp: 0,
    press: 0,
  },
  p_4: {
    time: 0,
    lat: 0,
    lng: 0,
    dist: 0,
    compass: 0,
    d_alti: 0,
    alti: 0,
    humid: 0,
    temp: 0,
    press: 0,
  },
  d_arr_p1: [],
  d_arr_p2: [],
  d_arr_p3: [],
  d_arr_p4: [],
  c_1: {},
  c_2: {},
  c_3: {},
  c_4: {},
  post_feedback: [],
  get_data: [],
  get_single_data: [],
  error: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_STREAM: {
      return {
        ...state,
        status: false,

        d_arr_p1: [],
        d_arr_p2: [],
        d_arr_p3: [],
        d_arr_p4: [],
        c_1: {},
        c_2: {},
        c_3: {},
        c_4: {},
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

    case DATA_ARR_P1: {
      return {
        ...state,
        status: true,
        d_arr_p1: [...state.d_arr_p1, action.payload],
        error: "",
      };
    }

    case DATA_ARR_P2: {
      return {
        ...state,
        status: true,
        d_arr_p2: [...state.d_arr_p2, action.payload],
        error: "",
      };
    }

    case DATA_ARR_P3: {
      return {
        ...state,
        status: true,
        d_arr_p3: [...state.d_arr_p3, action.payload],
        error: "",
      };
    }

    case DATA_ARR_P4: {
      return {
        ...state,
        status: true,
        d_arr_p4: [...state.d_arr_p4, action.payload],
        error: "",
      };
    }

    case DATA_RESET_P1: {
      return {
        ...state,
        status: true,
        d_arr_p1: [],
        error: "",
      };
    }

    case DATA_RESET_P2: {
      return {
        ...state,
        status: true,
        d_arr_p2: [],
        error: "",
      };
    }

    case DATA_RESET_P3: {
      return {
        ...state,
        status: true,
        d_arr_p3: [],
        error: "",
      };
    }

    case DATA_RESET_P4: {
      return {
        ...state,
        status: true,
        d_arr_p4: [],
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

    case API_GET_SUCCESS: {
      return {
        ...state,
        fetch_status: true,
        get_data: action.payload,
        error: "",
      };
    }

    case API_GET_BYID_SUCCESS: {
      return {
        ...state,
        fetch_status: true,
        get_single_data: action.payload,
        error: "",
      };
    }

    case API_ERROR: {
      return {
        ...state,
        fetch_status: false,
        get_data: [],
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default dataReducer;
