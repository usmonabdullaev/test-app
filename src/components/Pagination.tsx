"use client";

import { MetaDto } from "@/types/filter";
import {
  Pagination as UIPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface Props {
  meta: MetaDto;
  page?: number;
  limit?: number;
  onChange?: (page: number) => void;
  className?: string;
}

export const Pagination = ({
  meta,
  onChange,
  className,
  limit = 9,
  page = 1,
}: Props) => {
  const pages: number[] = [];

  const half = Math.floor(limit / 2);

  let start = Math.max(1, page - half);
  let end = Math.min(meta.total_pages, page + half);

  if (page <= half) {
    end = Math.min(meta.total_pages, limit);
  }

  if (page + half > meta.total_pages) {
    start = Math.max(1, meta.total_pages - limit + 1);
  }

  const dotsBefore = start > 1;
  const dotsAfter = end < meta.total_pages;

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <UIPagination className={cn(className)}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              if (page !== 1) {
                onChange?.(page - 1);
              }
            }}
            className="cursor-pointer"
            text="Назад"
          />
        </PaginationItem>

        {dotsBefore && (
          <PaginationItem>
            <PaginationLink
              className="cursor-pointer"
              isActive={1 === page}
              onClick={() => onChange?.(1)}
            >
              1
            </PaginationLink>
          </PaginationItem>
        )}

        {dotsBefore && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {pages.map((i) => (
          <PaginationItem key={i}>
            <PaginationLink
              className="cursor-pointer"
              isActive={i === page}
              onClick={() => {
                if (page !== i) onChange?.(i);
              }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        ))}

        {dotsAfter && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {dotsAfter && (
          <PaginationItem>
            <PaginationLink
              className="cursor-pointer"
              isActive={meta.total_pages === page}
              onClick={() => onChange?.(meta.total_pages)}
            >
              {meta.total_pages}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => {
              if (page !== meta.total_pages) {
                onChange?.(page + 1);
              }
            }}
            className="cursor-pointer"
            text="Вперед"
          />
        </PaginationItem>
      </PaginationContent>
    </UIPagination>
  );
};
