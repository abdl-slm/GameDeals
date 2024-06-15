import axios from "axios";
import { create } from "zustand";
import { DEALS_API } from "../../utils/constants";
import { Deal } from "../../model/deals";
import { Result } from "../../model/result";
import { useCallback, useState } from "react";

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

  const initialState = {
    loading: false,
    success: false,
    error: false,
    data: initialDealState,
    errorData: null,
  };

export const useGetData = create<Result>(((set) => ({
  ...initialState,

  execute: async () => {
    set({ ...initialState, loading: true });
    try {
      const res = await axios.get(DEALS_API);
      set({ ...initialState, success: true, data: res.data });
    } catch (err: any) {
      console.error("Error in data fetch:", err);
      set({ ...initialState, error: true, errorData: err.message });
    }
  },
})));

export const saveSingleData = create<Result>((set) => ({
    ...initialState,
  
    execute: async (deal: Deal) => {
      set({data: deal });
    },

    //Just and example showing multiple async function within a const
    executeSave: async (deal: Deal) => {
        set({data: deal });
      },
  }));


  function useFuncGetData(){
    const [state, setState] = useState(initialState);
  
    const execute = useCallback(async () => {
      setState({ ...initialState, loading: true });
      try {
        const res = await axios.get(DEALS_API);
        setState({ ...initialState, success: true, data: res.data });
      } catch (err) {
        console.error("Error in data fetch:", err);
        setState({ ...initialState, error: true, errorData: err.message });
      }
    }, []);
  
    return {
      ...state,
      execute,
    };
  };
  
  export default useFuncGetData;