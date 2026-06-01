import { plainTextResponse } from "../lib/text-route";

export async function GET() {
  return plainTextResponse(["dir", "cd", "ipconfig", "tasklist", "systeminfo"]);
}
