import {takeEvery, put, all, spawn, takeLatest} from 'redux-saga/effects';
import {
  QUOTE_API,
  FETCH_QUOTES,
  FETCH_DEALS,
  DEALS_API,
  FETCH_SINGLE_DEAL,
} from './utils/constants';
import {setQuotes} from './actions/quoteAction';
import {setDeals, setSingleDeal} from './actions/dealsAction';
import {Deals} from './model/deals';

// Worker saga function to handle the asynchronous fetching of quotes data
function* getQuotesData(): any {
  const response = yield fetch(QUOTE_API);

  // Parsing the JSON data from the API response
  const responseData = yield response.json();

  // Dispatching the 'setQuotes' action with the retrieved quotes data
  yield put(setQuotes(responseData.quotes));
}

function* getDealsData(): any {
  const response = yield fetch(DEALS_API);

  // Parsing the JSON data from the API response
  const responseData = yield response.json();
  // Dispatching the 'setQuotes' action with the retrieved quotes data
  yield put(setDeals(responseData));
}

function* singleDealData(deal: any) {
  yield put(setSingleDeal(deal));
}

// Watcher saga function to listen for the FETCH_QUOTES action and trigger the worker saga
function* sagaData() {
  // Using 'takeEvery' to watch for every occurrence of the FETCH_QUOTES action and call 'getQuotesData
  yield all([
    takeLatest(FETCH_QUOTES, getQuotesData),
    takeLatest(FETCH_DEALS, getDealsData),
    takeLatest(FETCH_SINGLE_DEAL, singleDealData),
  ]);
}

// Exporting the watcher saga to be run in the Redux Saga middleware
export default sagaData;
