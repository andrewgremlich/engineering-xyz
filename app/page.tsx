import { RecentBlogs } from "@/components/RecentBlogs";
import { GravatarProfile } from "@/components/GravatarProfile";
import { GravatarAccounts } from "@/components/GravatarAccounts";
import { Availability } from "@/components/Availability";
import { Contact } from "@/components/Contact";
import { ghPinnedRepos } from "@/utils/gh-pinned-repos";
import { RecentGithubProjects } from "@/components/RecentGithubProjects";

export default async function Home() {
	return (
		<main className="h-full">
			<div className="md:flex md:justify-center md:items-center ">
				<div className="md:max-w-prose md:pr-10 overflow-y-scroll">
					<GravatarProfile />
					<Availability />
					<RecentGithubProjects />
				</div>

				<div>
					<GravatarAccounts />
					<RecentBlogs />
					<Contact />
				</div>
			</div>
		</main>
	);
}

// some fancy canvas animation, or animation of elements
// privacy policy and termos of service URL
