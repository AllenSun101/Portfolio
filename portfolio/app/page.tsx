import Image from 'next/image'

export default function Home() {
	return (
		<div className='bg-black'>
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<Image src="/Hero.jpg" alt="Hero" fill={true} className='' />
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="relative text-4xl font-bold text-white sm:text-6xl">
							Hi there! I&apos;m Allen.
						</h1>
						<p className="relative mt-6 text-xl leading-8 text-white">
							I&apos;m a developer, student, trader, and innovator. Let&apos;s connect!
						</p>
					</div>
				</div>
			</div>
			<div className='py-24 mx-8 text-lg text-white sm:mx-36'>
				<p className='mb-6 text-left'>
					With 5+ years of programming experience in various languages and technologies, I bring
					deep knowledge and an innovation-focused mindset to all organizations and opportunities. 
				</p>
				<p className='text-left'>
					I&apos;m a lifelong learner who focuses on personal growth and development. 
					I value hard work, efficiency, and pragmatism.
					Please do not hesitate to reach out. I&apos;d love to connect! 
				</p>
			</div>
		</div>
	)
}
