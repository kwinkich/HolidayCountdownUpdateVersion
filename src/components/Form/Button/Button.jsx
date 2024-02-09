import PropTypes from 'prop-types';

const Button = ({ children, click, ...props }) => {
	return (
		<button
			{...props}
			className='btn-bg btn-text text-xl px-9 py-3 font-semibold rounded-lg'
			onClick={click}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	click: PropTypes.func.isRequired,
	children: PropTypes.any,
};

export default Button;
