import Image from 'next/image'

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
				<div className="mx-auto px-6 mx-8 md:mx-24">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
						<div>
							<div className='flex items-center justify-center'>
								<Image
									src="/Headshot.png"
									alt="ProfMatch"
									width="400"
									height="400"
									className='w-[32rem] rounded-xl sm:w-[32rem] '
								/>
							</div>
						</div>
						<div className="lg:pr-8 lg:pt-4">
							<div className="lg:max-w-2xl">
								<p className="mt-2 text-3xl font-bold text-white sm:text-4xl">ProfMatch</p>
								<p className="mt-2 text-lg font-bold text-white">Repository: </p>
								<p className="mt-2 text-lg text-white">Aggie ProfMatch aims to ... </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}