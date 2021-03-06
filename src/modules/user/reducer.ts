import {
  CHECK_FAILURE,
  CHECK_SUCCESS,
  LOGOUT,
  TEMP_SET_USER,
  UserAction,
  UserState,
} from 'modules/user/types';

const initialState: UserState = {
  user: null,
  checkError: null,
};

const user = (
  state: UserState = initialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case TEMP_SET_USER:
      return { ...state, user: action.payload.user };
    case CHECK_SUCCESS:
      return { ...state, user: action.payload, checkError: null };
    case CHECK_FAILURE:
      return { ...state, user: null, checkError: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default user;
