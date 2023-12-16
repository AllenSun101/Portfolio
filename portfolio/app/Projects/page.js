import Image from 'next/image'
import Link from 'next/link'

export default function Projects(){
    return(
        <div className='bg-black'>
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<Image src="/Hero.jpg" alt="Hero" fill={true} className='' />
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="relative text-4xl font-bold text-white sm:text-6xl">
							Projects
						</h1>
					</div>
				</div>
			</div>
			<div className="overflow-hidden py-24">
				<div className="mx-auto mx-4 md:mx-8">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
						<div>
							<div className='flex items-center justify-center'>
								<Image
									src="/ProfMatch.png"
									alt="ProfMatch"
									width="400"
									height="400"
									className='w-[32rem] rounded-xl md:w-[48rem] '
								/>
							</div>
						</div>
						<div className="lg:pr-8 mx-8">
							<div className="lg:max-w-2xl">
								<p className="mt-2 text-3xl font-bold text-white sm:text-4xl">ProfMatch</p>
								<p className="mt-2 text-lg font-bold text-white">Repository: <Link href="https://github.com/AllenSun101/ProfessorMatch"> <u>Link</u> </Link></p>
								<p className="mt-2 text-lg font-bold text-white">Website: <Link href="https://www.aggieprofmatch.com/"> <u>Link</u> </Link></p>
								<p className="mt-4 text-lg text-white">Aggie ProfMatch allows students to search for courses and provides information 
								on the professors that best fit individual preferences. The algorithm calculates a weighted professor score based on 
								user preference inputs, creating unique ratings suited to learning needs. </p>
								<p className="mt-4 text-lg text-white">Worked in team of 4, using Next.js, Flask, Axios, Pandas, Vercel, and Render. </p>
							</div>
						</div>
						<div>
							<div className='flex items-center justify-center'>
								<Image
									src="/AggieFundsGif.gif"
									alt="AggieFunds"
									width="400"
									height="400"
									className='w-[32rem] rounded-xl md:w-[48rem] '
								/>
							</div>
						</div>
						<div className="lg:pr-8 mx-8">
							<div className="lg:max-w-2xl">
								<p className="mt-2 text-3xl font-bold text-white sm:text-4xl">AggieFunds</p>
								<p className="mt-2 text-lg font-bold text-white">Repository: <Link href="https://github.com/AllenSun101/AggieFunds"> <u>Link</u> </Link></p>
								<p className="mt-4 text-lg text-white">AggieFunds provides a platform for Texas A&M students, organizations, and alumni to raise
                            	funds for their initiatives, helping campaigns gain traction. </p>
								<p className="mt-4 text-lg text-white">Led team of 6, using Next.js, Django, Axios, Stripe API, PostgreSQL, and Jira. Still in development. </p>
							</div>
						</div>
						<div>
							<div className='flex items-center justify-center'>
								<Image
									src="/KaggleWalkthrough.png"
									alt="Kaggle Walkthrough"
									width="400"
									height="400"
									className='w-[32rem] rounded-xl md:w-[48rem] '
								/>
							</div>
						</div>
						<div className="lg:pr-8 mx-8">
							<div className="lg:max-w-2xl">
								<p className="mt-2 text-3xl font-bold text-white sm:text-4xl">Kaggle Walkthrough</p>
								<p className="mt-2 text-lg font-bold text-white">Materials: <Link href="https://drive.google.com/drive/folders/1HQTOp7hOZgR9qbhOyZg4IKhrJJV1ct_F?usp=drive_link"> <u>Link</u> </Link></p>
								<p className="mt-4 text-lg text-white"> Co-wrote and co-led 5 Google Colab workshops for data science and 
								machine learning, including data preprocessing, visualizations, machine learning algorithms, 
								and model optimization and evaluation. Co-organized 3-week challenge using Microsoft Capstone 
								Dataset from Kaggle.</p>
								<p className="mt-4 text-lg text-white"> Used Numpy, Pandas, Matplotlib, Seaborn, Scikit-learn, and TensorFlow. </p>
							</div>
						</div>
						<div>
							<div className='flex items-center justify-center'>
								<Image
									src="/Blog.png"
									alt="Blog"
									width="400"
									height="400"
									className='w-[32rem] rounded-xl md:w-[48rem] '
								/>
							</div>
						</div>
						<div className="lg:pr-8 mx-8">
							<div className="lg:max-w-2xl">
								<p className="mt-2 text-3xl font-bold text-white sm:text-4xl">Stock Analytics</p>
								<p className="mt-2 text-lg font-bold text-white">Repository: <Link href="https://github.com/AllenSun101/StockAnalytics"> <u>Link</u> </Link></p>
								<p className="mt-4 text-lg text-white"> Personal blog project for trading, providing more 
								flexibility and content than WordPress. </p>
								<p className="mt-4 text-lg text-white"> Using Next.js, Express.js, Flask, TensorFlow, MySQL.
								Still in development. </p>
							</div>
						</div>
						<div>
							<div className='flex items-center justify-center'>
								<Image
									src="/Autograder.png"
									alt="Autograder"
									width="400"
									height="400"
									className='w-[32rem] rounded-xl md:w-[48rem] '
								/>
							</div>
						</div>
						<div className="lg:pr-8 mx-8">
							<div className="lg:max-w-2xl">
								<p className="mt-2 text-3xl font-bold text-white sm:text-4xl">CSCE 312 Autograder</p>
								<p className="mt-2 text-lg font-bold text-white">Repository: <Link href="https://github.com/AllenSun101/CSCE312Autograder"> <u>Link</u> </Link></p>
								<p className="mt-4 text-lg text-white"> Autograder for Computer Organization course assignments.
								Responsible for and completed the front-end. </p>
								<p className="mt-4 text-lg text-white"> Worked in team of 3, using Next.js, Axios, and Flask. </p>
							</div>
						</div>
						<div>
							<div className='flex items-center justify-center'>
								<Image
									src="/EHDashboard.png"
									alt="EHDashboard"
									width="400"
									height="400"
									className='w-[32rem] rounded-xl md:w-[48rem] '
								/>
							</div>
						</div>
						<div className="lg:pr-8 mx-8">
							<div className="lg:max-w-2xl">
								<p className="mt-2 text-3xl font-bold text-white sm:text-4xl">Engineering Honors Dashboard</p>
								<p className="mt-2 text-lg font-bold text-white">Repository: <Link href="https://github.com/TAMU-Aggie-Data-Science-Club/EngineeringHonors"> <u>Link</u> </Link></p>
								<p className="mt-4 text-lg text-white">Dashboard that visualizes analytics from Texas A&M 
								Engineering Honors activity participation and machine learning predictions.</p>
								<p className="mt-4 text-lg text-white">Worked in team, using Streamlit, Pandas, SQLite, and Scikit-learn.</p>
							</div>
						</div>
						<div>
							<div className='flex items-center justify-center'>
								<Image
									src="/BudgetGuard.png"
									alt="BudgetGuard"
									width="400"
									height="400"
									className='w-[32rem] rounded-xl md:w-[48rem] '
								/>
							</div>
						</div>
						<div className="lg:pr-8 mx-8">
							<div className="lg:max-w-2xl">
								<p className="mt-2 text-3xl font-bold text-white sm:text-4xl">BudgetGuard</p>
								<p className="mt-2 text-lg font-bold text-white">Repository: <Link href="https://github.com/aggie-coding-club/Broke"> <u>Link</u> </Link></p>
								<p className="mt-4 text-lg text-white">Website to identify the cheapest product options for groceries,
								gas, and dining. Responsible for web scraping.
								</p>
								<p className="mt-4 text-lg text-white">Worked on Backend team, using Selenium.
								</p>
							</div>
						</div>
						<div>
							<div className='flex items-center justify-center'>
								<Image
									src="/Axolotl.png"
									alt="Axolotl"
									width="400"
									height="400"
									className='w-[32rem] rounded-xl md:w-[48rem] '
								/>
							</div>
						</div>
						<div className="lg:pr-8 mx-8">
							<div className="lg:max-w-2xl">
								<p className="mt-2 text-3xl font-bold text-white sm:text-4xl">Raise an Axolotl Simulator</p>
								<p className="mt-2 text-lg font-bold text-white"> Game: <Link href="https://www.roblox.com/games/11848537680/Raise-an-Axolotl-Simulator"> <u>Link</u> </Link> </p>
								<p className="mt-4 text-lg text-white">Raise an Axolotl is an interactive battle-type Roblox game.</p>
								<p className="mt-4 text-lg text-white">Lead team of 3, using Lua, Blender, and Roblox Studio. Still in development.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}