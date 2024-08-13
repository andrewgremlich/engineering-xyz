import Image from "next/image";

import { useGravatarProfile } from "@/utils/use-query";

export const GravatarProfile = async () => {
	const gravatar = await useGravatarProfile();

	return (
		<aside>
			<Image
				src="https://gravatar.com/avatar/34701068ab76f8eeee242f44faf226096e1e45fb6fb63528786b7ee5fb4792d0.jpg?s=400"
				alt="Profile picture of Andrew Gremlich"
				width={400}
				height={400}
				className="rounded-full w-40 animate-slideIn animate-fadeIn"
			/>
			<h1>{gravatar.displayName}</h1>
			<span>{gravatar.job_title}</span>
			<span className="mb-4">{gravatar.currentLocation}</span>
			<p className="mb-10">{gravatar.aboutMe}</p>
		</aside>
	);
};
