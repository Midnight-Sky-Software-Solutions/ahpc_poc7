'use server'

import { registerForEvent } from "@/app/services/wa-events";

export async function register(eventId: number) {
  await registerForEvent(eventId);
}