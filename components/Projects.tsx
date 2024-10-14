import { randomUUID } from "node:crypto";

import { useProjects } from "@/utils/use-query";

export const Projects = async () => {
	const portfolio = await useProjects();

	return (
		<aside className="mb-10">
			<h2>Projects</h2>
			{portfolio.map((repo) => (
				<div key={randomUUID()}>
					<p>
						<b>
							{repo.url_resource ? (
								<a
									href={repo.url_resource}
									target="_blank"
									rel="noopener noreferrer"
								>
									{repo.title}
								</a>
							) : (
								repo.title
							)}
						</b>
					</p>
					<p>{repo.description}</p>
				</div>
			))}
		</aside>
	);
};
