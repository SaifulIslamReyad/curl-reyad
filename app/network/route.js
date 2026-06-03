import { plainTextResponse } from "../lib/text-route";

export async function GET() {
  return plainTextResponse([
    "ping 8.8.8.8",
    "nslookup example.com",
    "tracert example.com",
    "netstat -ano | grep <port>",
    "taskkill /PID <id> /F",
    "curl https://example.com",
  ]);
}
