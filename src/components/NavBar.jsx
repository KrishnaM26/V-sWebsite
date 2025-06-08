import {Link} from 'react-router';

const NavBar = () => {


	return(

		<div className = "flex flex-col justify-center items-center">
			<h1 className="transition-opacity ease-in duration-700 font-bebas text-[100px] leading-none mt-8">V's Vapes</h1>
			<p className = "font-alumni text-[39px] leading-none p-0" >Smoke · Vape · Wellness</p>
			<div className="mt-7 p-0 leading-none">
	             		<Link to="/" className="text-[18px] font-rokkitt text-black/50 leading-none hover:text-black">Contact</Link>
				<Link to="/products" className="ml-21 font-rokkitt leading-none text-[18px] text-black/50 hover:text-black">Products</Link>
			</div>
		</div>
	);
}


export default NavBar;
