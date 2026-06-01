import { plainTextResponse } from "../lib/text-route";

export async function GET() {
  return plainTextResponse(["curl ascii.live/rick"]);
}
