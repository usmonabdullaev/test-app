import { create } from "zustand";

import { axios } from "@/services/axios";
import { ApartmentDto } from "@/types/dto";
import { FilterDto } from "@/types/filter";

type DataState = {
  data: ApartmentDto[];
  loading: boolean;
  error: null | unknown;
  filter: FilterDto;
};

type DataActions = {
  getData: () => Promise<void>;
  setFilter: (filter: FilterDto) => void;
  clearFilter: () => void;
};

type DataStore = DataState & DataActions;

const defaultState: DataState = {
  data: [],
  loading: false,
  error: null,
  filter: {
    page: 1,
    limit: 12,
  },
};

export const useData = create<DataStore>((set, get) => ({
  ...defaultState,

  getData: async () => {
    try {
      set({ loading: true });

      const { data } = await axios.get("/apartments");

      set({ data });
    } catch (error) {
      set({ error });
    } finally {
      set({ loading: false });
    }
  },

  setFilter: (filter) => set({ filter: { ...get().filter, ...filter } }),

  clearFilter: () => set({ filter: defaultState.filter }),
}));
