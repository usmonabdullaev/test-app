import { create } from "zustand";

import { axios } from "@/services/axios";
import { ApartmentDto } from "@/types/dto";

type SingleDataState = {
  data: ApartmentDto | null;
  loading: boolean;
  error: null | unknown;
};

type SingleDataActions = {
  getData: (id: number) => Promise<void>;
};

type SingleDataStore = SingleDataState & SingleDataActions;

const defaultState: SingleDataState = {
  data: null,
  loading: false,
  error: null,
};

export const useSingleData = create<SingleDataStore>((set) => ({
  ...defaultState,

  getData: async (id) => {
    try {
      set({ loading: true });

      const { data } = await axios.get(`/apartments/${id}`);

      set({ data });
    } catch (error) {
      set({ error });
    } finally {
      set({ loading: false });
    }
  },
}));
