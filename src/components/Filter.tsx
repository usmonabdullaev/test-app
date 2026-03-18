"use client";

import { useEffect } from "react";

import { DebouncedInput } from "@/components/DebouncedInput";
import { Field, FieldLabel } from "@/components/ui/field";
import { useFilterSync } from "@/hooks/useFilterSync";
import { Button } from "@/components/ui/button";
import { useSyncUrl } from "@/hooks/useSyncUrl";
import { useData } from "@/stores/data";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Filter = ({ className }: Props) => {
  const { setFilter, filter, loading, meta } = useData();
  const filterSync = useFilterSync();
  const syncUrl = useSyncUrl();

  useEffect(() => {
    filterSync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn(className, "space-y-5")}>
      <p className="text-base sm:text-lg font-semibold">
        Найдено {meta.total_items} объявлений
      </p>

      <Field className="gap-1">
        <FieldLabel>Количество комнат</FieldLabel>
        <DebouncedInput
          placeholder="Например: 2"
          type="number"
          value={filter.rooms}
          onChangeValue={(value) => {
            setFilter(
              { rooms: value === "0" ? "" : value, page: 1 },
              true,
              syncUrl,
            );
          }}
          disabled={loading}
          className="h-10"
        />
      </Field>

      <div className="space-y-2">
        <FieldLabel>Цена</FieldLabel>

        <div className="flex gap-2">
          <DebouncedInput
            placeholder="От"
            type="number"
            value={filter.minPrice}
            onChangeValue={(value) => {
              setFilter(
                { minPrice: value === "0" ? "" : value, page: 1 },
                true,
                syncUrl,
              );
            }}
            disabled={loading}
            className="h-10 flex-1"
          />

          <DebouncedInput
            placeholder="До"
            type="number"
            value={filter.maxPrice}
            onChangeValue={(value) => {
              setFilter(
                { maxPrice: value === "0" ? "" : value, page: 1 },
                true,
                syncUrl,
              );
            }}
            disabled={loading}
            className="h-10 flex-1"
          />
        </div>
      </div>

      <Button
        variant="destructive"
        className="text-sm cursor-pointer"
        onClick={() =>
          setFilter(
            { rooms: "", minPrice: "", maxPrice: "", page: 1 },
            true,
            syncUrl,
          )
        }
      >
        Сбросить фильтры
      </Button>
    </div>
  );
};
