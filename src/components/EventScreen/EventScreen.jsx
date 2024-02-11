import moment from 'moment';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import localStorageDelete from '../../modules/localStorage/localStorageDelete';
import localStorageWrite from '../../modules/localStorage/localStorageWrite';
import Button from '../Form/Button/Button';
import Modal from '../Modal/Modal';

export default function EventScreen({ changeTab }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	// --> ColorLogic
	const [mainColor] = useState(
		localStorage.getItem('inputRefMainColor') || '#0077ff'
	);
	const [bgColor] = useState(
		localStorage.getItem('inputRefBgColor') || '#18181b'
	);
	useEffect(() => {
		document.documentElement.style.setProperty('--main-edit-color', mainColor);
		document.documentElement.style.setProperty('--main-bg-color', bgColor);
	}, [bgColor, mainColor]);
	// -->

	// --> TimeLogic
	const date = localStorage.getItem('inputRefDate');
	const time = localStorage.getItem('inputRefTime');

	const selectedDateTime = moment(`${date} ${time}`);
	const currentTime = moment();
	const holidayDate = selectedDateTime.diff(currentTime);
	const [remainingTime, setRemainingTime] = useState(holidayDate);

	useEffect(() => {
		const intervalId = setInterval(() => {
			const currentTime = moment();
			const holidayDate = selectedDateTime.diff(currentTime);
			setRemainingTime(holidayDate);
		}, 1000);

		if (remainingTime <= 0) {
			clearInterval(intervalId);
		}
		console.log('render');
		return () => clearInterval(intervalId);
	}, [selectedDateTime, remainingTime]);

	const isEventEnd = remainingTime <= 0;

	function killEvent() {
		localStorageDelete('inputRefNameEvent');
		localStorageDelete('inputRefTextEvent');
		localStorageDelete('inputRefMainColor');
		localStorageDelete('inputRefBgColor');
		localStorageDelete('inputRefDate');
		localStorageDelete('inputRefTime');
		localStorageWrite('screen', 'main');
		changeTab('main');
		setIsModalOpen(false);
	}

	// -->

	return (
		<section className='mx-auto container flex flex-col justify-center items-center h-screen'>
			<h1 className='text-4xl main-text-color mb-10'>
				{localStorage.getItem('inputRefNameEvent')}
			</h1>
			{!isEventEnd && (
				<div className='flex flex-col gap-y-3 mb-7 items-center sm:flex-row sm:max-w-[900px] sm:gap-x-6'>
					<div className='text-3xl py-3 px-1 main-text-color'>
						<p>{Math.floor(moment.duration(holidayDate).asDays())} Days</p>
					</div>
					<div className='text-3xl py-3 px-1 main-text-color'>
						<p>{moment.duration(holidayDate).hours()} Hours</p>
					</div>
					<div className='text-3xl py-3 px-1 main-text-color'>
						<p>{moment.duration(holidayDate).minutes()} Minutes</p>
					</div>
					<div className='text-3xl py-3 px-1 main-text-color'>
						<p>{moment.duration(holidayDate).seconds()} Seconds</p>
					</div>
				</div>
			)}
			{isEventEnd && (
				<p className='text-2xl main-text-color mb-7'>
					{localStorage.getItem('inputRefTextEvent')}
				</p>
			)}

			<Button click={() => setIsModalOpen(true)}>Kill event</Button>

			<Modal open={isModalOpen}>
				<div className='flex flex-col items-center gap-y-4'>
					<h3 className='text-xl sm:text-2xl main-text-color font-bold'>
						Finish the event?
					</h3>
					<p className='text-lg text-white'>
						Do you really want to end the event?
					</p>
					<div className='flex flex-col gap-y-4 sm:flex-row sm:gap-x-4'>
						<Button click={killEvent}>Yes</Button>
						<Button click={() => setIsModalOpen(false)}>No</Button>
					</div>
				</div>
			</Modal>
		</section>
	);
}

EventScreen.propTypes = {
	changeTab: PropTypes.func.isRequired, // изменено с PropTypes.any на PropTypes.func.isRequired
};
