import { randomUUID } from "node:crypto";

interface Portfolio {
	title: string;
	description: string;
	url: string;
	date: string;
	url_resource: string;
	package?: string;
}

export const Projects = async () => {
	const portfolioResponse = await fetch(
		"https://gremlich.me/portfolio/index.json",
	);
	const portfolio: Portfolio[] = await portfolioResponse.json();

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
