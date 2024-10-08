import Image from "next/image";

import { RecentBlogs } from "@/components/RecentBlogs";
import { GravatarProfile } from "@/components/GravatarProfile";
import { GravatarAccounts } from "@/components/GravatarAccounts";
import { Availability } from "@/components/Availability";
import { RecentGithubProjects } from "@/components/RecentGithubProjects";

export default async function Home() {
	return (
		<main>
			<div className="w-full relative h-48 md:h-72">
				<Image
					src="/wasatch_pano.jpeg"
					alt="Wasatch Mountain Range"
					fill={true}
					className="object-cover relative z-0"
					quality={100}
				/>
				<div className="w-full h-full relative bg-blue-300/60 dark:bg-blue-950/80 z-10" />
				<div className="w-full h-32 absolute bottom-0 bg-gradient-to-t from-slate-900 to-transparent" />
			</div>

			<div className="max-w-prose w-full md:m-auto relative -top-28 z-20 p-16 bg-gradient-to-t from-slate-900 to-transparent">
				<GravatarProfile />
				<Availability />
				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<RecentGithubProjects />
					<GravatarAccounts />
					<RecentBlogs />
				</div>
			</div>
		</main>
	);
}

// some fancy canvas animation, or animation of elements
// privacy policy and termos of service URL
