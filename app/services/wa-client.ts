import createClient, { Middleware } from "openapi-fetch";
import type { paths } from "@/app/services/wa-client.d";
import { ahpcConfig } from "@/ahpc.config";

type AdminToken = {
  token: string | null,
  expiration: Date | null
};

let adminToken: AdminToken = {
  token: null,
  expiration: null
};

export class ApiError extends Error {

  public body: string;

  constructor(body: string, message: string) {
    super(message);
    this.body = body;
  }

  getJSON() {
    try {
      return JSON.parse(this.body);
    } catch {
      return undefined;
    }
  }
}

async function getAuthToken(): Promise<string> {
  if (adminToken.token && adminToken.expiration && adminToken.expiration > new Date()) {
    return adminToken.token;
  }

  const requestParams = new URLSearchParams();
  requestParams.set('grant_type', 'client_credentials');
  requestParams.set('client_id', ahpcConfig.waClientId);
  requestParams.set('scope', 'auto');

  const response = await fetch('https://oauth.wildapricot.org/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from("APIKEY:" + process.env.WA_ADMIN_APIKEY).toString('base64')}`
    },
    body: requestParams
  });

  if (!response.ok) {
    throw response;
  }

  const responseBody = await response.json();

  const exp = new Date();
  exp.setSeconds(exp.getSeconds() + responseBody.expires_in / 2);

  adminToken = {
    token: responseBody.access_token,
    expiration: exp
  };

  return responseBody.access_token;
}

const waMiddleware: Middleware = {

  async onRequest({ request }) {
    const token = await getAuthToken();
    request.headers.set("Authorization", `Bearer ${token}`);
    return request;
  },

  async onResponse({ response }) {
    if (response.status == 401) {
      adminToken = {
        token: null,
        expiration: null
      }
    } else if (!response.ok) {
      const errorMessage = `WA Client got a response with status code ${response.status}`;
      console.error(errorMessage);
      const responseText = await response.text();
      throw new ApiError(responseText, errorMessage);
    }
  }

};

const waclient = createClient<paths>({
  baseUrl: "https://api.wildapricot.org/v2.2",
});

waclient.use(waMiddleware);

export default waclient;