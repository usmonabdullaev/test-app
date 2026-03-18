"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { FilterDto } from "@/types/filter";

export const useSyncUrl = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return useCallback(
    (filter: FilterDto) => {
      const params = new URLSearchParams(searchParams.toString());

      const urlFilters = {
        page: filter.page,
        rooms: filter.rooms,
        minPrice: filter.minPrice,
        maxPrice: filter.maxPrice,
        sortBy: filter.sortBy,
      };

      Object.entries(urlFilters).forEach(([key, value]) => {
        if (
          value === undefined ||
          value === null ||
          value === "" ||
          value === "0"
        ) {
          params.delete(key);
        } else {
          params.set(key, String(value));
        }
      });

      const query = params.toString();

      router.replace(query ? `${pathname}?${query}` : pathname);
    },
    [router, pathname, searchParams],
  );
};
