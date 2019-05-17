export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
  REMOVE: 'users/REMOVE',
};

const initalState = {
  data: [],
  error: null,
  loading: false,
};

export default function users(state = initalState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_SUCCESS:
      return {
        data: [...state.data, action.payload],
        error: null,
        loading: false,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case Types.REMOVE:
      return {
        ...state,
        data: state.data.filter(user => user.id !== action.payload.user.id),
      };
    default:
      return state;
  }
}

export const Creators = {
  addUserRequest: payload => ({
    type: Types.ADD_REQUEST,
    payload,
  }),

  addUserSuccess: payload => ({
    type: Types.ADD_SUCCESS,
    payload,
  }),

  addUserFailure: payload => ({
    type: Types.ADD_FAILURE,
    payload,
  }),

  removeUser: payload => ({
    type: Types.REMOVE,
    payload,
  }),
};
