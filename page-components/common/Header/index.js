'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { headerNavLinks } from '@/utils/constants';
import ThemeSwitch from '../ThemeSwitch';
// import CommandPalette from './CommandPalette/CommandPalette';
// import MobileNav from './MobileNav';
// import ThemeSwitch from './ThemeSwitch';

export default function Header() {
	const pathName = usePathname();

	return (
		<div className="mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
			<header className="z-40 bg-transparent py-5 md:py-10">
				<div className="mx-auto flex max-w-5xl items-center justify-between">
					<div>
						<Link
							href="/"
							className={`horizontal-underline hidden text-3xl font-semibold sm:block ${
								pathName === '/' ? 'horizontal-underline-active' : null
							}`}
							aria-label="a."
						>
							a.
						</Link>
					</div>
					<div className="flex items-center space-x-3 text-base leading-5">
						<div className="hidden space-x-5 sm:flex">
							{headerNavLinks.map(({ title, href }) => {
								const active = pathName?.includes(href);
								return (
									<Link
										key={title}
										href={href}
										className={`horizontal-underline text-base ${
											active ? 'horizontal-underline-active' : null
										}`}
										aria-label={title}
									>
										<span className="font-semibold tracking-wide text-black antialiased dark:text-white">
											{title}
										</span>
									</Link>
								);
							})}
						</div>
						<div className="flex items-center">
							<ThemeSwitch />
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}
