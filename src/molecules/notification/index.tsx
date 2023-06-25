import React, { ReactNode } from 'react';
import { ColorType, OnClickType } from 'types';

import { Wrapper } from './index.styles';
import { Text, Button, Icon } from 'atoms';

type Props = {
	message: ReactNode;
	type?: ColorType;
	onClick?: OnClickType | undefined;
};

export const Notification = ({ message, type = 'primary', onClick }: Props) => {
	return (
		<Wrapper className="notification" themeType={type}>
			<Icon as="Error" size="Small" />
			<Text size="Default">{message}</Text>
			<Button
				type="button"
				variant="round"
				size="Large"
				onClick={onClick}
				theme={type}
			>
				<Icon as="Cross" size="Small" />
			</Button>
		</Wrapper>
	);
};

export default Notification;
