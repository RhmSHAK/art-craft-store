import ArtCrafts from "./ArtCrafts";
import HomeSix from "./HomeSix";
import Slider from "./Slider";
import { useTypewriter } from "react-simple-typewriter";


const Home = () => {

    const [typeEffect] = useTypewriter({
        words: ["items Section"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 2000,
    })

    return (
        <div>
            <Slider></Slider>

            <div className="mt-16">
            <h1 className=" text-4xl text-center font-bold">Craft <span className="text-rose-400">{typeEffect}</span>  </h1>
            </div>

            <HomeSix></HomeSix>

            <div className="mt-16">
            <h1 className=" text-4xl text-center font-bold">Art & Craft Categories section  </h1>
            </div>
                
				<ArtCrafts></ArtCrafts>

                {/* ------------------ */}
                <section className="py-6 mt-20 bg-purple-200 dark:text-gray-900">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>456 Mirpur, Dhaka</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>+77 81 234 5678</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>contact@art-craft.com</span>
				</p>
			</div>
		</div>
		<form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
			</label>
			<button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Submit</button>
		</form>
	</div>
</section>


            {/* ------------------------- */}
            <section className=" mt-20 bg-orange-200 dark:text-gray-800">
	<div className="container flex flex-col items-center p-4 mx-auto md:p-8">
		<h1 className="text-3xl font-bold leading-none text-center sm:text-4xl">Help Center</h1>
		<div className="relative mt-6 mb-12">
			<span className="absolute inset-y-0 flex items-center pl-2 mx-auto">
				<button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
					<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
						<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
					</svg>
				</button>
			</span>
			<input type="search" name="Search" placeholder="Search..." className="w-full py-3 pl-12 text-sm rounded-full sm:w-96 focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50" />
		</div>
		<div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
			<div className="flex flex-col w-full divide-y dark:divide-gray-300">
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Billing</a>
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Support</a>
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Account</a>
			</div>
			<div className="flex flex-col w-full divide-y dark:divide-gray-300">
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Features</a>
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Contact us</a>
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">My orders</a>
			</div>
			<div className="hidden w-full divide-y sm:flex-col sm:flex dark:divide-gray-300">
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Enterprise</a>
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Privacy</a>
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Developers</a>
			</div>
		</div>
	</div>
</section>

        </div>
    );
};

export default Home;