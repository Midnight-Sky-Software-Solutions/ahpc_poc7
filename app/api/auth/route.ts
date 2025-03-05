import { accountId, ahpcConfig } from "@/ahpc.config";
import { AhpcSession } from "@/app/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const body = await req.json();

  const requestBody = new URLSearchParams();
  requestBody.set('grant_type', 'authorization_code');
  requestBody.set('code', body.authCode);
  requestBody.set('client_id', ahpcConfig.waClientId);
  requestBody.set('scope', 'contacts_me');
  requestBody.set('redirect_uri', `${body.origin}/auth/authenticate`);

  const response = await fetch('https://oauth.wildapricot.org/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(ahpcConfig.waClientId + ":" + ahpcConfig.waNonAdminClientKey).toString('base64')}`
    },
    body: requestBody
  });

  if (!response.ok) {
    throw response;
  }

  const responseBody = await response.json();
  if (responseBody.Permissions[0].AccountId != accountId) {
    throw 'Authenticated with the wrong account!';
  }

  const contactInfoRes = await fetch(`${ahpcConfig.waNonAdminUrl}/accounts/${accountId}/contacts/me`, {
    headers: {
     'Authorization': `Bearer ${responseBody.access_token}` 
    }
  });

  if (!contactInfoRes.ok) {
    throw response;
  }

  const contactInfo = await contactInfoRes.json();

  const cookieStore = await cookies();
  const session = await getIronSession<AhpcSession>(cookieStore, {
    password: process.env.SESSION_PASSWORD!,
    cookieName: 'AHPC_SESSION'
  });
  session.token = responseBody.access_token;
  session.refreshToken = responseBody.refresh_token;
  session.accountId = responseBody.Permissions[0].AccountId;
  session.securityProfileId = responseBody.Permissions[0].SecurityProfileId;
  session.contactId = contactInfo.Id;
  session.email = contactInfo.email;
  await session.save();

  cookieStore.set('authenticated', 'true');

  return new Response("", { status: 200 });
}