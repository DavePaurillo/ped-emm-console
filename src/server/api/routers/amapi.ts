// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { google } from "googleapis";
import { env } from "process";

const CLOUD_PROJECT_ID = env.AMAPI_SA_PROJECT_ID;
const credentials = {
  client_email: env.AMAPI_SA_CLIENT_EMAIL,
  private_key: env.AMAPI_SA_PK?.split(String.raw`\n`).join("\n"),
};

const androidmanagement = () => {
  // This will initialize amapi
  const auth = new google.auth.GoogleAuth({
    projectId: CLOUD_PROJECT_ID,
    credentials,
    scopes: ["https://www.googleapis.com/auth/androidmanagement"],
  });

  const amapi = google.androidmanagement({
    version: "v1",
    auth: auth,
  });

  return amapi;
};

export const amapiRouter = createTRPCRouter({
  enterprises_list: publicProcedure.query(() => {
    const getEnterpriseList = androidmanagement().enterprises.list({
      projectId: CLOUD_PROJECT_ID,
    });
    return getEnterpriseList;
  }),
});
