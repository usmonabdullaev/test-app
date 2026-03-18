import { create } from "zustand";

import { ApartmentDto } from "@/types/dto";
import { axios } from "@/services/axios";

type SingleDataState = {
  data: ApartmentDto | null;
  loading: boolean;
  error: null | unknown;
};

type SingleDataActions = {
  getData: (id: string) => Promise<void>;
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
