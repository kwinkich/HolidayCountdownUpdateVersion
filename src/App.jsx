import { useState } from 'react';
import EventScreen from './components/EventScreen/EventScreen';
import MainScreen from './components/MainScreen/MainScreen';
import './index.css';

function App() {
	const [tab, setTab] = useState('main');

	return (
		<>
			{tab === 'main' && (
				<MainScreen changeTab={(current) => setTab(current)} />
			)}

			{tab === 'event' && <EventScreen />}
		</>
	);
}

export default App;
