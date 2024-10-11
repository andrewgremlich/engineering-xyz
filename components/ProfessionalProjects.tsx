const data = [
	{
		title: "Reclaim",
		description:
			"Reclaim is a privacy-focused application to aid users to reclaim their data.",
		url: "https://reclaim.mysudo.com/",
	},
	{
		title: "Jane.com",
		description:
			"Jane.com is a boutique marketplace featuring the latest fashion trends. Jane.com did close momentarily and is set to reopen.",
		url: "https://jane.com/",
	},
	{
		title: "FedEx Services Warehouse Management",
		description:
			"FedEx Services Warehouse Management is a project to manage the warehouse operations of FedEx.",
		url: undefined,
	},
	{
		title: "Church History Biographical Database",
		description:
			"The Church History Biographical Database is a project to document the lives of early members of the Church of Jesus Christ of Latter-day Saints.",
		url: "https://history.churchofjesuschrist.org/chd/landing?lang=eng",
	},
];

export const ProfessionalProjects = async () => {
	return (
		<aside className="mb-10">
			<h2>Professional Projects</h2>

			{data.map((project) => (
				<div key={project.title}>
					<p>
						<b>
							{project.url ? (
								<a href={project.url}>{project.title}</a>
							) : (
								project.title
							)}
						</b>
					</p>
					<p>{project.description}</p>
				</div>
			))}
		</aside>
	);
};
