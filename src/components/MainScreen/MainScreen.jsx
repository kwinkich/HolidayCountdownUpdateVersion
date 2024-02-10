import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Form/Button/Button.jsx';
import Form from '../Form/Form.jsx';

export default function MainScreen({ changeTab }) {
	const inputRefNameEvent = React.createRef();
	const inputRefTextEvent = React.createRef();
	const inputRefMainColor = React.createRef();
	const inputRefBgColor = React.createRef();
	const inputRefDate = React.createRef();
	const inputRefTime = React.createRef();

	function localStorageWrite(name, value) {
		localStorage.setItem(name, value);
	}

	function handleClick() {
		localStorageWrite('inputRefNameEvent', inputRefNameEvent.current.value);
		localStorageWrite('inputRefTextEvent', inputRefTextEvent.current.value);
		localStorageWrite('inputRefMainColor', inputRefMainColor.current.value);
		localStorageWrite('inputRefBgColor', inputRefBgColor.current.value);
		localStorageWrite('inputRefDate', inputRefDate.current.value);
		localStorageWrite('inputRefTime', inputRefTime.current.value);
		changeTab('event');
	}

	return (
		<main className='mx-auto container flex flex-col justify-center items-center h-screen'>
			<h1 className='text-4xl text-white'>
				Welcome to <span className='main-text-color'>HolidayCountdown!</span>
			</h1>
			<p className='text-gray-400 text-lg'>
				Create an event and start reporting
				<span className='main-text-color'> with us!</span>
			</p>
			<div className='mt-7'>
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
	changeTab: PropTypes.any,
};
