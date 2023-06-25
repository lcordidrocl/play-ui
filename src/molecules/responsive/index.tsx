import { getDeviceSize } from 'helpers';
import { useMediaQuery } from 'react-responsive';

import { ChildrenType, ComponentType, DeviceType } from 'types/index';
import Col from 'atoms/col';
import Modal from '../modal';

type Props = {
	children: ChildrenType;
	onClose: () => void;
	device?: DeviceType;
	type?: ComponentType;
};

export function Responsive({ children, onClose, device, type }: Props) {
	const deviceSize = getDeviceSize(device);
	const isSmallDevice = useMediaQuery({ query: `(max-width: ${deviceSize})` });

	const getWrapper = () => {
		switch (type) {
			case 'drawer':
			default:
				return (
					<Col size={1} align="flex-start">
						{children}
					</Col>
				);
		}
	};

	const getModal = () => {
		switch (type) {
			case 'drawer':
			default:
				return (
					<Modal onClose={onClose} variant="left" size="xSmall">
						{children}
					</Modal>
				);
		}
	};

	const render = () => {
		if (isSmallDevice) {
			return getModal();
		} else {
			return getWrapper();
		}
	};

	return <>{render()}</>;
}

export default Responsive;
