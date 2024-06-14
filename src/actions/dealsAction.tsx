import { Deal, Deals } from '../model/deals';
import {FETCH_DEALS, FETCH_SINGLE_DEAL, SET_DEALS_DATA, SET_SINGLE_DEAL_DATA} from '../utils/constants';

// Action creator function for initiating the fetch deals action
export function fetchDeals() {
  return {
    type: FETCH_DEALS,
  };
}

export function fetchSingleDeal() {
  return {
    type: FETCH_SINGLE_DEAL,
  };
}

// Action creator function for setting deals data in the Redux store
export function setDeals(data: Deals) {
  return {
    type: SET_DEALS_DATA,
    data,
  };
}

// Action creator function to pass single deals data to any page
export function setSingleDeal(data: Deal) {
  return {
    type: SET_SINGLE_DEAL_DATA,
    data,
  };
}