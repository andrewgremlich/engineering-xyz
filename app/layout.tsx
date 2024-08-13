import "./globals.css";
import "./bg-gradient.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Andrew Gremlich | Software Engineer",
	description: "Software Engineer consultancy services.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="gradient">{children}</body>
		</html>
	);
}
