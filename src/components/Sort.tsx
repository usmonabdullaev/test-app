"use client";

import { useSyncUrl } from "@/hooks/useSyncUrl";
import { useData } from "@/stores/data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Sort = () => {
  const { setFilter, filter, loading } = useData();
  const syncUrl = useSyncUrl();

  return (
    <div className="mb-4 sm:mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <p className="text-sm text-muted-foreground">Сортировка</p>
      <Select
        onValueChange={(value) => {
          setFilter({ sortBy: value, page: 1 }, true, syncUrl);
        }}
        value={filter.sortBy || "price"}
        disabled={loading}
      >
        <SelectTrigger className="w-full sm:w-55">
          <SelectValue placeholder="Выберите сортировку" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="price">Сначала дешевые</SelectItem>
            <SelectItem value="-price">Сначала дорогие</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
