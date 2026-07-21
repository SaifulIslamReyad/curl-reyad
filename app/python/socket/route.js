import { plainTextResponse } from "../../lib/text-route";

export async function GET() {
  return plainTextResponse([
    "import socket",
    '[google dns server("8.8.8.8", 53), clouldflare dns server ("1.1.1.1", 53), google web server http("www.google.com", 80)]',
    'socket.create_connection((host, port), timeout=3)',
  ]);
}
