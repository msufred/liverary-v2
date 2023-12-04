import React from "react";
import { ChevronsLeft, ChevronsRight } from "react-feather";
import SidebarLink from "./SidebarLink";


export default function Sidebar({ collapsed, setCollapsed, sidebarLinks }) {
	const ifCollapsed = collapsed ? " justify-center" : " justify-end ";

	return (
		<div className="bg-gray-700 text-zinc-50 z-20">
			<div className="flex flex-col justify-between h-full">

				{/* Logo and Collapsed Button */}
				<div className={"flex items-center " + ifCollapsed}>
					<button className="grid place-content-center hover:bg-gray-900 w-10 h-10 rounded-full" onClick={setCollapsed}>
						{collapsed ? <ChevronsRight /> : <ChevronsLeft />}
					</button>
				</div>

				{/* Sidebar Links */}
				<nav className="flex-grow">
					<ul className="my-2 flex flex-col gap-2 items-stretch">
						{sidebarLinks.map((item) => {
							return (
								<SidebarLink
									active={route().current(item.href)}
									collapsed={collapsed}
									item={item}
								/>
							);
						})}
					</ul>
				</nav>
			</div>
		</div>
	);
};