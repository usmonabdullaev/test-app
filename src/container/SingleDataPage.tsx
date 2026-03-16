"use client";

import { useSingleData } from "@/stores/single-data";
import { useEffect } from "react";

interface Props {
  id: number;
}

export const SingleDataPage = ({ id }: Props) => {
  const { getData } = useSingleData();

  useEffect(() => {
    getData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return <div>Single Page</div>;
};
