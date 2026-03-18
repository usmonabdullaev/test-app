"use client";

import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { useData } from "@/stores/data";

export const useFilterSync = () => {
  const searchParams = useSearchParams();
  const setFilter = useData((state) => state.setFilter);

  return useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());

    const filter = {
      page: +params.page || 1,
      rooms: params.rooms,
      minPrice: params.minPrice,
      maxPrice: params.maxPrice,
      sortBy: ["price", "-price"].includes(params?.sortBy)
        ? params.sortBy
        : "price",
    };

    setFilter(filter, true, undefined, true);
  }, [searchParams, setFilter]);
};
