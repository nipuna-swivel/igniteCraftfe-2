import { Bars3Icon } from "@heroicons/react/24/outline";
import React from "react";

const navigation = [
	{ name: "Product", href: "/home/products" },
	{ name: "Features", href: "#" },
	{ name: "Marketplace", href: "#" },
	{ name: "Home", href: "/" },
];
function HeaderHome() {
	function setMobileMenuOpen(arg0: boolean): void {
		throw new Error("Function not implemented.");
	}

	return (
		<>
			<header className="absolute inset-x-0 top-0 z-50">
				<nav
					className="flex items-center justify-between p-6 lg:px-8"
					aria-label="Global">
					<div className="flex lg:flex-1">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img
								className="h-8 w-auto"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
								alt=""
							/>
						</a>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(true)}>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-sm font-semibold leading-6 text-gray-900">
								{item.name}
							</a>
						))}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<a
							href="/login"
							className="text-sm font-semibold leading-6 text-gray-900">
							Log in <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</nav>
			</header>
		</>
	);
}

export default HeaderHome;