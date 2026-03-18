import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { UserBtn } from "@/components/UserBtn";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/ui/field";

export const Header = () => {
  return (
    <Container className="pt-4">
      <div className="flex items-center justify-between gap-3 flex-wrap md:flex-nowrap">
        <Link href="/" className="h-10 w-24 sm:h-12 sm:w-28 relative shrink-0">
          <Image
            src="/logo.svg"
            alt="Logo"
            className="size-full object-contain"
            priority
            height={60}
            width={120}
          />
        </Link>

        <div className="w-full order-3 md:order-2 md:w-auto md:flex-1">
          <Field className="flex w-full gap-2" orientation="horizontal">
            <Input
              className="h-10 flex-1"
              type="search"
              placeholder="Поиск..."
            />
            <Button className="h-10 px-4 sm:px-5" variant="outline">
              <span className="hidden sm:inline">Поиск</span>
              <span className="sm:hidden">🔍</span>
            </Button>
          </Field>
        </div>

        <div className="order-2 md:order-3 shrink-0">
          <UserBtn />
        </div>
      </div>
    </Container>
  );
};
