import { plainTextResponse } from "../../lib/text-route";

export async function GET() {
  return plainTextResponse([
    "ip a",
    "ip l",
    "ip r",
  ]);
}
