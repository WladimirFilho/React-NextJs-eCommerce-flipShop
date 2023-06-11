'use client'

import {FaShoppingCart, FaUser} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import {useState} from "react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const menuHandler = () => {
		setIsOpen(!isOpen)
	}

	return (
		<header className='flex justify-between p-8 bg-zinc-900 text-white relative'>
			<h2 className='text-xl font-bold'>FlipShop</h2>

			<button
				className='lg:hidden'
				onClick={menuHandler}>
				<GiHamburgerMenu size={30}/>
			</button>

			<nav
				className={`${isOpen ? '' : 'hidden'} absolute top-16 p-8 bg-zinc-900 w-full ml-[-32px] flex justify-start lg:hidden`}>
				<ul className='flex flex-col gap-4 '>
					<li className='flex gap-2 items-center'><FaShoppingCart/>Cart</li>
					<li className='flex gap-2 items-center'><FaUser/>Sign In</li>
				</ul>
			</nav>
			<nav className='hidden lg:block '>
				<ul className='flex gap-4'>
					<li className='flex gap-2 items-center'><FaShoppingCart/>Cart</li>
					<li className='flex gap-2 items-center'><FaUser/>Sign In</li>
				</ul>
			</nav>

		</header>
	)
}

export default Header;
