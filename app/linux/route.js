import { plainTextResponse } from "../lib/text-route";

export async function GET() {
  return plainTextResponse(["ls -la", "pwd", "df -h", "ps aux", "top"]);
}
