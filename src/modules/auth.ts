import { action } from 'modules/types';

const SAMPLE_ACTION = 'auth/SAMPLE_ACTION' as const;

export const sampleAction: action = () => ({
  type: SAMPLE_ACTION,
});

export type SampleAction = ReturnType<typeof sampleAction>;

const initialState = {};

const auth = (state = initialState, action: SampleAction) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return { ...state };
    default:
      return state;
  }
};

export default auth;
