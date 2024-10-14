import { randomUUID } from "node:crypto";
import {
	SiNextdotjs,
	SiTypescript,
	SiReact,
	SiRust,
	SiJavascript,
	SiAngular,
	SiCss3,
	SiNodedotjs,
	SiFirebase,
	SiPostgresql,
	SiPlaywright,
	SiExpress,
	SiDeno,
	SiRedux,
	SiRemix,
	SiNestjs,
	SiPrisma,
	SiAwsamplify,
	SiAwslambda,
	SiDocker,
	SiTailwindcss,
	SiAmazonwebservices,
	SiNx,
} from "react-icons/si";
import { useWindowSize } from "rooks";

export const ProgrammingLanguages = async () => {
	// const { innerWidth } = useWindowSize();

	return (
		<aside className="mb-10">
			<div className="flex flex-wrap justify-center">
				{[
					{ icon: SiTypescript, label: "TypeScript" },
					{ icon: SiJavascript, label: "JavaScript" },
					{ icon: SiReact, label: "React" },
					{ icon: SiRedux, label: "Redux" },
					{ icon: SiNextdotjs, label: "Next.js" },
					{ icon: SiRemix, label: "Remix" },
					{ icon: SiAngular, label: "Angular" },
					{ icon: SiCss3, label: "CSS3" },
					{ icon: SiTailwindcss, label: "Tailwind CSS" },
					{ icon: SiExpress, label: "Express" },
					{ icon: SiNestjs, label: "NestJS" },
					{ icon: SiDeno, label: "Deno" },
					{ icon: SiNodedotjs, label: "Node.js" },
					{ icon: SiNx, label: "Nx" },
					{ icon: SiRust, label: "Rust" },
					{ icon: SiAwsamplify, label: "Amplify" },
					{ icon: SiAwslambda, label: "Lambdas" },
					{ icon: SiFirebase, label: "Firebase" },
					{ icon: SiAmazonwebservices, label: "AWS" },
					{ icon: SiPostgresql, label: "PostgreSQL" },
					{ icon: SiPrisma, label: "Prisma" },
					{ icon: SiPlaywright, label: "Playwright" },
					{ icon: SiDocker, label: "Docker" },
				].map(({ icon: Icon, label }) => (
					<div key={randomUUID()} className="m-2 md:m-6">
						<figure
							className="flex flex-col items-center"
							aria-labelledby={`label-${label}`}
						>
							<Icon size={32} className="mb-2 w-5 md:w-10" aria-hidden="true" />
							<figcaption id={`label-${label}`} className="w-full text-sm text-center">
								{label}
							</figcaption>
						</figure>
					</div>
				))}
			</div>
		</aside>
	);
};
