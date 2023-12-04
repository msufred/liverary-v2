import { Link } from "@inertiajs/react";

export default function SidebarLink({ active = false, className = '', collapsed, item}) {

	const ifCollapsed = collapsed ? "rounded-full p-2 mx-3 w-10 h-10 " : "rounded-md p-2 mx-3 gap-4 ";
	const ifActive = active ? "bg-gray-900" : "transparent";

	return (
		<li className={"flex text-gray-300 hover:bg-gray-900 transition-colors duration-100 " + ifCollapsed + ifActive + className}>
			<Link href={'/' + item.href} className="flex gap-2">
				{item.icon}<span>{!collapsed && item.label}</span>
			</Link>
		</li>
	);

}