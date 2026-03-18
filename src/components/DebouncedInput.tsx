"use client";

import { useEffect, useState, ComponentProps, useRef } from "react";

import { Input } from "@/components/ui/input";

type Props = ComponentProps<"input"> & {
  onChangeValue?: (value?: string) => void;
};

export const DebouncedInput = ({
  onChangeValue,
  value = "",
  ...props
}: Props) => {
  const [localValue, setLocalValue] = useState(value);
  const isFirstRender = useRef(true);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timeoutId = setTimeout(() => {
      onChangeValue?.(String(localValue));
    }, 800);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localValue]);

  return (
    <Input
      {...props}
      value={localValue}
      onChange={(e) => setLocalValue(e.target.value)}
    />
  );
};
