import { accountId } from "@/ahpc.config";
import { getSession } from "../lib/session";
import waclient from "./wa-client";

async function eventRegistrations(contactId: number) {
  const { data: existingRegistrations } = await waclient.GET('/accounts/{accountId}/eventregistrations', {
    params: {
      path: {
        accountId
      },
      query: {
        contactId: contactId
      }
    }
  });
  return existingRegistrations;
}

export async function getEventRegistrations() {
  const session = await getSession();
  const registrations = await eventRegistrations(session.contactId);
  return registrations;
}

export async function getPublicEvents() {
  const { data } = await waclient.GET('/accounts/{accountId}/events', {
    params: {
      path: {
        accountId
      },
      query: {
        $filter: "RegistrationEnabled eq true"
      }
    }
  });
  return data?.Events?.filter(e => e.AccessLevel == 'Public');
}

export async function getEvents() {
  const session = await getSession();
  const existingRegistrations = await eventRegistrations(session.contactId);
  const { data } = await waclient.GET('/accounts/{accountId}/events', {
    params: {
      path: {
        accountId
      },
      query: {
        $filter: "RegistrationEnabled eq true"
      }
    }
  });
  return data?.Events?.filter(e => e.AccessLevel == 'Public' || e.AccessLevel == 'Restricted')
    .map(e => ({...e, registered: !!existingRegistrations?.find(r => r.Event.Id == e.Id)}));
}

export async function registerForEvent(eventId: number) {
  const session = await getSession();
  const registrationDetails = await waclient.GET("/accounts/{accountId}/events/{eventId}", {
    params: {
      path: {
        accountId,
        eventId
      }
    }
  });
  const registrationResult = await waclient.POST('/accounts/{accountId}/eventregistrations', {
    params: {
      path: {
        accountId
      }
    },
    body: {
      "RegistrationTypeId": registrationDetails.data!.Details!.RegistrationTypes![0].Id!,
      "RegistrationFields": [],
      "Event": {
        "Id": eventId
      },
      "Contact": {
        "Id": session.contactId
      },
      RecreateInvoice: false,
      OnWaitlist: false,
      ShowToPublic: false,
      IsCheckedIn: false
    }
  });
  return registrationResult.data;
}