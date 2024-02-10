import moment from 'moment';
import { useEffect, useState } from 'react';

export default function EventScreen() {
	const date = localStorage.getItem('inputRefDate');
	const time = localStorage.getItem('inputRefTime');
	const selectedDateTime = moment(`${date} ${time}`);
	const [remainingTime, setRemainingTime] = useState(
		selectedDateTime.diff(moment())
	);

	useEffect(() => {
		const intervalId = setInterval(() => {
			const currentTime = moment();
			const holidayDate = selectedDateTime.diff(currentTime);
			setRemainingTime(holidayDate);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [selectedDateTime]);

	const isEventEnd = remainingTime <= 0;

	return (
		<section className='mx-auto container flex flex-col justify-center items-center h-screen'>
			<h1 className='text-4xl main-text-color mb-10'>
				{localStorage.getItem('inputRefNameEvent')}
			</h1>
			{!isEventEnd && (
				<div className='flex flex-row max-w-[900px] gap-x-6'>
					<div className='text-3xl py-3 px-1 main-text-color'>
						<p>{moment.duration(remainingTime).days()} Days</p>
					</div>
					<div className='text-3xl py-3 px-1 main-text-color'>
						<p>{moment.duration(remainingTime).hours()} Hours</p>
					</div>
					<div className='text-3xl py-3 px-1 main-text-color'>
						<p>{moment.duration(remainingTime).minutes()} Minutes</p>
					</div>
					<div className='text-3xl py-3 px-1 main-text-color'>
						<p>{moment.duration(remainingTime).seconds()} Seconds</p>
					</div>
				</div>
			)}
			{isEventEnd && (
				<p className='text-2xl main-text-color'>
					{localStorage.getItem('inputRefTextEvent')}
				</p>
			)}
		</section>
	);
}
