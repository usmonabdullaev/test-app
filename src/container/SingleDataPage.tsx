"use client";

import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

import { ProductNotFound } from "@/components/product/NotFound";
import { ProductLoading } from "@/components/product/Loading";
import { Card, CardContent } from "@/components/ui/card";
import { useSingleData } from "@/stores/single-data";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn, formatPrice } from "@/lib/utils";

interface Props {
  id: string;
}

const images = [
  "/images/image-1.png",
  "/images/image-2.png",
  "/images/image-3.png",
  "/images/image-4.png",
];

export const SingleDataPage = ({ id }: Props) => {
  const { getData, data, loading } = useSingleData();
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);

  // Mock state
  const [mockLoading, setMockLoading] = useState(false);
  const [cart, setCart] = useState(false);

  useEffect(() => {
    getData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const addToCart = () => {
    setMockLoading(true);

    toast.promise<string>(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve("Успешно добавлен в корзину"), 2000),
        ),
      {
        loading: "Загрузка...",
        success: (data) => {
          setCart(true);

          return data;
        },
        error: "Ошибка",
        finally: () => {
          setMockLoading(false);
        },
      },
    );
  };

  if (loading) {
    return <ProductLoading />;
  }

  if (!data) {
    return <ProductNotFound />;
  }

  return (
    <div>
      <Breadcrumb title={data.title} />
      <h1 className="text-4xl font-semibold my-4">{data.title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        <div className="lg:col-span-7 space-y-4">
          <div className="relative w-full aspect-4/3 lg:aspect-16/10 max-h-100 rounded-2xl overflow-hidden">
            <Image
              src={images[active]}
              alt={data.title}
              fill
              loading="eager"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((i, index) => (
              <button
                key={index}
                className={cn(
                  "relative w-20 h-20 shrink-0 rounded-xl overflow-hidden border",
                  active === index ? "border-black" : "border-gray-200",
                )}
                onClick={() => setActive(index)}
              >
                <Image
                  src={i}
                  alt={`Thumb ${index + 1}`}
                  fill
                  loading="eager"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <Card className="rounded-2xl shadow-sm flex flex-col">
            <CardContent className="p-5 space-y-4 flex flex-col">
              <h2 className="text-xl sm:text-2xl font-bold">{data.title}</h2>

              <div className="text-2xl sm:text-3xl font-semibold text-blue-800">
                {formatPrice(data.price)} c.
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-4 my-2">
                <Badge className="text-xs sm:text-sm bg-blue-50 text-blue-700 p-3">
                  Комнат: {data.rooms}
                </Badge>
                <Badge className="text-xs sm:text-sm bg-blue-50 text-blue-700 p-3">
                  Площадь: {data.area}м²
                </Badge>
              </div>

              <div className="mt-4 sm:mt-6">
                {cart ? (
                  <Button className="w-full h-10 cursor-pointer">
                    Перейти в корзину / Оформить
                  </Button>
                ) : (
                  <Button
                    onClick={addToCart}
                    disabled={mockLoading}
                    className="w-full h-10 flex items-center justify-center gap-2"
                  >
                    {mockLoading && <LoaderCircle className="animate-spin" />}
                    Добавить в корзину
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Описание</h2>

        <p
          className={cn(
            "text-gray-700 text-sm sm:text-base leading-relaxed",
            !expanded && "line-clamp-3",
          )}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut
          impedit hic dolores itaque iure sequi reiciendis non voluptatem
          deserunt, nostrum ipsa praesentium culpa, modi eligendi dolore cum
          quasi laudantium commodi doloremque ea quae? Autem atque odit labore
          debitis, minus, qui porro, sint quod nemo quo sequi eum itaque eius.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut
          impedit hic dolores itaque iure sequi reiciendis non voluptatem
          deserunt, nostrum ipsa praesentium culpa, modi eligendi dolore cum
          quasi laudantium commodi doloremque ea quae? Autem atque odit labore
          debitis, minus, qui porro, sint quod nemo quo sequi eum itaque
          eius.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo aut impedit hic dolores itaque iure sequi reiciendis non
          voluptatem deserunt, nostrum ipsa praesentium culpa, modi eligendi
          dolore cum quasi laudantium commodi doloremque ea quae? Autem atque
          odit labore debitis, minus, qui porro, sint quod nemo quo sequi eum
          itaque eius.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo aut impedit hic dolores itaque iure sequi reiciendis non
          voluptatem deserunt, nostrum ipsa praesentium culpa, modi eligendi
          dolore cum quasi laudantium commodi doloremque ea quae? Autem atque
          odit labore debitis, minus, qui porro, sint quod nemo quo sequi eum
          itaque eius. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo aut impedit hic dolores itaque iure sequi reiciendis non
          voluptatem deserunt, nostrum ipsa praesentium culpa, modi eligendi
          dolore cum quasi laudantium commodi doloremque ea quae? Autem atque
          odit labore debitis, minus, qui porro, sint quod nemo quo sequi eum
          itaque eius.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo aut impedit hic dolores itaque iure sequi reiciendis non
          voluptatem deserunt, nostrum ipsa praesentium culpa, modi eligendi
          dolore cum quasi laudantium commodi doloremque ea quae? Autem atque
          odit labore debitis, minus, qui porro, sint quod nemo quo sequi eum
          itaque eius.
        </p>

        <div className="flex justify-end">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-2 text-sm text-blue-600 hover:underline transition-colors"
          >
            {expanded ? "Свернуть" : "Показать больше"}
          </button>
        </div>
      </div>
    </div>
  );
};
