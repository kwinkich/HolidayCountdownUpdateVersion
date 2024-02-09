import PropTypes from 'prop-types';
import React from 'react';

const InputTime = React.forwardRef((props, ref) => {
	return (
		<input
			ref={ref}
			type='time'
			className='text-white px-2 py-3 rounded-lg border-2 border-color border-bg'
		/>
	);
});

InputTime.displayName = 'InputTime';

InputTime.propTypes = {
	ref: PropTypes.any,
};

export default InputTime;
