"use client";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="h-full bg-gray-100">
			<body className="h-full">{children}</body>
		</html>
	);
}
