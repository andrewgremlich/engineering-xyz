import { randomUUID } from "node:crypto";

import { ghPinnedRepos } from "@/utils/gh-pinned-repos";

export const RecentGithubProjects = async () => {
	const pinnedRepos = await ghPinnedRepos("andrewgremlich");

	return (
		<aside className="mb-10">
			<h2>Github Projects</h2>
			{pinnedRepos.map((repo) => (
				<div key={randomUUID()}>
					<p>
						<a href={repo.url} target="_blank" rel="noopener noreferrer">
							{repo.repo}
						</a>
					</p>
				</div>
			))}
		</aside>
	);
};
