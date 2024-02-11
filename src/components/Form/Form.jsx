// Form.jsx
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import InputColorBg from './Inputs/InputColorBg';
import InputColorMain from './Inputs/InputColorMain';
import InputDate from './Inputs/InputDate';
import InputText from './Inputs/InputText';
import InputTime from './Inputs/InputTime';
import Label from './Label/Label';

const Form = forwardRef(({ labelName, type }, ref) => {
	switch (type) {
		case 'text':
			return (
				<div className='flex flex-col gap-y-2 sm:gap-0 sm:flex-row sm:w-[350px] sm:justify-between sm:items-center sm:mb-4'>
					<Label labelName={labelName} />
					<InputText ref={ref} />
				</div>
			);
		case 'colorMain':
			return (
				<div className='flex flex-col gap-y-2 sm:gap-0 sm:flex-row sm:w-[350px] sm:justify-between sm:items-center sm:mb-4'>
					<Label labelName={labelName} />
					<InputColorMain ref={ref} />
				</div>
			);
		case 'colorBg':
			return (
				<div className='flex flex-col gap-y-2 sm:gap-0 sm:flex-row sm:w-[350px] sm:justify-between sm:items-center sm:mb-4'>
					<Label labelName={labelName} />
					<InputColorBg ref={ref} />
				</div>
			);
		case 'date':
			return (
				<div className='flex flex-col gap-y-2 sm:gap-0 sm:flex-row sm:w-[350px] sm:justify-between sm:items-center sm:mb-4'>
					<Label labelName={labelName} />
					<InputDate ref={ref} />
				</div>
			);
		case 'time':
			return (
				<div className='flex flex-col gap-y-2 sm:gap-0 sm:flex-row sm:w-[350px] sm:justify-between sm:items-center sm:mb-4'>
					<Label labelName={labelName} />
					<InputTime ref={ref} />
				</div>
			);
		default:
			return null;
	}
});

Form.displayName = 'Form';

Form.propTypes = {
	labelName: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	ref: PropTypes.object,
};

export default Form;
