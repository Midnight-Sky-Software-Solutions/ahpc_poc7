import { accountId } from "@/ahpc.config";
import { getSession } from "../lib/session";
import waclient from "./wa-client";

export async function getInvoices(unpaidOnly: boolean) {
  const session = await getSession();
  const { data: invoices } = await waclient.GET("/accounts/{accountId}/invoices", {
    params: {
      path: {
        accountId
      },
      query: {
        contactId: session.contactId,
        unpaidOnly
      }
    }
  });
  return invoices?.Invoices;
}