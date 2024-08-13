import { load } from "cheerio";

type PinnedRepo = { repo: string; url: string };

const aimer = async (url: string) => {
  const html = await fetch(url);
  const text = await html.text();

  return load(text);
};

export async function ghPinnedRepos(username: string): Promise<PinnedRepo[]> {
  const $ = await aimer(`https://github.com/${username}`);
  const pinnedItems = $(".js-pinned-items-reorder-list li a.Link");

  const pinnedRepos: PinnedRepo[] = [];

  pinnedItems.each((_, el) => {
    const repo = $(el).text();
    const url = $(el).attr("href");

    pinnedRepos.push({ repo: repo.trim(), url: `https://github.com${url?.trim() || ""}` });
  });

  return pinnedRepos;
}
