import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import localStorageGet from '../../modules/localStorage/localStorageGet.js';
import localStorageWrite from '../../modules/localStorage/localStorageWrite.js';
import Button from '../Form/Button/Button.jsx';
import Form from '../Form/Form.jsx';

export default function MainScreen({ changeTab }) {
	const inputRefNameEvent = React.createRef();
	const inputRefTextEvent = React.createRef();
	const inputRefMainColor = React.createRef();
	const inputRefBgColor = React.createRef();
	const inputRefDate = React.createRef();
	const inputRefTime = React.createRef();
	const [mainColor] = useState(
		localStorageGet('inputRefMainColor') || '#0077ff'
	);
	const [bgColor] = useState(localStorageGet('inputRefBgColor') || '#18181b');

	useEffect(() => {
		document.documentElement.style.setProperty('--main-edit-color', mainColor);
		document.documentElement.style.setProperty('--main-bg-color', bgColor);
	}, [bgColor, mainColor]);

	function handleClick() {
		localStorageWrite('inputRefNameEvent', inputRefNameEvent.current.value);
		localStorageWrite('inputRefTextEvent', inputRefTextEvent.current.value);
		localStorageWrite('inputRefMainColor', inputRefMainColor.current.value);
		localStorageWrite('inputRefBgColor', inputRefBgColor.current.value);
		localStorageWrite('inputRefDate', inputRefDate.current.value);
		localStorageWrite('inputRefTime', inputRefTime.current.value);
		localStorageWrite('screen', 'event');
		changeTab('event');
	}

	return (
		<main className='mx-auto container flex flex-col justify-center items-center h-screen'>
			<div className='text-center'>
				<h1 className='text-white text-3xl sm:text-4xl '>
					Welcome to <span className='main-text-color'>HolidayCountdown!</span>
				</h1>
				<p className='text-gray-400 text-lg'>
					Create an event and start reporting
					<span className='main-text-color'> with us!</span>
				</p>
			</div>
			<div className='flex flex-col gap-y-3 mt-7 sm:gap-y-0'>
				<Form labelName='Event name:' type='text' ref={inputRefNameEvent} />
				<Form
					labelName='Text at the end:'
					type='text'
					ref={inputRefTextEvent}
				/>
				<Form
					labelName='Main color:'
					type='colorMain'
					ref={inputRefMainColor}
				/>
				<Form
					labelName='Background color:'
					type='colorBg'
					ref={inputRefBgColor}
				/>
				<Form labelName='Date the event:' type='date' ref={inputRefDate} />
				<Form labelName='Event start time:' type='time' ref={inputRefTime} />
				<Button click={handleClick}>Start event</Button>
			</div>
		</main>
	);
}

MainScreen.propTypes = {
	changeTab: PropTypes.func.isRequired,
};
