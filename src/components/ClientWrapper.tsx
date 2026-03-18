"use client";

import { ProductList } from "@/components/products/List";
import { Filter } from "@/components/Filter";

export const ClientWrapper = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-7">
      <Filter className="w-full lg:w-64 xl:w-72 shrink-0" />
      <ProductList className="flex-1" />
    </div>
  );
};
