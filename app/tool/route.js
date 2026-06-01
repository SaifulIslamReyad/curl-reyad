import { plainTextResponse } from "../lib/text-route";

export async function GET() {
  return plainTextResponse([
    "minitools = disk partition",
    "windirstat = tree of dirs",
  ]);
}
