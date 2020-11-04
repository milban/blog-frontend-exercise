import {
  CHECK_FAILURE,
  CHECK_SUCCESS,
  TEMP_SET_USER,
  UserAction,
  UserState,
} from 'modules/user/types';

const initialState: UserState = {
  user: null,
  checkError: null,
};

const user = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case TEMP_SET_USER:
      return { ...state, user: action.payload };
    case CHECK_SUCCESS:
      return { ...state, user: action.payload, checkError: null };
    case CHECK_FAILURE:
      return { ...state, user: null, checkError: action.payload };
    default:
      return state;
  }
};

export default user;
