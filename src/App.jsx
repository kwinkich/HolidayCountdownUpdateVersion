import { useState } from 'react';
import EventScreen from './components/EventScreen/EventScreen';
import MainScreen from './components/MainScreen/MainScreen';
import './index.css';
import localStorageWrite from './modules/localStorage/localStorageWrite';

function App() {
	const [tab, setTab] = useState(localStorage.getItem('screen') || 'main');

	const changeTab = (current) => {
		setTab(current);
		localStorageWrite('screen', current);
	};

	return (
		<>
			{tab === 'main' && <MainScreen changeTab={changeTab} />}
			{tab === 'event' && <EventScreen changeTab={changeTab} />}
		</>
	);
}

export default App;
