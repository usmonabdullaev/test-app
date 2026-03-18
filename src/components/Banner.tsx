import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";

export const Banner = () => {
  return (
    <Container className="py-6 sm:py-10">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 sm:gap-6 md:gap-10 mr-4 sm:mr-6 md:mr-10"
            >
              <Badge className="px-3 py-2 sm:p-4 text-sm sm:text-base bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                Скидки до -70%
              </Badge>
              <Badge className="px-3 py-2 sm:p-4 text-sm sm:text-base bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                Скидки до -70%
              </Badge>
              <Badge className="px-3 py-2 sm:p-4 text-sm sm:text-base bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                Скидки до -70%
              </Badge>
              <Badge className="px-3 py-2 sm:p-4 text-sm sm:text-base bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                Скидки до -70%
              </Badge>
              <Badge className="px-3 py-2 sm:p-4 text-sm sm:text-base bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
                Скидки до -70%
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
