import { create } from "zustand";

import { FilterDto, MetaDto } from "@/types/filter";
import { ApartmentDto } from "@/types/dto";
import { axios } from "@/services/axios";

type DataState = {
  data: ApartmentDto[];
  loading: boolean;
  error: null | unknown;
  filter: FilterDto;
  meta: MetaDto;
};

type DataActions = {
  getData: () => Promise<void>;
  setFilter: (
    filter: FilterDto,
    fetch?: boolean,
    syncUrl?: (filter: FilterDto) => void,
    fromUrl?: boolean,
  ) => void;
};

type DataStore = DataState & DataActions;

const defaultState: DataState = {
  data: [],
  loading: false,
  error: null,
  filter: {
    limit: 9,
    page: 1,
    sortBy: "price",
  },
  meta: {
    total_items: 0,
    total_pages: 0,
  },
};

export const useData = create<DataStore>((set, get) => ({
  ...defaultState,

  getData: async () => {
    try {
      set({ loading: true });

      const filter = get().filter;

      const { data } = await axios.get<{
        items: ApartmentDto[];
        meta: MetaDto;
      }>("/apartments", {
        params: {
          page: filter.page,
          limit: filter.limit,
          rooms: filter.rooms || undefined,
          sortBy: filter.sortBy || "price",

          // https://mokky.gitbook.io/welcome/obrashenie-k-resursam/filtraciya/po-neskolkim-znacheniyam#poisk-po-diapazonu-from-to
          "price[from]": filter.minPrice || undefined,
          "price[to]": filter.maxPrice || undefined,
        },
      });

      set({
        data: data.items,
        meta: {
          total_items: data.meta.total_items,
          total_pages: data.meta.total_pages,
        },
      });
    } catch (error) {
      set({ error });
    } finally {
      set({ loading: false });
    }
  },

  setFilter: async (filter, fetch = false, syncUrl, fromUrl = false) => {
    const current = get().filter;
    const newFilter = { ...current, ...filter };

    const isSame = JSON.stringify(current) === JSON.stringify(newFilter);

    if (fromUrl && fetch && !syncUrl) {
      await get().getData();
    }

    if (isSame) return;

    set({ filter: newFilter });

    if (syncUrl && !fromUrl) {
      syncUrl(newFilter);
    }

    if (fetch) {
      await get().getData();
    }
  },
}));
