import { plainTextResponse } from "../../lib/text-route";

export async function GET() {
  return plainTextResponse([
    "python -m http-server 3001 ",
  ]);
}
