import {SET_QUOTES_DATA} from '../utils/constants';

// Initial state for the quotes data in the Redux store
const initialState: never[] = [];

export const quoteReducer = (state = initialState, action: { type: any; data: any; }) => {
  switch (action.type) {
    // Case for setting quotes data
    case SET_QUOTES_DATA:
      return {
        ...state,
        quotes: action.data,
      };
    // Default case for any other action type
    default:
      return {
        ...state,
        quotes: [],
      };
  }
};