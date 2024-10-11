import { Fragment } from "react";

import { useBlogPosts } from "@/utils/use-query";

export const RecentBlogs = async () => {
	const blogPosts = await useBlogPosts();

	return (
		<aside className="mb-10">
			<h2>Recent Blogs</h2>
			{blogPosts.slice(0, 4).map((post) => (
				<div key={post.url}>
					<p>
						<b>
							<a target="_blank" rel="noreferrer" href={post.url}>
								{post.title}
							</a>
						</b>
					</p>
					<p>{post.description}</p>
				</div>
			))}
		</aside>
	);
};
