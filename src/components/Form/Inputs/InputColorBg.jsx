import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const InputColorBg = React.forwardRef((props, ref) => {
	const [bgColor, setBgColor] = useState(
		localStorage.getItem('inputRefMainColor')
	);

	function handleBgColorChange(event) {
		setBgColor(event.target.value);
	}

	useEffect(() => {
		document.documentElement.style.setProperty('--main-bg-color', bgColor);
	}, [bgColor]);

	return (
		<input
			ref={ref}
			type='color'
			onChange={handleBgColorChange}
			defaultValue='#18181b'
			className='h-[35px] w-[55px] text-white border-2 border-color border-bg'
		/>
	);
});

InputColorBg.displayName = 'InputColorBg';

InputColorBg.propTypes = {
	ref: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
	]),
};

export default InputColorBg;
