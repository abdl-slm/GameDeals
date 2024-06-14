import {FETCH_QUOTES, SET_QUOTES_DATA} from '../utils/constants';

// Action creator function for initiating the fetch quotes action
export function fetchQuotes() {
  return {
    type: FETCH_QUOTES,
  };
}

// Action creator function for setting quotes data in the Redux store
export function setQuotes(data: any) {
  return {
    type: SET_QUOTES_DATA,
    data,
  };
}