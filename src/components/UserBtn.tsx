"use client";

import { CircleUserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/stores/auth";

export const UserBtn = () => {
  const { setOpen } = useAuth();

  return (
    <Button
      className="h-10 text-sm sm:text-base flex items-center gap-2"
      onClick={() => setOpen(true)}
      variant="outline"
    >
      <CircleUserRound className="size-5" />
      <span className="hidden sm:inline">Вход</span>
    </Button>
  );
};
