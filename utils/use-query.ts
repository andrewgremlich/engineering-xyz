import type {
  GravatarProfile,
  GravatarProfileResponse,
} from "@/types/gravatar";

export type BlogPost = {
  title: string;
  description: string;
  url: string;
  date: string;
};

const cache = new Map();

export const useGravatarProfile = async (): Promise<GravatarProfile> => {
  if (cache.has("gravatar")) {
    return cache.get("gravatar");
  }

  const gravatarRes = await fetch(
    "https://gravatar.com/34701068ab76f8eeee242f44faf226096e1e45fb6fb63528786b7ee5fb4792d0.json"
  );
  const {
    entry: [gravatar],
  }: GravatarProfileResponse = await gravatarRes.json();

  cache.set("gravatar", gravatar);

  return gravatar;
};

export const useBlogPosts = async (): Promise<BlogPost[]> => {
  if (cache.has("blogPosts")) {
    return cache.get("blogPosts");
  }

  const blogPosts = await fetch(
    "https://gremlich.me/software-engineering/index.json"
  );
  const blogPostsJson: BlogPost[] = await blogPosts.json();

  cache.set("blogPosts", blogPostsJson);

  return blogPostsJson;
};

interface Portfolio {
  title: string;
  description: string;
  url: string;
  date: string;
  url_resource: string;
  package?: string;
}

export const useProjects = async (): Promise<Portfolio[]> => {
  if (cache.has("projects")) {
    return cache.get("projects");
  }

  const portfolioResponse = await fetch(
    "https://gremlich.me/portfolio/index.json"
  );
  const portfolio: Portfolio[] = await portfolioResponse.json();

  cache.set("projects", portfolio);

  return portfolio;
};
