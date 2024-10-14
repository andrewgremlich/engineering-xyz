import Image from "next/image";

import { useGravatarProfile } from "@/utils/use-query";
import { Contact } from "@/components/Contact";

export const GravatarProfile = async () => {
	const gravatar = await useGravatarProfile();

	return (
		<aside>
			<div className="md:flex md:items-center mb-10">
				<Image
					src="https://gravatar.com/avatar/34701068ab76f8eeee242f44faf226096e1e45fb6fb63528786b7ee5fb4792d0.jpg?s=400"
					alt="Profile picture of Andrew Gremlich"
					width={400}
					height={400}
					className="rounded-full border-8 p-1 border-emerald-500 dark:border-emerald-100 w-40 animate-slideIn mr-8 mb-10 md:mb-0"
				/>
				<div>
					<h1>{gravatar.displayName}</h1>
					<span>{gravatar.job_title}</span>
					<span className="mb-2">{gravatar.currentLocation}</span>
					<Contact />
				</div>
			</div>
			<p className="mb-10">{gravatar.aboutMe}</p>
		</aside>
	);
};
