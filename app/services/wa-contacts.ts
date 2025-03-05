import { accountId } from "@/ahpc.config";
import { getSession } from "../lib/session"
import waclient from "./wa-client";

export async function getMe() {
  const session = await getSession();
  const { data } = await waclient.GET('/accounts/{accountId}/contacts/{contactId}', {
    params: {
      path: {
        accountId,
        contactId: session.contactId
      }
    }
  });
  return data;
}

export async function createContact(contact: {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}) {
  const {data } = await waclient.POST('/accounts/{accountId}/contacts', {
    params: {
      path: {
        accountId,
      }
    },
    body: {
      FirstName: contact.firstName,
      LastName: contact.lastName,
      Email: contact.email,
      Password: contact.password
    }
  });
  return data;
}

export async function updateContact(contact: {
  firstName: string,
  lastName: string,
  email: string
}) {
  const session = await getSession();
  await waclient.PUT('/accounts/{accountId}/contacts/{contactId}', {
    params: {
      path: {
        accountId,
        contactId: session.contactId
      }
    },
    body: {
      Id: session.contactId,
      FirstName: contact.firstName,
      LastName: contact.lastName,
      Email: contact.email
    }
  });
}