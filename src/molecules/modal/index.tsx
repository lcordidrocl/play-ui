import { ChildrenType, ModalVariantType, SizeType } from 'types';
import { useCallback, useEffect, useRef } from 'react';

import { Wrapper } from './index.styles';

type Props = {
	onClose?: () => void;
	children: ChildrenType;
	size?: SizeType;
	variant?: ModalVariantType;
};

export function Modal({ children, onClose, size, variant = 'center' }: Props) {
	const ref = useRef<HTMLInputElement>(null);
	const escFunction = useCallback(
		(event: { keyCode: number }) => {
			if (event.keyCode === 27) {
				onClose && onClose();
			}
		},
		[onClose]
	);
	const checkIfClickedOutside = useCallback(
		(e: any) => {
			if (ref.current && !ref.current.contains(e.target)) {
				onClose && onClose();
			}
		},
		[onClose]
	);

	useEffect(() => {
		document.addEventListener('keydown', escFunction);
		document.addEventListener('mousedown', checkIfClickedOutside);

		return () => {
			document.removeEventListener('keydown', escFunction);
			document.removeEventListener('mousedown', checkIfClickedOutside);
		};
	}, [checkIfClickedOutside, escFunction]);

	return (
		<Wrapper size={size} variant={variant}>
			<div ref={ref}>{children}</div>
		</Wrapper>
	);
}

export default Modal;
