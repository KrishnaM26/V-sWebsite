import {Link, useLocation} from 'react-router';
import {useState} from 'react';

const NavBar = () => {


	return(

		<div className = "flex flex-col justify-center items-center">
			<h1 className="transition-opacity ease-in duration-700 font-bebas text-[100px] leading-none mt-8">V's Vapes</h1>
			<p className = "font-alumni text-[39px] leading-none p-0" >Smoke · Vape · Wellness</p>
			<div className="mt-8 p-0 leading-none">
	             		<Link to="/contact" className="m-0 font-rokkitt leading-none text-[18px] text-black/50 hover:text-black hover:underline">Contact</Link>
				<Link to="/products" className="ml-30 font-rokkitt leading-none text-[18px] text-black/50 hover:text-black hover:underline">Products</Link>
			</div>
		</div>
	);
}


export default NavBar;
