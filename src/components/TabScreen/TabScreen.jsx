import PropTypes from 'prop-types';
import Button from '../Form/Button/Button.jsx';

export default function TabScreen(onChange) {
	return <Button onClick={() => onChange('event')}>Start Event</Button>;
}

TabScreen.propTypes = {
	onChange: PropTypes.string,
};
