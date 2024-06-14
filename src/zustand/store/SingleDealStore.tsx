import axios from "axios";
import { create } from "zustand";
import { Deal } from "../../model/deals";

const initialState = {
  data: null
};

export const singleDealData = create((set, get) => ({
  ...initialState,

  execute: async (deal: Deal) => {
    set({data: deal });
  },
}));