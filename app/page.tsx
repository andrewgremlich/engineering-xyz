import type { Metadata } from "next";
import Image from "next/image";
import { FaGithub, FaStackOverflow } from "react-icons/fa";

import type {
	AccountShortName,
	GravatarProfileResponse,
} from "@/types/gravatar";

export type BlogPost = {
	title: string;
	url: string;
	date: string;
};

export const getIcon = (name: AccountShortName) => {
	switch (name) {
		case "github":
			return <FaGithub size={30} className="mr-3 mb-3" />;
		case "stackoverflow":
			return <FaStackOverflow size={30} className="mr-3" />;
		default:
			return null;
	}
};

export default async function Home() {
	const gravatarRes = await fetch(
		"https://gravatar.com/34701068ab76f8eeee242f44faf226096e1e45fb6fb63528786b7ee5fb4792d0.json",
	);
	const {
		entry: [gravatar],
	}: GravatarProfileResponse = await gravatarRes.json();
	const blogPosts = await fetch(
		"https://gremlich.me/software-engineering/index.json",
	);
	const blogPostsJson: BlogPost[] = await blogPosts.json();

	return (
		<main className="md:flex md:justify-center md:items-center h-full">
			<aside className="md:max-w-prose md:pr-10">
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
				<p>{gravatar.aboutMe}</p>
			</aside>

			<div>
				<aside>
					<h2>Email</h2>
					<p><a href={`mailto:${gravatar.emails[0].value}?subject=Work Request&body=Hello Andrew`}>{gravatar.emails[0].value}</a></p>
				</aside>

				<aside>
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
					</ul>
				</aside>

				<aside>
					<h2>Recent Blogs</h2>
					<ul>
						{blogPostsJson.slice(0, 4).map((post) => (
							<li key={post.url}>
								<a target="_blank" rel="noreferrer" href={post.url}>
									{post.title}
								</a>
							</li>
						))}
					</ul>
				</aside>
			</div>
		</main>
	);
}

// some fancy canvas animation, or animation of elements
// privacy policy and termos of service URL
