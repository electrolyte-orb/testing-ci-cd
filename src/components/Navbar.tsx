import MenuAlt4Icon from '@heroicons/react/outline/MenuAlt4Icon';

export default function Navbar() {
	return (
		<div className="p-5 bg-white sticky top-0 flex items-center justify-between">
			<span>Navbar</span>
			<MenuAlt4Icon className="h-5 w-5" />
		</div>
	);
}
