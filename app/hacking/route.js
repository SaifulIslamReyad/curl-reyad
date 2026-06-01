import { plainTextResponse } from "../lib/text-route";

export async function GET() {
  return plainTextResponse([
    "whoami",
    "hostname",
    "ipconfig /all",
    "netstat -ano",
    "systeminfo",
  ]);
}
