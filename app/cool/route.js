import { plainTextResponse } from "../lib/text-route";

export async function GET() {
  return plainTextResponse([
    "curl ascii.live/rick",
    "curl ascii.live/forrest",
    "curl ascii.live/donut",
    "curl ascii.live/nyan",
    "curl parrot.live",
    "windows: dir/s"

    
  ]);
}
