import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, open }) => {
	const dialog = useRef();

	useEffect(() => {
		if (open) {
			dialog.current.showModal();
		} else {
			dialog.current.close();
		}
	}, [open]);

	return createPortal(
		<dialog
			ref={dialog}
			className='px-12 py-12 max-w-[400px] rounded-2xl bg-color'
		>
			{children}
		</dialog>,
		document.getElementById('modal')
	);
};

Modal.propTypes = {
	children: PropTypes.string.isRequired,
	open: PropTypes.bool,
};

export default Modal;
