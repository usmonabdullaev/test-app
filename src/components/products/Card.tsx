"use client";

import { BadgePercent, Bookmark, MoveRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn, formatPrice } from "@/lib/utils";
import { ApartmentDto } from "@/types/dto";

interface Props {
  item: ApartmentDto;
  index?: number;
}

export const ProductCard = ({ item, index }: Props) => {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const onClickLike = () => {
    setLoading(true);

    // Имитация загрузки на сервер
    if (liked) {
      toast.promise<{ id: number }>(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve({ id: item.id }), 2000),
          ),
        {
          loading: "Загрузка...",
          success: (data) => {
            setLiked(false);
            setLoading(false);

            return `Продукт #${data.id} удален из избранных`;
          },
          error: "Ошибка",
        },
      );
    } else {
      toast.promise<{ id: number }>(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve({ id: item.id }), 2000),
          ),
        {
          loading: "Загрузка...",
          success: (data) => {
            setLiked(true);
            setLoading(false);

            return `Продукт #${data.id} добавлен в избранных`;
          },
          error: "Ошибка",
        },
      );
    }
  };

  const hasDiscount = index === 0;

  return (
    <div className="transition hover:shadow-lg rounded-xl overflow-hidden bg-white dark:bg-gray-800 flex flex-col">
      <div className="w-full relative aspect-video">
        <Image
          src={item.image}
          alt={item.title}
          className="object-cover object-center"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />

        {hasDiscount && (
          <div className="absolute top-2 left-2">
            <Badge className="bg-red-50/90 text-red-700 border border-red-700 px-2 py-1 text-xs flex items-center gap-1">
              <BadgePercent /> Скидка
            </Badge>
          </div>
        )}

        <div className="absolute top-2 right-2 cursor-pointer">
          <Bookmark
            className={cn("text-red-600", { "fill-red-600": liked })}
            onClick={() => {
              if (!loading) onClickLike();
            }}
          />
        </div>
      </div>

      <div className="p-3 sm:p-4 flex flex-col gap-3 flex-1">
        <p className="text-base sm:text-lg font-semibold line-clamp-2">
          {item.title}
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Badge className="text-xs sm:text-sm bg-blue-50 text-blue-700 px-2 py-1">
            Комнат: {item.rooms}
          </Badge>
          <Badge className="text-xs sm:text-sm bg-blue-50 text-blue-700 px-2 py-1">
            Площадь: {item.area}м²
          </Badge>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-1 gap-2 sm:gap-0">
          <div>
            {hasDiscount && (
              <p className="text-sm text-gray-500 line-through">
                {formatPrice(item.price + 100000)} c.
              </p>
            )}
            <p className="text-lg sm:text-xl font-bold text-blue-800">
              {formatPrice(item.price)} c.
            </p>
          </div>

          <Link href={`/apartments/${item.id}`} className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto px-3 py-1 text-sm sm:text-base cursor-pointer flex items-center justify-center gap-1 animation-bounce-x__block">
              Подробнее <MoveRight className="w-4 h-4 animation-bounce-x" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
