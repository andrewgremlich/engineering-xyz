import { useGravatarProfile } from "@/utils/use-query";

export const Contact = async () => {
	const gravatar = await useGravatarProfile();

	return (
		<aside>
			<h2>Email</h2>
			<p>
				<a
					href={`mailto:${gravatar.emails[0].value}?subject=Work Request&body=Hello Andrew`}
				>
					{gravatar.emails[0].value}
				</a>
			</p>
		</aside>
	);
};
