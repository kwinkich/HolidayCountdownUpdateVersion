import PropTypes from 'prop-types';

const Label = ({ labelName }) => {
	return <label className='text-lg text-white mr-2'>{labelName}</label>;
};

Label.propTypes = {
	labelName: PropTypes.string.isRequired,
};

export default Label;
