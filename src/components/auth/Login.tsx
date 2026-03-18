"use client";

import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

import { Field, FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/stores/auth";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const AuthLoginModal = () => {
  const { open, setOpen, login, loading } = useAuth();

  const onLogin = () => {
    toast.promise(login, {
      loading: "Загрузка...",
      success: "Успешный вход в аккаунт",
      error: "Ошибка",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogContent className="sm:max-w-sm w-full p-5 sm:p-6">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl font-bold">
              Вход
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-gray-600">
              Войдите в аккаунт, чтобы продолжить
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="mt-4 space-y-3">
            <Field>
              <Label htmlFor="login">Логин</Label>
              <Input
                id="login"
                placeholder="Логин"
                className="h-10 sm:h-12"
                disabled={loading}
              />
            </Field>
            <Field>
              <Label htmlFor="password">Пароль</Label>
              <Input
                type="password"
                id="password"
                placeholder="Пароль"
                className="h-10 sm:h-12"
                disabled={loading}
              />
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-4 flex flex-col sm:flex-row gap-3 sm:justify-end">
            <DialogClose asChild>
              <Button
                variant="outline"
                size="lg"
                disabled={loading}
                className="w-full sm:w-auto"
              >
                Отмена
              </Button>
            </DialogClose>

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full sm:w-auto flex items-center justify-center gap-2"
              onClick={onLogin}
            >
              {loading && <LoaderCircle className="animate-spin" />}
              Войти
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
