import NavBar from '../components/NavBar.jsx';


const ContactPage = () => {


	return(

		<div className="m-0 p-0"> 

 			<NavBar />

			<div className="flex flex-row justify-center items-center mt-10 w-auto h-auto">

				<div className="flex flex-col basis-full items-end-safe content mt-10 mb-10 pr-25 ">
					<span>
						<h1 className="text-[30px] font-bebas">Call: </h1> <br/>
					<a href="tel:+6782626802"><p className="text-[24px] text-black/70 underline font-rokkitt">(678) 262-6802</p></a>
						<br/><h1 className="text-[30px] font-bebas">Hours: </h1> <br/>
						<p className="text-[24px] text-black/70 font-rokkitt">Sunday 2:00 - 10:00 PM</p>
						<p className="text-[24px] text-black/70 font-rokkitt">Monday 12:00 - 10:00 PM</p>
						<p className="text-[24px] text-black/70 font-rokkitt">Tuesday 12:00 - 10:00 PM</p>
						<p className="text-[24px] text-black/70 font-rokkitt">Wednesday 12:00 - 10:00 PM</p>   
						<p className="text-[24px] text-black/70 font-rokkitt">Thursday 12:00 - 10:00 PM</p>
						<p className="text-[24px] text-black/70 font-rokkitt">Friday 12:00 - 10:00 PM</p>
						<p className="text-[24px] text-black/70 font-rokkitt">Saturday 12:00 - 10:00 PM</p>
					</span>
				</div>

				<div className="flex flex-col basis-full items-right border-l-3 pl-25 mt-10 mb-10 ">
					<div className = 'mt-5' >
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.5029318507277!2d-84.50983982705323!3d33.95236112106435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f513cf7ab15bad%3A0x9b7bac17848463cd!2sV%E2%80%99s%20Vapes%20Smoke%20%26%20Vape%20Shop%20-%20Marietta!5e0!3m2!1sen!2sus!4v1749350798112!5m2!1sen!2sus" className = "w-[400px] h-[380px] hover:shadow-2xl" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
					</div>
					<h1 className="text-[30px] mt-4 font-bebas">Address: </h1><br/>
					<a href="https://maps.app.goo.gl/KKVHLCuJAEGMa89x6" target="_blank"> 
						<span className="text-[24px] text-black/70 underline font-rokkitt ">
							1477 Roswell Rd suite 350, <br/>
							Marietta, GA 30062
						</span>
					</a>
				</div>
			</div>
		</div>

	);





}

export default ContactPage;
