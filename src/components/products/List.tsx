"use client";

import { ProductsLoading } from "@/components/products/Loading";
import { ProductCard } from "@/components/products/Card";
import { Pagination } from "@/components/Pagination";
import { useSyncUrl } from "@/hooks/useSyncUrl";
import { Sort } from "@/components/Sort";
import { useData } from "@/stores/data";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const ProductList = ({ className }: Props) => {
  const { data, loading, meta, filter, setFilter } = useData();
  const syncUrl = useSyncUrl();

  return (
    <div className={cn("w-full space-y-5", className)}>
      <Sort />

      {loading ? (
        <ProductsLoading />
      ) : data.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5">
          {data.map((i, index) => (
            <ProductCard key={i.id} item={i} index={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-lg font-medium mb-2">Ничего не найдено</p>
          <p className="text-sm text-muted-foreground">
            Попробуйте изменить фильтры
          </p>
        </div>
      )}

      {!!data.length && (
        <Pagination
          meta={meta}
          page={filter.page}
          limit={filter.limit}
          onChange={(page) => {
            setFilter({ page }, true, syncUrl);
          }}
          className="flex justify-center sm:justify-end"
        />
      )}
    </div>
  );
};
