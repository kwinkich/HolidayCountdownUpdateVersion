import PropTypes from 'prop-types';
import React from 'react';
// import Button from './Button/Button';
import InputColor from './Inputs/InputColor';
import InputDate from './Inputs/InputDate';
import InputText from './Inputs/InputText';
import InputTime from './Inputs/InputTime';
import Label from './Label/Label';

const Form = React.forwardRef(({ labelName, type }, ref) => {
	console.log(type);

	switch (type) {
		case 'text':
			return (
				<div className='w-[350px] flex justify-between items-center mb-4'>
					<Label labelName={labelName} />
					<InputText ref={ref} />
					{/* <Button click={handleClick} /> */}
				</div>
			);
		case 'color':
			return (
				<div className='w-[350px] flex justify-between items-center mb-4'>
					<Label labelName={labelName} />
					<InputColor ref={ref} />
					{/* <Button click={handleClick} /> */}
				</div>
			);
		case 'date':
			return (
				<div className='w-[350px] flex justify-between items-center mb-4'>
					<Label labelName={labelName} />
					<InputDate ref={ref} />
					{/* <Button click={handleClick} /> */}
				</div>
			);
		case 'time':
			return (
				<div className='w-[350px] flex justify-between items-center mb-4'>
					<Label labelName={labelName} />
					<InputTime ref={ref} />
					{/* <Button click={handleClick} /> */}
				</div>
			);
	}
});

Form.displayName = 'Form';

Form.propTypes = {
	labelName: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	ref: PropTypes.object,
};

export default Form;
