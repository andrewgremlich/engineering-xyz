import type { GravatarProfileResponse } from "@/types/gravatar";

export type BlogPost = {
  title: string;
  url: string;
  date: string;
};

export const useGravatarProfile = async () => {
  const gravatarRes = await fetch(
    "https://gravatar.com/34701068ab76f8eeee242f44faf226096e1e45fb6fb63528786b7ee5fb4792d0.json"
  );
  const {
    entry: [gravatar],
  }: GravatarProfileResponse = await gravatarRes.json();

  return gravatar;
};

export const useBlogPosts = async () => {
  const blogPosts = await fetch(
    "https://gremlich.me/software-engineering/index.json"
  );
  const blogPostsJson: BlogPost[] = await blogPosts.json();

  return blogPostsJson;
};
