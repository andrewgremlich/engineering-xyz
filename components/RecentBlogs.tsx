import { useBlogPosts } from "@/utils/use-query";

export const RecentBlogs = async () => {
	const blogPosts = await useBlogPosts();

	return (
		<aside>
			<h2>Recent Blogs</h2>
			<ul>
				{blogPosts.slice(0, 4).map((post) => (
					<li key={post.url}>
						<a target="_blank" rel="noreferrer" href={post.url}>
							{post.title}
						</a>
					</li>
				))}
			</ul>
		</aside>
	);
};
