'use server'
import { createContact } from "@/app/services/wa-contacts";
import { ApiError } from "@/app/services/wa-client";
import { redirect } from "next/navigation";

import { z } from "zod";

const signUpSchema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().nonempty(),
  password1: z.string().nonempty()
})

export async function submitJoinForm(_prevState, formData: FormData) {
  if (formData.get('password1')?.valueOf() != formData.get('password2')?.valueOf()) {
    return { message: 'Passwords do not match', details: [] }
  }
  try {
    const validatedForm = signUpSchema.safeParse(Object.fromEntries(formData));
    if (!validatedForm.success) {
      return {
        message: 'Please fill in all fields.'
      }
    }
    const validatedFormData = validatedForm.data!;
    await createContact({
      firstName: validatedFormData.firstName!,
      lastName: validatedFormData.lastName!,
      email: validatedFormData.email!,
      password: validatedFormData.password1!
    });
  } catch (e) {
    if (e instanceof ApiError) {
      const apiErrorData = e.getJSON();
      if (!!apiErrorData) {
        try {
          return { message: apiErrorData.message, details: getMessageDetails(apiErrorData) };
        } catch (e) {
          console.error(e);
          return { message: 'Unexpected error.', details: [] };
        }
      }
    }
  }
  redirect('/join/success');
}

function getMessageDetails(data) {
/**

{
  code: 'Validation',
  message: 'Contact details validation error.',
  details: [
    {
      Key: 'Password',
      Value: 'asdf',
      Restriction: 'Contact password length should be greater or equal to 7.'
    },
    {
      Key: 'Email',
      Value: 'Contact email is required to set password.'
    }
  ]
}

**/
  const result: { key: string, value: string}[] = [];
  if (data.details && data.details.length > 0) {
    data.details.forEach(element => {
      if (element.Key == 'Password') {
        result.push({ key: element.Key, value: element.Restriction });
      } else {
        result.push({ key: element.Key, value: element.Value });
      }
    });
  }
  return result;
}