import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type AhpcSession = {
  token: string;
  refreshToken: string;
  accountId: number;
  securityProfileId: number;
  contactId: number;
  email: string;
};

export async function getSession(): Promise<AhpcSession> {
  const cookieStore = await cookies();
  const session = await getIronSession<AhpcSession>(cookieStore, {
    password: process.env.SESSION_PASSWORD!,
    cookieName: 'AHPC_SESSION'
  });
  if (!session.contactId) {
    redirect('/login',);
  }
  return session;
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get('authenticated')?.value === 'true';
}