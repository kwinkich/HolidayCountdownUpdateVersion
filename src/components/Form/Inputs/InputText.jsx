import PropTypes from 'prop-types';
import React from 'react';

const InputText = React.forwardRef((props, ref) => {
	return (
		<input
			ref={ref}
			type='text'
			placeholder='Enter Value'
			className='text-white px-2 py-3 rounded-lg border-2 border-color border-bg'
		/>
	);
});

InputText.displayName = 'InputText';

InputText.propTypes = {
	ref: PropTypes.any,
};

export default InputText;
