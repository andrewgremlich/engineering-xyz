import { RecentBlogs } from "@/components/RecentBlogs";
import { GravatarProfile } from "@/components/GravatarProfile";
import { GravatarAccounts } from "@/components/GravatarAccounts";
import { Availability } from "@/components/Availability";
import { Contact } from "@/components/Contact";

export default async function Home() {
	return (
		<main className="h-full">
			<div className="md:flex md:justify-center md:items-center ">
				<div className="md:max-w-prose md:pr-10">
					<GravatarProfile />
					<Availability />
					{/* Recent Github projects */}
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
