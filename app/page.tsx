import Image from "next/image";

import { RecentBlogs } from "@/components/RecentBlogs";
import { GravatarProfile } from "@/components/GravatarProfile";
import { GravatarAccounts } from "@/components/GravatarAccounts";
// import { Availability } from "@/components/Availability";
import { Projects } from "@/components/Projects";
import { ProgrammingLanguages } from "@/components/ProgrammingLanguages";

export default async function Home() {
	return (
		<main>
			<div className="w-full relative h-40">
				<Image
					src="/wasatch_pano.jpeg"
					priority={true}
					alt="Wasatch Mountain Range"
					fill={true}
					className="object-cover relative z-0 animate-fadeIn"
					quality={70}
				/>
				<div className="w-full h-full relative bg-emerald-300/60 dark:bg-emerald-950/80 z-10" />
				<div className="w-full h-32 absolute bottom-0 bg-gradient-to-t from-emerald-900 to-transparent" />
			</div>

			<div className="max-w-prose w-full md:m-auto relative -top-28 z-20 p-16 bg-gradient-to-t from-emerald-100 dark:from-emerald-900 to-transparent rounded-b-2xl">
				<GravatarProfile />
				<ProgrammingLanguages />
				<GravatarAccounts />
				{/* <Availability /> */}

				<Projects />
				<RecentBlogs />
			</div>
		</main>
	);
}
3;
// some fancy canvas animation, or animation of elements
// privacy policy and termos of service URL
