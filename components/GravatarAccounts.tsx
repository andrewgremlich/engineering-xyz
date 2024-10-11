import { FaGithub, FaStackOverflow, FaLinkedin } from "react-icons/fa";

import type { AccountShortName } from "@/types/gravatar";
import { useGravatarProfile } from "@/utils/use-query";

const getIcon = (name: AccountShortName) => {
	switch (name) {
		case "github":
			return <FaGithub size={30} className="mr-3 mb-3" />;
		case "stackoverflow":
			return <FaStackOverflow size={30} className="mr-3 mb-3" />;
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
				href="https://www.linkedin.com/in/andrewgremlich/"
			>
				<FaLinkedin size={30} className="mr-3 mb-3" /> LinkedIn
			</a>
		</li>
	);
};

export const GravatarAccounts = async () => {
	const gravatar = await useGravatarProfile();

	return (
		<aside className="mb-10">
			<h2>Accounts</h2>
			<ul>
				{gravatar.accounts.map((account) => (
					<li key={account.url}>
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
