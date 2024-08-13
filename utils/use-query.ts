import type {
  GravatarProfile,
  GravatarProfileResponse,
} from "@/types/gravatar";

export type BlogPost = {
  title: string;
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
