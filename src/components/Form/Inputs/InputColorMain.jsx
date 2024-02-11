import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const InputColorMain = React.forwardRef((props, ref) => {
	const [mainColor, setMainColor] = useState('');

	function handleMainColorChange(event) {
		setMainColor(event.target.value);
	}

	useEffect(() => {
		document.documentElement.style.setProperty('--main-edit-color', mainColor);
	}, [mainColor]);

	return (
		<input
			ref={ref}
			type='color'
			onChange={handleMainColorChange}
			defaultValue='#0077ff'
			className='h-[35px] w-[55px] text-white border-2 border-color border-bg'
		/>
	);
});

InputColorMain.displayName = 'InputColorMain';

InputColorMain.propTypes = {
	ref: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
	]),
};

export default InputColorMain;
