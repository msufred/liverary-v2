import { DollarSign, FileText, Home, Users } from "react-feather";

const iconStyle = "p-1 w-6 h-6";
const iconColor = "#64748b";

export const defaultSidebarItems = [
	{
		label: 'Dashboard',
		href: 'dashboard',
		icon: <Home color={iconColor} className={iconStyle}/>
	},
	{
		label: 'Accounts',
		href: 'accounts',
		icon: <Users color={iconColor} className={iconStyle}/>
	},
	{
		label: 'Billings',
		href: 'billings',
		icon: <FileText color={iconColor} className={iconStyle}/>
	},
	{
		label: 'Payments',
		href: 'payments',
		icon: <DollarSign color={iconColor} className={iconStyle}/>
	},
];