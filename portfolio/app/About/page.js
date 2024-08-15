'use client'

import Image from 'next/image'

export default function About() {

	function handleDownload(event) {
		event.preventDefault();

		// Path to file
		const filePath = '/resume.pdf';

		// Create a temporary link element
		const link = document.createElement('a');
		link.href = filePath;

		// Set the download attribute with the desired file name
		link.download = 'Resume_Allen_Sun.pdf';

		// Append the link to the document
		document.body.appendChild(link);

		// Trigger a click on the link to start the download
		link.click();

		// Remove the link from the document
		document.body.removeChild(link);
	}

	return (
		<div className='bg-black'>
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<Image src="/Hero.jpg" alt="Hero" fill={true} className='' />
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="relative text-4xl font-bold text-white sm:text-6xl">
							About Me
						</h1>
					</div>
				</div>
			</div>

			<div className="overflow-hidden py-24">
				<div className="mx-auto px-6 mx-8 md:mx-24">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
						<div className="lg:pr-8 lg:pt-4">
							<div className="lg:max-w-2xl">
								<p className="mt-2 text-3xl font-bold text-white sm:text-4xl">Allen Sun</p>
								<ul className='mt-6 text-lg leading-8 list-disc text-white mx-4'>
									<li>Junior at Texas A&M University</li>
									<li>Major in Computer Science, Minors in Business and Math</li>
								</ul>
								<p className="mt-6 text-xl font-bold text-white">Experience</p>
								<ul className='mt-2 text-lg leading-8 list-disc text-white mx-4'>
									<li>Software Engineer Intern (Applied Data Science Program), Apple Inc. (May 2024 - Present)</li>
									<li>Peer Teacher, Texas A&M College of Engineering (August 2023 - Present)</li>
									<li>Game Application Development Intern, Berkeley Pharma Tech (May 2023 - August 2023)</li>
								</ul>
								<p className="mt-6 text-xl font-bold text-white">Organizations</p>
								<ul className='mt-2 text-lg leading-8 list-disc text-white mx-4'>
									<li>Aggie Data Science Club (August 2022 - Present)</li>
									<ul className='ml-8 text-base leading-8 list-disc text-white'>
										<li>Projects Officer (April 2023 - Present)</li>
										<li>Project Manager, ADSC X General Motors (February 2024 - May 2024)</li>
										<li>Project Manager, Kaggle Walkthrough (September 2023 - December 2023)</li>
									</ul>
									<li>Aggie Coding Club (August 2022 - Present)</li>
									<ul className='ml-8 text-base leading-8 list-disc text-white'>
										<li>Project Manager, AggieFunds (September 2023 - November 2023)</li>
									</ul>
									<li>Texas A&M Computing Society (January 2023 - Present)</li>
									<li>Aggie Competitive Programming Club (August 2023 - Present)</li>
									<li>The 12th Can (September 2022 - Present)</li>
									<ul className='ml-8 text-base leading-8 list-disc text-white'>
										<li>External Relations Commitee (September 2022 - Present)</li>
									</ul>
								</ul>
								<p className="mt-6 text-xl font-bold text-white">Trading</p>
								<ul className='mt-2 text-lg leading-8 list-disc text-white mx-4'>
									<li>Original Blog Website: <a href='https://darkhorseofwallstreet.wordpress.com/'><u>Link</u></a></li>
								</ul>
								<p className="mt-6 text-xl font-bold text-white">Interests</p>
								<ul className='mt-2 text-lg leading-8 list-disc text-white mx-4'>
									<li>Finance</li>
									<li>Artificial Intelligence/Machine Learning</li>
									<li>Gaming</li>
									<li>Piano</li>
									<li>Singing</li>
								</ul>
								<p className="mt-6 text-xl font-bold text-white">Profiles</p>
								<ul className='mt-2 text-lg leading-8 list-disc text-white mx-4'>
									<li>LinkedIn: <a href='https://www.linkedin.com/in/allen-sun101/'><u>Link</u></a></li>
									<li>GitHub: <a href='https://github.com/AllenSun101'><u>Link</u></a></li>
									<li>Resume: <a href='' onClick={handleDownload}><u>Download</u></a></li>
								</ul>
							</div>
						</div>
						<div>
							<div className='flex items-center justify-center'>
								<Image
									src="/Headshot.png"
									alt="Allen Headshot"
									width="400"
									height="400"
									className='w-[32rem] rounded-xl sm:w-[32rem] '
								/>
							</div>

							<p className="mt-16 text-xl font-bold text-white">Contact</p>
							<ul className='mt-2 text-lg leading-8 list-disc text-white mx-4'>
								<li>Email: allensun21527@gmail.com </li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

