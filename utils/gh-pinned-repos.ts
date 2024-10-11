import { load } from "cheerio";

type PinnedRepo = { repo: string; url: string; description: string };

const aimer = async (url: string) => {
  const html = await fetch(url);
  const text = await html.text();

  return load(text);
};

export async function ghPinnedRepos(username: string): Promise<PinnedRepo[]> {
  const $ = await aimer(`https://github.com/${username}`);
  const pinnedItems = $(".js-pinned-items-reorder-list li");

  const pinnedRepos: PinnedRepo[] = [];

  pinnedItems.each((_, el) => {
    const repo = $(el).find("a.Link").text();
    const url = $(el).find("a.Link").attr("href");
    const description = $(el).find("p.pinned-item-desc").text().trim();

    pinnedRepos.push({
      repo: repo.trim(),
      url: `https://github.com${url?.trim() || ""}`,
      description,
    });
  });

  return pinnedRepos;
}
