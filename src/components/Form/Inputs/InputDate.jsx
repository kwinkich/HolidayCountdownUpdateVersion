import PropTypes from 'prop-types';
import React from 'react';

const InputDate = React.forwardRef((props, ref) => {
	return (
		<input
			ref={ref}
			type='date'
			className='text-white px-2 py-3 rounded-lg border-2 border-color border-bg'
		/>
	);
});

InputDate.displayName = 'InputDate';

InputDate.propTypes = {
	ref: PropTypes.any,
};

export default InputDate;
