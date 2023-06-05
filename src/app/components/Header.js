'use client';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
	const [dark, setDark] = useState(false);

	// function toggleDark() {
	// 	let html = document.getElementsByTagName('HTML')[0];
	// 	html.classList.toggle('dark');
	// 	setDark(!dark);
	// }

	return (
		<header className='flex justify-between items-center px-12 fixed w-full z-10
		py-1 h-14 bg-secondary dark:bg-darkTertiary'>
			<Link href='/' className='flex items-center space-x-2'>
				<h1 className='dark:text-darkText text-tertiary
				text-4xl leading-none tracking-tight font-script'>CB</h1>
			</Link>
			<nav className='flex space-x-10 text-lg items-center'>
				<a href='/#about' className="hover:underline hidden lg:inline">
					Who Are We
				</a>
				<a
					href='/#menu'
					className="hover:underline hidden lg:inline">
					Menu
				</a>
				<button
					className='w-30 z-10 hover:scale-105 hover:bg-primary rounded-lg
					bg-tertiary text-darkText	transition delay-100 p-2 border border-secondary'>
					<a href='/#contact'>Get in Touch</a>
				</button>
				{/* {dark ? <button className='text-3xl' aria-label='Dark Mode Moon'
					onClick={() => toggleDark()}>
					<BiMoon className='hover:text-primary transition-colors delay-100' />
				</button> :
					<button className='text-3xl' aria-label='Light Mode Sun'
						onClick={() => toggleDark()}>
						<BiSun className='hover:text-primary transition-colors delay-100' />
					</button>} */}


			</nav>
		</header >
	);
};

export default Header;


