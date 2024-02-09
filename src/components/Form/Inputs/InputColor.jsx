import PropTypes from 'prop-types';
import React from 'react';

const InputColor = React.forwardRef((props, ref) => {
	return (
		<input
			ref={ref}
			type='color'
			className='h-[35px] w-[55px] text-white border-2 border-color border-bg'
		/>
	);
});

InputColor.displayName = 'InputColor';

InputColor.propTypes = {
	ref: PropTypes.any,
};

export default InputColor;
