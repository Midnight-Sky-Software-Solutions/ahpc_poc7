'use server'

import { updateContact } from "@/app/services/wa-contacts";
import { z } from "zod"

const profileSchema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().nonempty()
})

export async function submitProfileForm(_prevState, formData: FormData) {
  const parsedProfile = profileSchema.safeParse(Object.fromEntries(formData));
  if (!parsedProfile.success) {
    return {
      message: 'Update failed',
      error: 'Not all fields were filled in'
    }
  }
  await updateContact(parsedProfile.data!);
  return  {
    message: 'Updated',
    error: null
  }
}