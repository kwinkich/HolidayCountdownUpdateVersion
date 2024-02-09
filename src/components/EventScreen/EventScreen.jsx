export default function EventScreen() {
	return (
		<section className='mx-auto container flex flex-col justify-center items-center h-screen'>
			<h1 className='text-4xl main-text-color'>
				{localStorage.getItem('inputRefNameEvent')}
			</h1>
			<p className='text-gray-400 text-lg'>
				Create an event and start reporting
				<span className='main-text-color'> with us!</span>
			</p>
		</section>
	);
}
