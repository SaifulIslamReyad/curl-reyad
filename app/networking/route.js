import { plainTextResponse } from "../lib/text-route";

export async function GET() {
  return plainTextResponse([
    "ping 8.8.8.8",
    "nslookup example.com",
    "tracert example.com",
    "netstat -ano",
    "curl https://example.com",
  ]);
}
