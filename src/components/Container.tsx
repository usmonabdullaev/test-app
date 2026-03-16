import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "container mx-auto max-w-360 px-16 pt-6 pb-24 max-md:px-5",
        className,
      )}
    >
      {children}
    </div>
  );
};
