import { plainTextResponse } from "../lib/text-route";

export async function GET() {
  return plainTextResponse([
    "git reset --soft HEAD~N : staging area, working area both unchanged",
    "git reset --mixed HEAD~N : working area unchanged",
    "git reset --hard HEAD~N : all gone",
    "_______________________________________________________________________________",
    "git revert <commit-id> : a<-b<-c<-a history keeping",
    "git reflog : shows evewhere head pointed recently",
    "_______________________________________________________________________________",
    "git clone --filter=blob:none --no-checkout --branch reyad --single-branch <url>",
    "git sparse-checkout init --cone",
    "git sparse-checkout set folder1 folder2",
    "git checkout",
    "_______________________________________________________________________________",
    "git fetch origin + git rebase origin/main = git pull --rebase origin main ",
    "_______________________________________________________________________________",

    "git fetch origin",
    "git reset --hard origin/main",

  ])
}
