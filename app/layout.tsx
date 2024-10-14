import "./globals.css";
import "./bg-gradient.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Andrew Gremlich | Software Engineer",
	description: "The portfolio website of Andrew Gremlich, a software engineer.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en-US">
			<body className="gradient">{children}</body>
		</html>
	);
}
