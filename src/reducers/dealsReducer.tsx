import { Deal, Deals } from '../model/deals';
import {SET_DEALS_DATA, SET_SINGLE_DEAL_DATA} from '../utils/constants';

// Initial state for the deals data in the Redux store
const initialDealsState: Deals = [];

export const dealsReducer = (
  state = initialDealsState,
  action: {type: any; data: Deals},
) => {
  switch (action.type) {
    // Case for setting deals data
    case SET_DEALS_DATA:
      return {
        ...state,
        deals: action.data,
      };
    // Default case for any other action type
    default:
      return {
        ...state,
        deals: [],
      };
  }
};

const initialDealState: Deal = {
  internalName: '',
  title: '',
  dealID: '',
  storeID: '',
  gameID: '',
  salePrice: '',
  normalPrice: '',
  isOnSale: '',
  savings: '',
  metacriticScore: '',
  steamRatingText: '',
  steamRatingPercent: '',
  steamRatingCount: '',
  steamAppID: '',
  releaseDate: 0,
  lastChange: 0,
  dealRating: '',
  thumb: ''
};

export const singleDealReducer = (
  state = initialDealsState,
  action: {type: any; data: Deal},
) => {
  switch (action.type) {
    // Case for setting deals data
    case SET_SINGLE_DEAL_DATA:
      return {
        ...state,
        deal: action.data,
      };
    // Default case for any other action type
    default:
      return {
        ...state,
        deal: initialDealState,
      };
  }
};
