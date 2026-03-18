import { Suspense } from "react";

import { ClientWrapper } from "@/components/ClientWrapper";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <Container className="pb-6 sm:pb-10">
      <Suspense>
        <ClientWrapper />
      </Suspense>
    </Container>
  );
}
