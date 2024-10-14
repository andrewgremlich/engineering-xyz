import { FiMail } from "react-icons/fi";

import { useGravatarProfile } from "@/utils/use-query";

export const Contact = async () => {
	const gravatar = await useGravatarProfile();

	return (
		<p className="mb-0 flex items-center">
			<FiMail className="inline mr-2" />
			<a
				href={`mailto:${gravatar.emails[0].value}?subject=Work Request&body=Hello Andrew`}
			>
				{gravatar.emails[0].value}
			</a>
		</p>
	);
};
