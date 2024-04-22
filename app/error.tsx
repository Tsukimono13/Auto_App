"use client";
import { HStack } from "@/components/Stack/HStack/HStack";

export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <HStack align="center" justify="center">
      <h1>Ошибка {error.message}</h1>
    </HStack>
  );
}
