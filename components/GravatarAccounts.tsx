import { FaGithub, FaStackOverflow, FaLinkedin } from "react-icons/fa";

import type { AccountShortName } from "@/types/gravatar";
import { useGravatarProfile } from "@/utils/use-query";

const getIcon = (name: AccountShortName) => {
	switch (name) {
		case "github":
			return <FaGithub size={18} className="mr-3" />;
		case "stackoverflow":
			return <FaStackOverflow size={18} className="mr-3" />;
		default:
			return null;
	}
};

const AdditionalAccounts = () => {
	return (
		<li>
			<a
				className="flex align-middle"
				target="_blank"
				rel="noreferrer"
				href="https://www.linkedin.com/in/agremlich/"
			>
				<FaLinkedin size={18} className="mr-3" /> LinkedIn
			</a>
		</li>
	);
};

export const GravatarAccounts = async () => {
	const gravatar = await useGravatarProfile();

	return (
		<aside className="mb-10">
			<ul className="flex">
				{gravatar.accounts.map((account) => (
					<li key={account.url} className="mr-6">
						<a
							className="flex align-middle"
							target="_blank"
							rel="noreferrer"
							href={account.url}
						>
							{getIcon(account.shortname)} {account.name}
						</a>
					</li>
				))}
				<AdditionalAccounts />
			</ul>
		</aside>
	);
};
