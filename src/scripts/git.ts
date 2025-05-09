import { execSync } from "child_process";

export interface CommitterInfo {
  name: string;
  href: string;
}

export interface CommitInfo {
  hash: string;
  committer: CommitterInfo;
}

const token = process.env.GITHUB_TOKEN;

const options: RequestInit = token
  ? {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "learnpaperdev/author",
        Authorization: `Bearer ${token}`,
      },
    }
  : {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "learnpaperdev/author",
      },
    };

export const REPO = "Strokkur424/learnpaperdev";
const cache = new Map<string, CommitterInfo>();

export const getCommitInfo = async (
  filePath: string
): Promise<CommitInfo | null> => {
  let email: string, hash: string;
  try {
    email = execSync(
      `git log -1 --pretty="format:%ae" -- "${filePath}"`
    ).toString();
    hash = execSync(
      `git log -1 --pretty="format:%H" -- "${filePath}"`
    ).toString();
  } catch (e) {
    return null;
  }

  const cached = cache.get(email);
  if (cached) {
    return { hash, committer: cached };
  }

  let name: string;
  try {
    name = execSync(
      `git log -1 --pretty="format:%an" -- "${filePath}"`
    ).toString();
  } catch (e) {
    return null;
  }

  const info: CommitterInfo = { name, href: `mailto:${email}` };

  const res = await fetch(
    `https://api.github.com/repos/${REPO}/commits/${hash}`,
    options
  );
  if (res.ok) {
    const commit = await res.json();
    info.href = commit.author.html_url;
  }

  cache.set(email, info);
  return { hash, committer: info };
};
