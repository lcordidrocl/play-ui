import { ReactNode } from 'react';
import { ColorType, OnClickType } from 'types';

import { Wrapper } from './index.styles';
import { Text, Button, Icon } from 'atoms';

type Props = {
	message: ReactNode;
	type?: ColorType;
	onClose?: OnClickType | undefined;
};

export const Snackbar = ({ message, type, onClose }: Props) => {
	return (
		<Wrapper className="snackbar" themeType={type}>
			<div>
				<Icon as="Warning" size="Small" />
				<Text size="Default">{message}</Text>
				<Button
					type="button"
					variant="round"
					size="Large"
					onClick={onClose}
					theme={type}
				>
					<Icon as="Cross" size="Small" />
				</Button>
			</div>
		</Wrapper>
	);
};

export default Snackbar;
